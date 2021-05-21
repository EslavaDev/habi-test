import React, { useCallback } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { WrapperFieldStyled } from './styled';

export const FieldSelect = ({ name, classNameInputStyles, disabled, list }) => {
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
        <label htmlFor={name} className="field__label">
          {name}
        </label>

        <select {...field} className={classNameInputStyles} id={name} onChange={handleCallback} value={field.value} disabled={disabled}>
          <option>Selecione...</option>
          {list.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="field__input-error">{meta && meta.error}</span>
      </div>
    </WrapperFieldStyled>
  );
};

FieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  classNameInputStyles: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool,
};
FieldSelect.defaultProps = {
  classNameInputStyles: '',
  disabled: false,
};
