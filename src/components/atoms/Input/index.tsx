import React from 'react';
import { useField } from 'formik';
import { useState } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icons?: JSX.Element;
  onClick?: (event: any) => void;
}

function Input(props: InputProps) {
  const { label, type, name, placeholder, icons, onClick, ...nativeProps } =
    props;
  const [field, meta] = useField(name);
  const [view, setView] = useState(false);

  const handleChange = () => {
    if (onClick) {
      setView(!view);
      onClick(!view);
    }
  };

  return (
    <div className="form-control w-full">
      <label className="label">{label}</label>
      <div className="relative">
        <input
          {...field}
          name={name}
          placeholder={placeholder}
          type={type}
          className="w-full input input-bordered"
          {...nativeProps}
        />
        {icons && (
          <div className="absolute top-4 right-4" onClick={handleChange}>
            {icons}
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <label className="label text-error">{meta.error}</label>
      )}
    </div>
  );
}

export default Input;
