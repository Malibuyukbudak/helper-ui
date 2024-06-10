import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";

export function TextField({
  id,
  label,
  value,
  fullWidth,
  placeholder,
  name,
  sx,
  onChange,
}: TextFieldProps) {
  const formik = useFormikContext();
  
  const handleChange = (e: any) => {
    if (name != undefined) formik.setFieldValue(name, e.target.value);
    return null;
  };
  return (
    <MuiTextField
      id={id}
      label={label}
      fullWidth={fullWidth}
      onChange={name != undefined ? handleChange : onChange}
      placeholder={placeholder}
      // @ts-ignore
      value={value ?? formik.getFieldProps(name).value}
      sx={sx}
    />
  );
}
