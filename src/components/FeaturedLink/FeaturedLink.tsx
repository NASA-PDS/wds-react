import { useState } from 'react';
import { IconArrowCircleDown, IconArrowCircleRight, IconArrowRight } from '../Icons';
import { Typography } from '../Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { FeaturedLinkDetailsProps } from '../FeaturedLinkDetails';
import { Link } from 'react-router-dom';

type FeaturedLinkColumn = {
  horizontalAlign?: "left" | "center" | "right";
  data:string;
  verticalAlign?: "flex-start" | "center" | "flex-end"
  width:number;
}

const ellipsisText = (str:string, maxLength:number):string => {

  if( str.length > maxLength ) {
    return str.substring(0,maxLength) + "..."
  }

  return str

}

export type FeaturedLinkProps = {
  children:React.ReactElement<FeaturedLinkDetailsProps>;
  columns?:FeaturedLinkColumn[];
  description:string;
  primaryLink:string;
  title:string;
}

export const FeaturedLink = ({
  children,
  columns,
  description,
  primaryLink,
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
              <Link to={primaryLink}>
                <Typography variant='h6' weight='semibold' sx={{margin: "5px"}}>{title}</Typography>
              </Link>
              <Typography variant='body4' weight='regular' sx={{margin: "5px", }}>{ellipsisText(description, 256)}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid lgOffset={1} />
        { 
          columns?.map( (column, index) => {
            return (
              <>
                <Grid md={column.width} display={{xs: "none", md:"flex"}} justifyContent={column.horizontalAlign || "left"} alignItems={column.verticalAlign || "flex-start"} key={index}>
                  <Typography variant="body4" weight="regular" sx={{color: "#58585B", textAlign: column.horizontalAlign ? column.horizontalAlign : "left"}}>{column.data}</Typography>
                </Grid>
                { index != columns.length -1 && <Grid lgOffset={1} /> }
              </>
            );
          })
        }
        <Grid xs={1} display={"flex"} justifyContent={"right"} alignItems={"center"}>
          <Link to={primaryLink}>
            <IconButton aria-label="arrow" sx={{
              "&:hover": {
                backgroundColor: "#B60109"
              },
              backgroundColor: "#F64137",
              color: "#FFFFFF",
              height: "36px",
              width: "36px",
            }}>
              <IconArrowRight />
            </IconButton>
          </Link>
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