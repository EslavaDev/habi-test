import React, { useCallback } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { WrapperFieldStyled } from './styled';

export const FieldInput = ({ name, label, classNameInputStyles, disabled, type, placeholder }) => {
  const [field, meta, helper] = useField(name);
  const { setValue } = helper;
  const handleCallback = useCallback(
    e => {
      e.preventDefault();
      setValue(e.target.value);
    },
    [setValue],
  );
  return (
    <WrapperFieldStyled>
      <div className="field__container">
        <label htmlFor={label || name} className="field__label">
          {label || name}
        </label>
        <input
          {...field}
          id={label || name}
          className={classNameInputStyles}
          onChange={handleCallback}
          type={type}
          placeholder={placeholder}
          value={field.value}
          disabled={disabled}
        />
        <span className="field__input-error">{meta && meta.error}</span>
      </div>
    </WrapperFieldStyled>
  );
};

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classNameInputStyles: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
FieldInput.defaultProps = {
  classNameInputStyles: '',
  label: null,
  placeholder: '',
  disabled: false,
};
