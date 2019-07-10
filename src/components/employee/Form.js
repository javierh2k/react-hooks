import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from 'react-navi';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CustomInputComponent } from '../shared/form';

const createEmployeeSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

export const EmployeeForm = ({ reqdata, id }) => {
  const save = useStoreActions(actions => actions.employee.save);
  const state = useStoreState(state => state);
  const navigation = useNavigation();
  console.log(state);
  const { data, error, loading } = reqdata;

  const onSubmit = async (employee, d) => {
    const employeeModel = {
      ...employee,
      id,
    };

    await save(employeeModel);
    await navigation.navigate('/employees');
  };

  return (
    <div>
      <h1>Datos de usuario</h1>
      <Formik
        validationSchema={createEmployeeSchema}
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
