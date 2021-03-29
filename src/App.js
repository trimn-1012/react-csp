import './App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from './yupGlobal'

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    .email('Email invalid'),
  pass: yup
    .string()
    .required('Required')
    .password('Password invalid'),
})

function App() {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="box">
      <h1>login</h1>
      <div className="input-field">
        <input type="text" name="username" id="username" placeholder="Email" autoComplete="off" ref={register} />
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>
      <div className="input-field">
        <input type="password" name="pass" id="pass" placeholder="Password" autoComplete="off" ref={register} />
        {errors.pass && <p className="error">{errors.pass.message}</p>}
      </div>
      <button type="submit" id="submit">LOGIN</button>
    </form>
  );
}

export default App;
