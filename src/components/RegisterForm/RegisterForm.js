import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';
import * as SC from '../LoginForm/Form.styled';
// import * as SS from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   console.log(name, value);
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

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
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!formData.name || !formData.email || !formData.password) {
      alert(`Field should not be empty`);
      return;
    }

    dispatch(register(formData));
    form.reset();
  };

  return (
    <SC.ContainerMain>
      <Section title="Register">
        <SC.Form onSubmit={handleSubmit} autoComplete="off">
          <SC.LabelForm>
            <SC.TextLabel>Username</SC.TextLabel>
            <SC.InputForm type="text" name="name" />
          </SC.LabelForm>
          <SC.LabelForm>
            <SC.TextLabel>Email</SC.TextLabel>

            <SC.InputForm type="email" name="email" />
          </SC.LabelForm>
          <SC.LabelForm>
            <SC.TextLabel>
              Password <SC.InfoSpan>(min 7 signs)</SC.InfoSpan>
            </SC.TextLabel>

            <SC.InputForm type="password" name="password" />
          </SC.LabelForm>
          <SC.ButtonSubmit type="submit">Register</SC.ButtonSubmit>
        </SC.Form>
      </Section>
    </SC.ContainerMain>
  );
};
