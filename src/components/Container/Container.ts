import styled from "@emotion/styled";
import convertPixelToRem from "utils/convertPixelToRem";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: ${convertPixelToRem(10)} 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);

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
  width: ${convertPixelToRem(400)};
  padding: ${convertPixelToRem(30)} ${convertPixelToRem(50)};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border-radius: ${convertPixelToRem(10)};
  background-color: rgba(255, 255, 255, 0.3);
`;

export default Container;
