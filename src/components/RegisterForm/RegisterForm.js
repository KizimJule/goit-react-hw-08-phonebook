import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
