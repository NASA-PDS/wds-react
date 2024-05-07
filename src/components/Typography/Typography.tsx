import MuiTypography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material";

export type Props = {
  variant: "body" | "display" | "header" | "label";
  size:
    | "240"
    | "120"
    | "100"
    | "80"
    | "72"
    | "60"
    | "48"
    | "36"
    | "41"
    | "36"
    | "29"
    | "28"
    | "22"
    | "18"
    | "16"
    | "14"
    | "12"
    | "11";
  type?: "light" | "regular" | "semibold" | "bold";
} & Omit<TypographyProps, "variant" | "size">;

export const Typography = (props: Props) => {
  const { variant, size, type, ...other } = props;

  let typographyClass = "wds-typography";
  if (variant === "body") typographyClass += "-body";
  if (variant === "display") typographyClass += "-display";
  if (variant === "header") typographyClass += "-header";
  if (variant === "label") typographyClass += "-label";

  if (type === "light") typographyClass += "-light";
  if (type === "regular") typographyClass += "-regular";
  if (type === "semibold") typographyClass += "-semibold";
  if (type === "bold") typographyClass += "-bold";

  if (size === "240") typographyClass += "-240";
  if (size === "120") typographyClass += "-120";
  if (size === "100") typographyClass += "-100";
  if (size === "80") typographyClass += "-80";
  if (size === "72") typographyClass += "-72";
  if (size === "60") typographyClass += "-60";
  if (size === "48") typographyClass += "-48";
  if (size === "41") typographyClass += "-41";
  if (size === "36") typographyClass += "-36";
  if (size === "29") typographyClass += "-29";
  if (size === "28") typographyClass += "-28";
  if (size === "22") typographyClass += "-22";
  if (size === "18") typographyClass += "-18";
  if (size === "16") typographyClass += "-16";
  if (size === "14") typographyClass += "-14";
  if (size === "12") typographyClass += "-12";
  if (size === "11") typographyClass += "-11";

  return (
    <MuiTypography className={typographyClass} variant="body1" {...other} />
  );
};
