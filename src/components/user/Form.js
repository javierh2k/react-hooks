import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from 'react-navi';

import { useStoreState, useStoreActions } from 'easy-peasy';
import { CustomInputComponent } from '../shared/form';
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
  const save = useStoreActions(actions => actions.user.save);
  const state = useStoreState(state => state);
  const navigation = useNavigation();
  console.log(state);
  const { data, error, loading } = reqdata;

  const onSubmit = async (user, d) => {
    const userModel = {
      ...user,
      id,
    };

    await save(userModel);
    await navigation.navigate('/users');
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
    </div>
  );
};
