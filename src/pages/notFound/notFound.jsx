import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const StyledNotFoundTitle = styled.div`
  color: red;
  font-weight: 400;
  font-size: 60px;
  
`;
export default function NotFoundPage() {
  return (
    <StyledNotFoundPage>
      <StyledNotFoundTitle>404 Page is not found</StyledNotFoundTitle>
    </StyledNotFoundPage>
  );
}
