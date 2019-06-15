import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  //   InputGroup,
  //   InputGroupAddon,
  //   Option,
  Button,
} from '@bootstrap-styled/v4';

export const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <FormGroup>
      <Label htmlFor="inline-form-input"> {props.label || field.name}</Label>
      <Input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </FormGroup>
  </div>
);
