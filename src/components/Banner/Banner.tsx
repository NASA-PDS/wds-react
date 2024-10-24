import { Box as MuiBox } from "@mui/material";

type BannerProps = {
  message:string;
}

export const Banner = (
  {
    message
  }:BannerProps
) => {

  return <MuiBox>
    {message}
  </MuiBox>

}