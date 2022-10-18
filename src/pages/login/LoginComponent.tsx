import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LoginComponent.scss';

// Images
import prudentialWhiteLogo from 'assets/pru-logo_white.svg';

// Forms
import { useForm } from 'react-hook-form';
import ControlErrorsComponent from "../../shared/components/control-errors/ControlErrorsComponent";

// Services
import { GenericService } from "../../utils/services/generic/generic.service";
import { AuthenticationService } from "../../utils/services/authentication/authentication.service";

const LoginComponent: React.FC = () => {

  const navigate = useNavigate();
  const genericService = new GenericService();
  const authenticationService = new AuthenticationService();

  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useForm();

  const asyncValidation = (controlName: string): any => {
    return {
      onBlur: () => trigger(controlName),
      onChange: () => trigger(controlName)
    };
  };

  const onSubmit = handleSubmit((loginModel) => {
    delete loginModel.rememberMe;
    navigate('/app');
    // genericService.postToken('/auth/signin', loginModel)
    //   .then((response: any) => {
    //     authenticationService.setUser(response.data);
    //     navigate('/app');
    //   });
  });

  useEffect(() => {
    authenticationService.unsetUser();
  }, []);

  return (
    <>
      <div className="login-container">
        <img src={prudentialWhiteLogo} alt="Prudential Logo" className="login-logo" />
        <div className="login-card">
          <h1 className="login-title">Seja bem-vindo!</h1>
          <form onSubmit={onSubmit} className="login-form">
            <div className="col-xl-9">
              <input
                {...register('userName', { required: true, ...asyncValidation('userName') })}
                type='text'
                name='userName'
                placeholder="Usuário"
                className="form-control login-input"
              />
              <ControlErrorsComponent {...errors.userName} />
            </div>
            <div className="col-xl-9">
              <input
                {...register('password', { required: true, minLength: 6, ...asyncValidation('password') })}
                type='password'
                name='password'
                placeholder="Senha"
                className="form-control login-input"
              />
              <ControlErrorsComponent {...errors.password} parameter={6} />
            </div>
            <div className="col-xl-9">
              <button type="submit" className="login-btn" disabled={!isValid}>
                Entrar
              </button>
            </div>
            <div className="col-xl-10">
              <p className="login-info-text">
                Ao prosseguir, você concorda com nossos <strong>Termos de Uso </strong>
                e confirma que leu nossa declaração de <strong>privacidade e cookies</strong>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;