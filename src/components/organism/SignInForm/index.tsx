import React, { useEffect } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '@components';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import { setCookie } from '@utils/cookies';
import { toast } from 'react-toastify';
import { LoginTypes } from '@services';
import { login } from '@store/slice/authSlice';
import { useState } from 'react';
import * as Ai from 'react-icons/ai';

interface Values {
  email: string;
  password: string;
}
const SignInForm = () => {
  const dispatch = useAppDispatch();
  const { status, error, token } = useAppSelector((state) => state.auth);

  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (status === 'fulfilled') {
      toast.success('User has successfully login');
      setCookie('acs_tkn', token);
      router.push('/');
    }
    if (status === 'error') {
      toast.error(error);
    }
  }, [status, error]);

  const initialValues = { email: '', password: '' };
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Invalid password').required('Required'),
  });

  const handleChange = (val: boolean) => {
    setViewPassword(val);
  };

  const handleSubmit = async (values: LoginTypes) => {
    await dispatch(login(values))
  };

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

export default SignInForm;
