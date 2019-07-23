import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from 'react-navi';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CustomInputComponent, CustomSelectComponent } from '../shared/form';

const createEmployeeSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  // category: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

export const EmployeeForm = ({ reqdata, id }) => {
  const save = useStoreActions(actions => actions.employee.save);
  const state = useStoreState(state => state);
  const navigation = useNavigation();
  console.log(state, reqdata, ':::::::', reqdata.employee);
  const { data, error, loading } = reqdata;

  console.log(reqdata, '::**********', data.employee);

  const onSubmit = async (employee, d) => {
    const employeeModel = {
      ...employee,
      id,
    };
    console.log(employee, 'oooo');
    await save(employeeModel);
    await navigation.navigate('/employees');
  };
  const categories = data.categories.map(o => ({
    label: o.name,
    value: o.id,
  }));
  const employee = {
    ...data.employee,
    category: data.employee.category && data.employee.category.id,
  };

  return (
    <div>
      <h1>Datos del empleado</h1>
      <Formik
        validationSchema={createEmployeeSchema}
        initialValues={employee}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              label="Nombre"
              component={CustomInputComponent}
            />
            <Field
              name="lastname"
              label="apellido"
              component={CustomInputComponent}
            />
            <Field
              name="email"
              component={CustomInputComponent}
              type="email"
              label="Email"
            />

            <Field
              name="category"
              options={categories}
              component={CustomSelectComponent}
              placeholder="Select a Category..."
            />

            <Button type="submit">Guardar</Button>
          </Form>
        )}
      />
    </div>
  );
};
