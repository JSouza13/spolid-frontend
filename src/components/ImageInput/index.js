import React, { useEffect, useCallback, useState, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Error, Content, Container, Label } from './styles';

export const ImageInput = ({
  name,
  label,
  placeholder,
  icon: Icon,
  preview,
  width,
  ...rest
}) => {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputClick = useCallback(() => setIsFocused(true), []);

  const handleOnInput = useCallback(() => {
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
      <Container>
        <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
          {placeholder ? (
            <label htmlFor={fieldName}>
              {Icon && <Icon size={20} />}
              {inputRef.current?.value || placeholder}
            </label>
          ) : null}

          <input
            type="file"
            accept="image/*"
            onInput={handleOnInput}
            onClick={handleInputClick}
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
        {preview && <img src={preview} alt="Preview" width={width} />}
      </Container>
    </>
  );
};

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  preview: PropTypes.string,
  width: PropTypes.string,
};

ImageInput.defaultProps = {
  placeholder: null,
  label: null,
  icon: null,
  preview: null,
  width: null,
};
