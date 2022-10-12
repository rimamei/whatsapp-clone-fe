import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '@components';

interface Values {
  email: string;
  password: string;
}
const SignInForm = () => {
  const initialValues = { email: '', password: '' };
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Invalid password').required('Required'),
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <Input label="Email" name="email" placeholder="Email" type="text" />
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            type="text"
          />
          <Button
            className="mt-8 text-white w-full"
            color="accent"
            type="submit"
            disabled={!props.isValid || !props.dirty}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
