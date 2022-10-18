import './ControlErrorsComponent.scss';

const ControlErrorsComponent = (control: any) => {
  return (
    <>
      {control?.type && (
        <span>
          {control?.type === 'required' && <small className="validate-info">Por favor, informe esse campo.</small>}
          {control?.type === 'minLength' && <small className="validate-info">Por favor, informe no mínimo {control?.parameter} caracteres.</small>}
          {control?.type === 'maxLength' && <small className="validate-info">Por favor, informe no máximo {control?.parameter} caracteres.</small>}
        </span>
      )
      }
    </>
  );
};

export default ControlErrorsComponent;