/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { type, label, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
