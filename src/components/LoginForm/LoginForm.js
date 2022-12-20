// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as SC from './Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   console.log(name, value);
  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const logInData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!logInData.email || !logInData.password) {
      alert(`Field should not be empty`);
      return;
    }

    dispatch(logIn(logInData));

    form.reset();
  };

  return (
    <SC.ContainerMain>
      <SC.Form onSubmit={handleSubmit} autoComplete="off">
        <SC.LabelForm>
          Email
          <SC.InputForm type="email" name="email" />
        </SC.LabelForm>
        <SC.LabelForm>
          Password <SC.InfoSpan>(min 7 signs)</SC.InfoSpan>
          <SC.InputForm type="password" name="password" />
        </SC.LabelForm>
        <SC.ButtonSubmit type="submit">Log In</SC.ButtonSubmit>
      </SC.Form>
    </SC.ContainerMain>
  );
};
