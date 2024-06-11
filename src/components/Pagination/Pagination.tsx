import MaterialPagination from "@mui/material/Pagination";
import { PaginationProps } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

/**
 * A basic greeting message displayed to a user.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const Pagination = ({ ...otherProps }: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <MaterialPagination
        className="pds-wds-pagination"
        variant="outlined"
        shape="rounded"
        {...otherProps}
      />
    </Stack>
  );
};
