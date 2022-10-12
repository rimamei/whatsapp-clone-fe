import { SignUpForm } from '@components';
import { AuthLayout } from '@layout';
import React from 'react';

function SignUp() {
  return (
    <div>
       <h3 className="text-center font-bold mb-4">Register</h3>
      <SignUpForm />
    </div>
  );
}

export default SignUp;

SignUp.Layout = AuthLayout;
