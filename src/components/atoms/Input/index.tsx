import React from 'react';
import { useField } from 'formik';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

function Input(props: InputProps) {
  const { label, type, name, placeholder, ...nativeProps } = props;
  const [field, meta] = useField(name);

  return (
    <div className="form-control w-full">
      <label className="label">{label}</label>
      <input
        {...field}
        name={name}
        placeholder={placeholder}
        type={type}
        className="input input-bordered w-full"
        {...nativeProps}
      />
      {meta.touched && meta.error && (
        <label className="label text-error">{meta.error}</label>
      )}
    </div>
  );
}

export default Input;
