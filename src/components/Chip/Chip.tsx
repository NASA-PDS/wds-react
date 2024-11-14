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
  let chipClass = "";

  if (className) {
    chipClass = className + " pds-wds-chip";
  } else {
    chipClass = "pds-wds-chip";
  }

  return (
    <MuiChip
      className={chipClass}
      variant="outlined"
      deleteIcon={<CloseIcon />}
      {...otherProps}
    />
  );
};
