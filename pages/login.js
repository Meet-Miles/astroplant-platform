import styled from "styled-components";
import LoginForm from "../components/forms/LoginForm";
import withoutAuth from "../hocs/withoutAuth";

const LoginLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.darkLight};
`;

function Login() {
  return (
    <LoginLayout>
      <LeftColumn>
        <LoginForm></LoginForm>
      </LeftColumn>
      <img src="./placeholder.jpg" />
    </LoginLayout>
  );
}

export default withoutAuth(Login);