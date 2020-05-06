import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { ErrorMessage, Content, Label } from './styles';

export const TextArea = ({ name, label, ...rest }) => {
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
    <>
      <Label>{label && <label htmlFor={fieldName}>{label}</label>}</Label>

      <Content error={error}>
        <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
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
