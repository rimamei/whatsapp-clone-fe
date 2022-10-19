import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '@components';
import { RegisterTypes } from '@services';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { register } from '@store/slice/authSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';
import { setCookie } from '@utils/cookies';
import { useState } from 'react';
import * as Ai from 'react-icons/ai';

interface Values {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const { status, error, token } = useAppSelector((state) => state.auth);

  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (status === 'fulfilled') {
      toast.success('User has successfully registered');
      setCookie('acs_tkn', token);
      router.push('/');
    }
    if (status === 'error') {
      toast.error(error);
    }
  }, [status, error]);

  const handleChange = (val: boolean) => {
    setViewPassword(val);
  };

  const initialValues = { name: '', email: '', password: '' };
  const SigninSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Invalid name').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Invalid password').required('Required'),
  });

  const handleSubmit = async (values: RegisterTypes) => {
    await dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <Input label="Name" name="name" placeholder="Name" type="text" />
          <Input label="Email" name="email" placeholder="Email" type="text" />
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            type={viewPassword ? 'text' : 'password'}
            icons={viewPassword ? <Ai.AiFillEyeInvisible /> : <Ai.AiFillEye />}
            onClick={handleChange}
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

export default SignUpForm;
