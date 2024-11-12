import MuiChip from "@mui/material/Chip";
import CloseIcon from "../Icons/Close";
import { ChipProps } from "@mui/material";

/**
 * A basic greeting message displayed to a user.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Chip = ({ className, ...otherProps }: ChipProps) => {
  let textFieldClass = "";

  if (className) {
    textFieldClass = className + " pds-wds-chip";
  } else {
    textFieldClass = "pds-wds-chip";
  }

  return (
    <MuiChip
      className={textFieldClass}
      variant="outlined"
      deleteIcon={<CloseIcon />}
      {...otherProps}
    />
  );
};
