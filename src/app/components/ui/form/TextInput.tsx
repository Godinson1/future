import React, { PropsWithChildren } from "react";
import TextField from "@mui/material/TextField";

interface ITextInput {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  size?: "medium" | "small";
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

interface IInputRow {}

const TextInput = ({ size = "small", label, disabled, fullWidth, onChange }: ITextInput) => {
  return <TextField onChange={onChange} label={label} size={size} disabled={disabled} fullWidth={fullWidth} />;
};

export const InputRow = ({ children }: PropsWithChildren<IInputRow>) => {
  return <div className='flex gap-5 mb-5'>{children}</div>;
};

export default TextInput;
