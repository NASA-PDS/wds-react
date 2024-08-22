import { useState } from 'react';
import { IconArrowCircleDown, IconArrowCircleRight, IconArrowRight } from '../Icons';
import { Typography } from '../Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { FeaturedLinkDetailsProps } from '../FeaturedLinkDetails';

type PrimaryAction = () => void;

export type FeaturedLinkProps = {
  children:React.ReactElement<FeaturedLinkDetailsProps>;
  description:string;
  primaryAction:PrimaryAction;
  title:string;
}

export const FeaturedLink = ({
  children,
  description,
  primaryAction,
  title,
}:FeaturedLinkProps) => {

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails( !showDetails );
  };

  return (
    <Stack sx={{marginTop: "15px", width: "100%"}}>
      <Grid container spacing={2} alignItems={"stretch"}>
        <Grid xs sx={{marginY: "10px"}}>
          <Stack direction="row" alignItems="center">
            <Box>
              <IconButton aria-label="arrow" sx={{ color: "#000000"}} onClick={toggleDetails}>
                { showDetails ? <IconArrowCircleDown /> : <IconArrowCircleRight />}
              </IconButton>
            </Box>
            <Stack sx={{padding: "10px"}}>
              <Typography variant='h6' weight='semibold' sx={{margin: "5px"}}>{title}</Typography>
              <Typography variant='body4' weight='regular' sx={{margin: "5px", wordWrap: 'break-word'}}>{description}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={1} display={"flex"} justifyContent={"right"}>
          <IconButton aria-label="arrow" sx={{
            "&:hover": {
              backgroundColor: "#B60109"
            },
            backgroundColor: "#F64137",
            color: "#FFFFFF",
            height: "36px",
            width: "36px",
          }} onClick={() => {primaryAction()}}>
            <IconArrowRight />
          </IconButton>
        </Grid>
      </Grid>
      {
        showDetails && children
      }
      <Divider />
    </Stack>
  );

};

export default FeaturedLink;