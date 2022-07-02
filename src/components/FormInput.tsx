import React, { FC } from 'react';
import clsx, { ClassValue } from 'clsx';

interface IFormInput {
  label: string;
  placeholder?: string;
  className?: ClassValue;
  name: string;
  middleText?: string;
  type?: string;
}

const FormInput: FC<IFormInput> = ({
  label,
  placeholder,
  className,
  name,
  middleText,
  type = 'text'
}) => {
  return (
    <div className="w-full">
      <div>
        <label htmlFor={name} className="text-sm font-inter font-weight-600 font-md">
          {label}
        </label>
      </div>

      {middleText && (
        <div className="font-inter font-weight-400 font-md line-height-lg font-gray-600">
          {middleText}
        </div>
      )}

      <div className="flex">
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className={clsx(className, 'input-text')}
        />
      </div>
    </div>
  );
};

export default FormInput;
