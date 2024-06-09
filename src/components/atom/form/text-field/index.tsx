import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export function TextField({
  id,
  label,
  value,
  fullWidth,
  sx,
  onChange,
}: TextFieldProps) {
  return (
    <MuiTextField
      id={id}
      label={label}
      value={value}
      fullWidth={fullWidth}
      onChange={onChange}
      sx={sx}
    />
  );
}
