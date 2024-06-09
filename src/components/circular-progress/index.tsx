import {
  CircularProgressProps,
  CircularProgress as MuiCircularProgress,
} from "@mui/material";

export function CircularProgress({ size = 20 }: CircularProgressProps) {
  return <MuiCircularProgress size={size} />;
}
