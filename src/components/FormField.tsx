import React, { type HTMLInputTypeAttribute } from "react";

interface FormFieldProps {
  flex: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ flex, label, type, placeholder }) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`FormField d-flex flex-${flex} mb-2 gap-1`}>
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select id={id}>
          <option disabled selected>{placeholder}</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      ) : (
        <input type={type} placeholder={placeholder} id={id} />
      )}
    </div>
  );
};

export default FormField;
