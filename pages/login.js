import { useState } from "react";
import styled from "styled-components";
import Brand from "../components/Brand";
import Button from "../components/Button";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
import withoutAuth from "../hocs/withoutAuth";

const LoginLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (screen and max-width: 1024px) {
    display: block;
  }
`;

const LeftColumn = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.dark};
`;

const FormHolder = styled.div`
  width: 100%;
  max-width: 22.5rem;

  display: flex;
  flex-direction: column;
`;

const SwitchButton = styled(Button)`
  margin: 2rem 0;
`;

function Login() {
  const [currentForm, setCurrentForm] = useState("Log In");
  const [label, setLabel] = useState("Sign Up");

  function toggleForm() {
    if (currentForm === "Log In") {
      setCurrentForm("Sign Up");
      setLabel("Log In");
    } else {
      setCurrentForm("Log In");
      setLabel("Sign Up");
    }
  }

  return (
    <LoginLayout>
      <LeftColumn>
        <Brand vertical />
        <FormHolder>
          {currentForm === "Log In" && <LoginForm />}
          {currentForm === "Sign Up" && <SignUpForm />}

          <SwitchButton
            inverted
            label={label}
            color={"darkLight"}
            onClick={() => toggleForm()}
          />
        </FormHolder>
      </LeftColumn>
      <img src="./placeholder.jpg" />
    </LoginLayout>
  );
}

export default withoutAuth(Login);
