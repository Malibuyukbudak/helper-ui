import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";
import { get } from "lodash";

export function TextField({
  id,
  label,
  value,
  fullWidth = true,
  placeholder,
  name,
  sx,
  helperText,
  type,
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
      type={type}
      placeholder={placeholder}
      // @ts-ignore
      value={value ?? formik.getFieldProps(name).value}
      helperText={
        // @ts-ignore
        get(formik?.touched, name) ? get(formik.errors, name) : helperText
      }
      // @ts-ignore
      error={get(formik?.touched, name) && Boolean(get(formik.errors, name))}
      sx={sx}
    />
  );
}
