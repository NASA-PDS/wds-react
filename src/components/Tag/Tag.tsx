import MuiChip from "@mui/material/Chip";
import { ChipProps } from "@mui/material";

/**
 * A simple tag.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Tag = ({ className, ...otherProps }: ChipProps) => {
  let tagClass = "";

  if (className) {
    tagClass = className + " pds-wds-tag";
  } else {
    tagClass = "pds-wds-tag";
  }

  return <MuiChip className={tagClass} {...otherProps} />;
};
