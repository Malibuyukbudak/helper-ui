import { MuiOtpInput, MuiOtpInputProps } from "mui-one-time-password-input";

export function PasswordInputBox({
  value,
  onChange,
  length = 6,
}: MuiOtpInputProps) {
  return <MuiOtpInput value={value} onChange={onChange} length={length} />;
}
