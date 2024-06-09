import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SxProps, Theme } from "@mui/system";

type DialogProps = {
  children?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  title?: string;
  actions?: React.ReactNode;
  sx?: SxProps<Theme>;
  PaperProps?: object;
  loading?: boolean;
  defaultCloseIcon?: boolean;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
};

export function Dialog({
  children,
  open,
  onClose,
  title,
  actions,
  sx,
  PaperProps,
  loading,
  defaultCloseIcon,
  maxWidth,
}: DialogProps) {
  const content =
    typeof children === "string" ? (
      <DialogContentText>{children}</DialogContentText>
    ) : (
      children
    );

  return (
    <MuiDialog
      open={open}
      onClose={loading ? undefined : onClose}
      sx={sx}
      PaperProps={PaperProps}
      disableEscapeKeyDown
      maxWidth={maxWidth}
    >
      <DialogTitle>
        {defaultCloseIcon && !title ? (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {title}
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        ) : (
          title
        )}
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
      {loading && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            position: "absolute",
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </MuiDialog>
  );
}
