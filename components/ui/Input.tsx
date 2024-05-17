import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  title?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  htmlFor,
  type = 'text',
  value,
  name,
  title,
  onChange,
  required,
  error,
  maxLength,
  pattern,
  disabled,
  errorMessage,
  ...props
}) => {
  return (
    <div className="input-wrapper">
      {title && <label htmlFor={htmlFor}>{title}</label>}
      <input
        type={type}
        id={htmlFor}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        disabled={disabled}
        className={`input-styles ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Input;
