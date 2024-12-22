import { Box, InputLabel, SxProps, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent, FocusEvent, MouseEvent, ClipboardEvent, WheelEventHandler } from "react";

interface CustomProps {
  autoFocus?: boolean;
  label?: string;
  placeHolder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  select?: boolean;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  InputProps?: object;
  error?: string | null;
  required?: boolean;
  InputLabelProps?: object;
  id?: string;
  sx?: SxProps;
  propsToInputElement?: object;
  disabled?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  helperText?: string;
  inputType?: string;
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  onWheel?: WheelEventHandler<HTMLDivElement>;  // Correct typing for div element wheel event
}

const CustomInput = (props: CustomProps) => {
  const { error = null } = props;

  return (
    <Box>
      {props.label && (
        <Box mb={1}>
          <InputLabel required={props.required}>{props.label}</InputLabel>
        </Box>
      )}
      <TextField
        autoFocus={props.autoFocus ?? false}
        sx={
          props.sx
            ? props.sx
            : { "& .MuiInputBase-input": { padding: "13px 13px" } }
        }
        fullWidth
        multiline={props.multiline}
        variant="outlined"
        id={props.id}
        placeholder={props.placeHolder}
        type={props.type}
        name={props.name}
        select={props.select}
        value={props.value}
        InputProps={props.InputProps}
        inputProps={props.propsToInputElement}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        onPaste={props.onPaste}
        required={props.required}
        onBlur={props.onBlur}
        onClick={props?.onClick}
        {...(error && { error: true, helperText: error })}
        disabled={props.disabled}
        helperText={props.helperText}
        onWheel={props?.onWheel}
      />
    </Box>
  );
};

export default CustomInput;
