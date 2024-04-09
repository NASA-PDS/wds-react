import MuiChip from "@mui/material/Chip";
import { ChipProps } from "@mui/material";

/**
 * A simple tag.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Tag = ({ ...otherProps }: ChipProps) => {
  return <MuiChip className="pds-wds-tag" {...otherProps} />;
};
