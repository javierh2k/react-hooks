import React from 'react';
import { Login } from './styles';

import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from 'react-navi';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CustomInputComponent } from '../shared/form';

const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
});




const initialState = {
    email: "",
    password: ""
  };


const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(6)
      .max(12)
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .required(),
  })

export const LoginForm = props => {
  console.log(props);
    const loginForm = {
        email: '', password: ''
    }


    const onSubmit = async (form, d) => {
        console.log(form);
    }

  return (
    <Login>
      <div className="login-html">
        <div className="tab">Sign In </div>
        <div className="login-form">
          <div className="sign-in-htm">
          <Formik
                validationSchema={LoginValidation}
                initialValues={initialState}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="group">
                        
                            <Field
                            name="email"
                            type="text"
                            label="Nombre"
                            className="input"
                            autocomplete={"off"}
                            component={CustomInputComponent}
                            />
                            
                        </div>
                        <div className="group">
                        
                        <Field
                            name="password"
                            type="text"
                            label="Nombre"
                            className="input"
                            autocomplete={"off"}
                            component={CustomInputComponent}
                            />
                        
                        </div>
                   
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                        </div>
                    </form>
         )}
/>
        </div>
      </div>
      </div>
    </Login>
  );
};
