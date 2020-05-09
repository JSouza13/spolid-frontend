import React, { useEffect, useCallback, useState, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { ErrorMessage, Content, Label } from './styles';

export const TextArea = ({ name, label, ...rest }) => {
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
      <Label>{label && <label htmlFor={fieldName}>{label}</label>}</Label>

      <Content error={error} isFocused={isFocused} isFilled={isFilled}>
        <textarea
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

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TextArea.defaultProps = {
  label: null,
};
