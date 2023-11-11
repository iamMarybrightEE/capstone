import './form-input.scss';

const FormInput = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-input">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default FormInput;
