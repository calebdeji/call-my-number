import styled from "@emotion/styled";
import convertPixelToRem from "utils/convertPixelToRem";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: ${convertPixelToRem(10)} 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 500px) {
    padding: ${convertPixelToRem(10)} 20%;
  }
`;

export const SubContainer = styled.div`
  display: grid;
  height: max-content;
  row-gap: ${convertPixelToRem(30)};
  min-width: ${convertPixelToRem(250)};
  max-width: ${convertPixelToRem(500)};
  width: ${convertPixelToRem(300)};
`;

export default Container;
