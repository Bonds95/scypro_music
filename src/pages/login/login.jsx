import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLoginPage = styled.div`
  color: red;
  background-color: black;
  height: 400px;
`;
export default function LoginPage({ user, onToken }) {
  console.log(user);
  return (
    <>
      <StyledLoginPage>LOGIN PAGE</StyledLoginPage>
      {/* <button onClick={onToken}>
        {user ? "Разлогиниться" : "Залогиниться"}
      </button> */}
      <Link to="/">
        <button onClick={onToken}>Войти</button>
      </Link>
      <Link to="/registration">
        <button>Регистрация</button>
      </Link>
    </>
  );
}
