import React, { useEffect, useCallback, useState, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error, Label } from './styles';

export const Input = ({ name, label, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label>
        {label && (
          <label defaultValue={defaultValue} htmlFor={fieldName}>
            {label}
          </label>
        )}
      </Label>
      <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#c53030" />
          </Error>
        )}
      </Container>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

Input.defaultProps = {
  label: null,
  icon: null,
};
