import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../logo.svg';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import './index.css';

const SignIn: React.FC = () => {

  const { loadingSignInRequest } = 
  useSelector((state: StoreState) => 
    state.auth,
  );

  const dispatch = useDispatch(); 

  console.log(loadingSignInRequest);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="123456" />
      <button type="button" onClick={() => dispatch(signInRequest({ email: 'flower_albina@hotmail.com', password: 'default' }))}>{ loadingSignInRequest ? 'Carregando...': 'Entrar'}</button>
    </div>
  );
};
export default SignIn;