import React, { useEffect, useCallback, useState, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Content, Error, Label } from './styles';

export const InputFile = ({
  name,
  label,
  placeholder,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef();
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
        {placeholder && (
          <label defaultValue={defaultValue} htmlFor={fieldName}>
            {placeholder}
          </label>
        )}
      </Label>

      <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {label ? (
          <label htmlFor={fieldName}>
            {Icon && <Icon size={20} />}
            {label}
          </label>
        ) : null}

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
      </Content>
    </>
  );
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
};

InputFile.defaultProps = {
  placeholder: null,
  label: null,
  icon: null,
};
