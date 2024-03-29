import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";

import Input from "../common/input";
import Submit from "../common/submit";
const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const router = useRouter();

  const [formData, setformData] = useState({
    mail: "",
    password: "",
  });
  const { mail, password } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ mail, password }));
    document.getElementById("password").value = "";
  };

  if (isAuthenticated) {
    router.push("/dashboard");
  }

  return (
    <form id='loginForm' onSubmit={(e) => onSubmit(e)}>
      <Input
        name='mail'
        label='Adresse e-mail'
        placeholder='Votre adresse e-mail'
        type='email'
        onChange={(e) => onChange(e)}
      />
      <Input
        name='password'
        label='Mot de passe'
        placeholder='Votre mot de passe'
        type='password'
        id='password'
        onChange={(e) => onChange(e)}
      />
      <div className='quote-introduction__button'>
        <Submit />
      </div>
    </form>
  );
};

export default LoginForm;
