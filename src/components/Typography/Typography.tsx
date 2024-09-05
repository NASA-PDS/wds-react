import MuiTypography from "@mui/material/Typography";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";

type BodyProps = {
  variant: "body1" | "body2" | "body3" | "body4" | "body5";
  weight: "regular";
};

type DisplayProps = {
  variant:
    | "display1"
    | "display2"
    | "display3"
    | "display4"
    | "display5"
    | "display6"
    | "display7";
  weight: "bold";
};

type HeaderBLProps = {
  variant: "h1" | "h2";
  weight: "bold" | "light";
};

type HeaderBRProps = {
  variant: "h3";
  weight: "bold" | "regular";
};

type HeaderSRProps = {
  variant: "h4" | "h5" | "h6" | "h7";
  weight: "semibold" | "regular";
};

type HeaderSProps = {
  variant: "h8";
  weight: "semibold";
};

type LabelProps = {
  variant: "label1" | "label2" | "label3";
  weight: "medium";
};

type NumberProps = {
  variant:
    | "number1"
    | "number2"
    | "number3"
    | "number4"
    | "number5"
    | "number6"
    | "number7";
  weight: "light";
};

export type Props =
  | (BodyProps & Omit<MuiTypographyProps, "variant">)
  | (DisplayProps & Omit<MuiTypographyProps, "variant">)
  | (HeaderBLProps & Omit<MuiTypographyProps, "variant">)
  | (HeaderBRProps & Omit<MuiTypographyProps, "variant">)
  | (HeaderSRProps & Omit<MuiTypographyProps, "variant">)
  | (HeaderSProps & Omit<MuiTypographyProps, "variant">)
  | (LabelProps & Omit<MuiTypographyProps, "variant">)
  | (NumberProps & Omit<MuiTypographyProps, "variant">);

export const Typography = (props: Props) => {
  const { variant, weight, className, ...other } = props;

  let typographyClass = "";
  let muiVariant;

  if (className) {
    typographyClass = className + " wds-typography";
  } else {
    typographyClass = "wds-typography";
  }

  switch (variant) {
    case "body1":
      typographyClass += "-body-regular-18";
      muiVariant = "body1" as const;
      break;
    case "body2":
      typographyClass += "-body-regular-16";
      muiVariant = "body1" as const;
      break;
    case "body3":
      typographyClass += "-body-regular-14";
      muiVariant = "body1" as const;
      break;
    case "body4":
      typographyClass += "-body-regular-12";
      muiVariant = "body1" as const;
      break;
    case "body5":
      typographyClass += "-body-regular-11";
      muiVariant = "body1" as const;
      break;
    case "display1":
      typographyClass += "-display-bold-120";
      muiVariant = "body1" as const;
      break;
    case "display2":
      typographyClass += "-display-bold-100";
      muiVariant = "body1" as const;
      break;
    case "display3":
      typographyClass += "-display-bold-80";
      muiVariant = "body1" as const;
      break;
    case "display4":
      typographyClass += "-display-bold-72";
      muiVariant = "body1" as const;
      break;
    case "display5":
      typographyClass += "-display-bold-60";
      muiVariant = "body1" as const;
      break;
    case "display6":
      typographyClass += "-display-bold-48";
      muiVariant = "body1" as const;
      break;
    case "display7":
      typographyClass += "-display-bold-41";
      muiVariant = "body1" as const;
      break;
    case "h1":
      typographyClass += "-header-" + weight + "-36";
      muiVariant = "h1" as const;
      break;
    case "h2":
      typographyClass += "-header-" + weight + "-29";
      muiVariant = "h2" as const;
      break;
    case "h3":
      typographyClass += "-header-" + weight + "-22";
      muiVariant = "h3" as const;
      break;
    case "h4":
      typographyClass += "-header-" + weight + "-18";
      muiVariant = "h4" as const;
      break;
    case "h5":
      typographyClass += "-header-" + weight + "-16";
      muiVariant = "h5" as const;
      break;
    case "h6":
      typographyClass += "-header-" + weight + "-14";
      muiVariant = "h6" as const;
      break;
    case "h7":
      typographyClass += "-header-" + weight + "-12";
      muiVariant = "h6" as const;
      break;
    case "h8":
      typographyClass += "-header-" + weight + "-11";
      muiVariant = "h6" as const;
      break;
    case "label1":
      typographyClass += "-label-" + weight + "-14";
      muiVariant = "body1" as const;
      break;
    case "label2":
      typographyClass += "-label-" + weight + "-12";
      muiVariant = "body1" as const;
      break;
    case "label3":
      typographyClass += "-label-" + weight + "-11";
      muiVariant = "body1" as const;
      break;
    case "number1":
      typographyClass += "-display-light-240";
      muiVariant = "body1" as const;
      break;
    case "number2":
      typographyClass += "-display-light-120";
      muiVariant = "body1" as const;
      break;
    case "number3":
      typographyClass += "-display-light-48";
      muiVariant = "body1" as const;
      break;
    case "number4":
      typographyClass += "-display-light-36";
      muiVariant = "body1" as const;
      break;
    case "number5":
      typographyClass += "-display-light-28";
      muiVariant = "body1" as const;
      break;
    default:
      muiVariant = "body1" as const;
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiTypography
        className={typographyClass}
        variant={muiVariant}
        {...other}
      />
    </StyledEngineProvider>
  );
};
