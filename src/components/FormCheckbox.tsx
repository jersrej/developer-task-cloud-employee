import React, { FC } from 'react';
import clsx, { ClassValue } from 'clsx';

interface IFormCheckbox {
  label: string;
  name: string;
  className?: ClassValue;
}

const FormCheckbox: FC<IFormCheckbox> = ({ label, name, className }) => {
  return (
    <div className="w-full">
      <div className="checkbox-container">
        <label className="text-md flex label-checkbox">
          <div>
            <input type="checkbox" name={name} className={clsx(className)} />
            <span className="checkmark" />
          </div>

          <div className="font-inter font-weight-400 font-md line-height-lg">{label}</div>
        </label>
      </div>
    </div>
  );
};

export default FormCheckbox;
