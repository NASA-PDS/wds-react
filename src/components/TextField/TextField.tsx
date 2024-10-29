import MaterialTextField from "@mui/material/TextField";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

/**
 * A simple text field.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */

type PdsTextFieldProps = {
  variant?: "standard" | "search";
};

export type TextFieldProps = PdsTextFieldProps &
  Omit<MuiTextFieldProps, "variant">;

export const TextField = ({
  className,
  variant,
  ...otherProps
}: TextFieldProps) => {
  let textFieldClass = "";
  let pdsVariant = variant;

  if (className) {
    textFieldClass = className + " pds-wds-react-textfield";
  } else {
    textFieldClass = "pds-wds-react-textfield";
  }

  if (!pdsVariant) {
    pdsVariant = "standard";
  }

  return pdsVariant === "search" ? (
    <MaterialTextField
      className={textFieldClass}
      variant="outlined"
      {...otherProps}
    />
  ) : (
    <MaterialTextField
      className={textFieldClass}
      variant="outlined"
      {...otherProps}
    />
  );
};
