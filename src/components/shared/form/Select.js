// import { FieldProps } from "formik";
// import React from "react";
// import Select from "react-select";
// import { OptionsType, ValueType } from "react-select/lib/types";

// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomSelectProps extends FieldProps {
//   options: OptionsType<Option>;
//   isMulti?: boolean;
//   className?: string;
//   placeholder?: string;
// }

// export const CustomSelect = ({
//   className,
//   placeholder,
//   field,
//   form,
//   options,
//   isMulti = false
// }: CustomSelectProps) => {
//   const onChange = (option: ValueType<Option | Option[]>) => {
//     form.setFieldValue(
//       field.name,
//       isMulti
//         ? (option as Option[]).map((item: Option) => item.value)
//         : (option as Option).value
//     );
//   };

//   const getValue = () => {
//     if (options) {
//       return isMulti
//         ? options.filter(option => field.value.indexOf(option.value) >= 0)
//         : options.find(option => option.value === field.value);
//     } else {
//       return isMulti ? [] : ("" as any);
//     }
//   };

//   return (
//     <Select
//       className={className}
//       name={field.name}
//       value={getValue()}
//       onChange={onChange}
//       placeholder={placeholder}
//       options={options}
//       isMulti={isMulti}
//     />
//   );
// };

// export default CustomSelect;

import * as React from 'react';
// import { Formik, Form, Field, FieldProps } from 'formik';
import Select from 'react-select';
import { FormGroup, Label } from '@bootstrap-styled/v4';

// import FormGroup from '../FormGroup'
// import Input from '../Input'

export const CustomSelectComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { options } = props;
  //   const onChange = option => {
  //     form.setFieldValue(
  //       field.name,
  //       isMulti ? option.map(item => item.value) : option.value
  //     );
  //   };

  return (
    <div>
      <FormGroup>
        <Label htmlFor="inline-form-input"> {props.label || field.name}</Label>
        <Select
          {...field}
          {...props}
          options={options}
          value={
            options ? options.find(option => option.value === field.value) : ''
          }
          onChange={option => setFieldValue(field.name, option.value)}
        />

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    </div>

    // <FormGroup>
    //   <label htmlFor={field.name}>{props.label}</label>

    //   {touched[field.name] && errors[field.name] && (
    //     <div className="error">{errors[field.name]}</div>
    //   )}
    // </FormGroup>
  );
};
