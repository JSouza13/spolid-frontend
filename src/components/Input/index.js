import React, { useEffect, useCallback, useState, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error, Label } from './styles';

export const Input = ({ name, label, icon: Icon, prefix, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

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
          <label htmlFor={fieldName} width={rest.width}>
            {label}
          </label>
        )}
      </Label>
      <Container
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        width={rest.width}
      >
        {prefix ? <span>{prefix}</span> : Icon && <Icon size={20} />}

        <input
          autoComplete="new-password"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          id={fieldName}
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
  prefix: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
  label: '',
  prefix: '',
};
