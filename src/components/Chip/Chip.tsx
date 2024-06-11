import MuiChip from "@mui/material/Chip";
import StarsIcon from "@mui/icons-material/Stars";
import { ChipProps } from "@mui/material";

/**
 * A basic greeting message displayed to a user.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Chip = ({ ...otherProps }: ChipProps) => {
  return (
    <MuiChip
      className="pds-wds-chip"
      variant="outlined"
      deleteIcon={<StarsIcon />}
      {...otherProps}
    />
  );
};
