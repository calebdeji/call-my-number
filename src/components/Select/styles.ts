import styled from "@emotion/styled";
import InputStyles from "components/Input/styles";
import Colors from "constants/color";
import convertPixelToRem from "utils/convertPixelToRem";

const Container = styled(InputStyles.Container)``;

const Select = styled.select`
  max-width: ${convertPixelToRem(500)};
  width: 100%;
  height: ${convertPixelToRem(40)};
  padding: ${convertPixelToRem(5)} ${convertPixelToRem(10)};
  border: solid ${convertPixelToRem(2)} ${Colors.primaryColor};
  border-radius: ${convertPixelToRem(10)};
  background-color: transparent;
`;

const SelectStyles = {
  Container,
  Select,
};

export default SelectStyles;
