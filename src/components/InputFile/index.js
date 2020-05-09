import React, { useEffect, useCallback, useState, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { ErrorMessage, Content, Label } from './styles';

export const InputFile = ({
  name,
  label,
  placeholder,
  icon: Icon,
  ...rest
}) => {
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
        {placeholder && (
          <label defaultValue={defaultValue} htmlFor={fieldName}>
            {placeholder}
          </label>
        )}
      </Label>

      <Content error={error} isFocused={isFocused} isFilled={isFilled}>
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
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
