import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { ErrorMessage, Content } from './styles';

export const InputFile = ({ name, label, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Content error={error}>
      {label ? (
        <label htmlFor={fieldName}>
          {Icon && <Icon size={20} />}
          {label}
        </label>
      ) : null}

      <input
        ref={inputRef}
        id={fieldName}
        className={error ? 'has-error' : ''}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  );
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

InputFile.defaultProps = {
  label: null,
  icon: null,
};
