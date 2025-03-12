import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  useTheme,
  IconButton,
  Snackbar,
  Alert,
  AlertColor,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookingStyles from "screens/Booking/BookingStyles";
import strings from "global/constants/strings";
import { isTruthy, openSuccessNotification } from "helpers/methods";
import { doCorporateLogin } from "screens/Booking/components/BookingService";

interface LoginPopupProps {
  open: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = async () => {
    let isValid = true;
    const emailRegex = strings.regex;
    let newErrors = { email: "", password: "" };

    if (!isTruthy(formData.email)) {
      newErrors.email = "Please enter your email.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!isTruthy(formData.password)) {
      newErrors.password = "Please enter your password.";
      isValid = false;
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        setIsLoading(true);
        await doCorporateLogin(formData);
        setFormData({
          email: "",
          password: "",
        });
        setIsOpen(true);
        onClose();
        setIsLoading(false);
        setIsSuccess(true);
      } catch (error: any) {
        setFormData({
          email: "",
          password: "",
        });
        setIsOpen(true);
        onClose();
        setIsLoading(false);
        setIsSuccess(true);
      }
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  const getSnackBar = () => {
    return (
      <Snackbar
        open={isOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={
            isSuccess ? ("success" as AlertColor) : ("error" as AlertColor)
          }
          sx={{ width: "100%" }}
        >
          {isSuccess
            ? "Your request has been Submitted!"
            : isTruthy(message)
            ? message
            : "Something went wrong! Please try again."}
        </Alert>
      </Snackbar>
    );
  };

  return (
    <>
      {getSnackBar()}
      <Dialog
        open={open}
        onClose={() => {
          setFormData({
            email: "",
            password: "",
          });
          onClose();
        }}
        fullWidth
      >
        <DialogContent
          sx={{
            border: "1px solid #DDB86352",
            borderRadius: "10px",
            backgroundColor: "#1A1A1A",
            p: 5,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={() => {
              setFormData({
                email: "",
                password: "",
              });
              onClose();
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <TextField
            variant="outlined"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            fullWidth
            sx={{ ...classes.textInputField, mb: 2 }}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            fullWidth
            sx={{ ...classes.textInputField, mb: 2 }}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            onClick={validateInputs}
            color="primary"
            variant="contained"
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? "Logging in..." : "LOG IN"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginPopup;
