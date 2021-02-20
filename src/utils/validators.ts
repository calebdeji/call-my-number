export const isPhoneNumberValid = (phoneNumber: string) => {
  if (phoneNumber.length === 11 && !isNaN(Number(phoneNumber))) {
    return true;
  } else if (phoneNumber.length === 14) {
    const dialingCode = phoneNumber.substr(0, 4);
    if (dialingCode !== "+234") {
      return false;
    }

    const phoneNumberWithoutDialingCode = phoneNumber.substr(5);
    if (!isNaN(Number(phoneNumberWithoutDialingCode))) {
      return true;
    }

    return false;
  }

  return false;
};
