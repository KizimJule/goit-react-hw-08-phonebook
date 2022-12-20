import { Section } from 'components/Section/Section';
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
      <Section title="LogIn">
        <SC.Form onSubmit={handleSubmit} autoComplete="off">
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
          <SC.ButtonSubmit type="submit">Log In</SC.ButtonSubmit>
        </SC.Form>
      </Section>
    </SC.ContainerMain>
  );
};
