import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "components/Button";
import Container from "components/Container";
import Input from "components/Input";
import storage from "libs/storage";
import Select from "components/Select";
import useComponentDidUpdate from "hooks/useComponentDidUpdate";
import { CallService } from "api";
import { SubContainer } from "components/Container/Container";
import { isPhoneNumberValid } from "utils/validators";

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>(() => {
    const storedPhoneNumber = storage.getItem("phone_number");
    if (storedPhoneNumber && typeof storedPhoneNumber === "string") {
      return storedPhoneNumber;
    }

    return "";
  });
  const [timeSelected, setTimeSelected] = useState<number>(1);

  const [isPhoneNumberError, setIsPhoneNumberError] = useState<boolean>(false);
  const [isSubmitFired, setIsSubmitFired] = useState<boolean>(false);

  const [isSubmitting, setisSubmitting] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = event.target;

    if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "time") {
      setTimeSelected(Number(value));
    }
  };

  const validatePhoneNumber = () => {
    if (!isPhoneNumberValid(phoneNumber)) {
      setIsSubmitFired(true);
      setIsPhoneNumberError(true);
      return false;
    } else {
      setIsPhoneNumberError(false);
    }

    return true;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsPhoneNumberError(false);

    if (!validatePhoneNumber()) {
      return false;
    }

    setisSubmitting(true);

    const phoneNumberWithDailingCode =
      phoneNumber.length === 11 ? `+234${phoneNumber.substr(1)}` : phoneNumber;

    const { message, status } = await CallService.call({
      phone_number: phoneNumberWithDailingCode,
      time: timeSelected,
    });

    if (status === "failed") {
      toast.error(message);
    } else {
      toast.success(message);
      if (!storage.getItem("phone_number")) {
        const answer = window.prompt(
          `Do you want to save ${phoneNumberWithDailingCode} as the default number?`,
          phoneNumberWithDailingCode
        );
        if (answer) {
          storage.setItem("phone_number", answer);
        }
      }
    }

    setisSubmitting(false);
  };

  useComponentDidUpdate(() => {
    if (isSubmitFired) {
      validatePhoneNumber();
    }
  }, [isSubmitFired, phoneNumber]);

  return (
    <Container>
      <ToastContainer />
      <SubContainer as="form" onSubmit={handleSubmit}>
        <Input
          label="Phone number"
          placeholder="Input the phone number to call"
          value={phoneNumber}
          onChange={handleChange}
          type="tel"
          errorMessage={
            isPhoneNumberError ? "Enter a valid Nigerian phone number" : ""
          }
          name="phoneNumber"
        />
        <Select
          options={[
            { label: "1 min", value: 1 },
            { label: "5 mins", value: 5 },
            { label: "30 mins", value: 30 },
            { label: "1 hour", value: 60 },
          ]}
          label="Activate call in how mins time"
          onChange={handleChange}
          name="time"
          value={timeSelected}
        />
        <Button align="center" isLoading={isSubmitting}>
          Call number
        </Button>
      </SubContainer>
    </Container>
  );
}

export default App;
