import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLoginPage = styled.div`
  color: red;
  background-color: black;
  height: 400px;
`;
export default function LoginPage({  onClick }) {
  
  
  
  return (
    <>
      <StyledLoginPage>LOGIN PAGE</StyledLoginPage>
      <Link onClick={onClick} to="/">
        <button >Войти</button>
      </Link>
      <Link to="/registration">
        <button>Регистрация</button>
      </Link>
    </>
  );
}
