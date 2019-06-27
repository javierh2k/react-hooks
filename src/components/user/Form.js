import React from 'react';
import { Form, Button } from '@bootstrap-styled/v4';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { CustomInputComponent } from '../shared/form';
import { useStore } from '../../store/useStore';
import { useUser } from '../../hooks/user';

const createUserSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
});

export const UserForm = ({ reqdata, id }) => {
  const {
    state: { user },
    dispatch,
  } = useStore();

  const { data, error, loading } = reqdata || useUser(id);
  console.log(data, '______', user);
  // const allUsers = data.allUsers || [];
  // if (loading) return <TrMessage> loading... </TrMessage>;
  // if (error)
  //   return <TrMessage data={allUsers}> Error! {error.message} </TrMessage>;

  // console.log('xxxxx', user);
  // dispatch({ type: 'logout' })
  /**
 

mutation createUser($user: User) {
  createUser(input: $user) {
    id
    firstName
    lastName
    email
  }
}



 
{
  "user": {
     "id" : "4571",
    "firstName": "Max",
    "lastName": "aaa",
    "email": "max@nil.com"
  } 
}

* 
 * @param {
 } user 
 * @param {*} d 
 */
  const onSubmit = (user, d) => {
    // console.log(user, d, '+++++++');
    // { values, actions }
    // console.log(actions);
    // actions.setSubmitting(false);
    user.id = +user.id + 1;
    dispatch({ type: 'save', ...user });
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>Datos de usuario</h1>
      <Formik
        validationSchema={createUserSchema}
        initialValues={data.User}
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
