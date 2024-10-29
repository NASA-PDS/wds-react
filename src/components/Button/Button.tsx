import MaterialButton from "@mui/material/Button";
import { ButtonProps as MuiBottonProps } from "@mui/material/Button";

type PdsButtonProps = {
  variant: "cta";
};

export type ButtonProps = PdsButtonProps & Omit<MuiBottonProps, "variant">;

export const Button = (props: ButtonProps) => {
  const { variant, className, ...other } = props;

  let buttonClass = "";
  let muiVariant;

  if (className) {
    buttonClass = className + " wds-button";
  } else {
    buttonClass = "wds-button";
  }

  switch (variant) {
    case "cta":
      buttonClass += "-cta";
      muiVariant = "contained" as const;
      break;
    default:
      muiVariant = "text" as const;
  }

  return (
    <MaterialButton className={buttonClass} variant={muiVariant} {...other} sx={{ width: "fit-content", textTransform: "none" }}/>
  );
};
