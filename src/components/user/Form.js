import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { CustomInputComponent } from '../shared/form';
import { useStore } from '../../store/useStore';

const createUserSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

export const UserForm = ({ reqdata }) => {
  const {
    state: { user },
    dispatch,
  } = useStore();

  console.log('xxxxx', user);
  // dispatch({ type: 'logout' })

  const onSubmit = (data, d) => {
    console.log(data, d);
    // { values, actions }
    // console.log(actions);
    // actions.setSubmitting(false);

    dispatch({ type: 'save', ...data });
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>Datos de usuario</h1>
      <Formik
        validationSchema={createUserSchema}
        initialValues={reqdata}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              label="Nombre"
              component={CustomInputComponent}
            />
            <Field name="lastName" component={CustomInputComponent} />
            <Field
              name="email"
              component={CustomInputComponent}
              type="email"
              label="Email"
            />

            <Button type="submit">Guardar</Button>
          </Form>
        )}
      />
    </div>
  );
};
