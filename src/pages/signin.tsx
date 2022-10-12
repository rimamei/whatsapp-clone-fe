import { SignInForm } from '@components';
import { AuthLayout } from '@layout';
import React from 'react';

function SignIn() {
  return (
    <div>
      <h3 className="text-center font-bold mb-4">Login</h3>
      <SignInForm />
    </div>
  );
}

export default SignIn;

SignIn.Layout = AuthLayout;
