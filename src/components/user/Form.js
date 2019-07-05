import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { CustomInputComponent } from '../shared/form';
import { useStore } from '../../store/useStore';
import { useUser } from '../../hooks/user';

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

export const UserForm = ({ reqdata, id }) => {
  const { state, dispatch } = useStore();

  const { data, error, loading } = reqdata || useUser(id);
  // console.log(data, '______', user);

  const onSubmit = (user, d) => {
    // console.log(user, d, '+++++++');
    // { values, actions }
    // console.log(actions);
    // actions.setSubmitting(false);
    // user.id = +user.id + 1;
    const userModel = {
      ...user,
      id,
    };

    dispatch({ type: 'save', userModel });
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>Datos de usuario</h1>
      <Formik
        validationSchema={createUserSchema}
        initialValues={data.employee}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              label="Nombre"
              component={CustomInputComponent}
            />
            <Field name="lastname" component={CustomInputComponent} />
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
      {JSON.stringify(state)}
    </div>
  );
};
