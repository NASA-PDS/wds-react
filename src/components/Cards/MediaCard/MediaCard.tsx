import { Box, Card, Stack } from "@mui/material";
import { CardMediaProps } from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import testImage from '../../../nasaTest.jpeg';
import { Link } from "react-router-dom";
import { PrimaryButton } from "components/PrimaryButton";
import { Typography } from "components/Typography";
import { IconArrowRight } from "components/Icons";

export type MediaCardProps = {
  image:CardMediaProps['image'];
  imageDescription:string;
  title:string;
  url:string;
}

export const MediaCard = ({
  image = testImage,
  imageDescription,
  title,
  url,
}:MediaCardProps) => {

  return <>
    <Link to={url}>
      <Card sx={{
        height: "250px",
        boxShadow: "none",
        ':focus': {
            border: '1px dotted',
        }
      }}>
        <Box sx={{ 
          width: "100%", 
          height: "100%", 
          position: 'relative', 
        }}>
          <CardMedia
            component="img"
            image={image}
            width={"100%"}
            height={"100%"}
            sx={{ backgroundSize: "cover"}}
            alt={imageDescription}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: "100%",
              height: '50%',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
              color: 'white',
            }}
          />
          <Box sx={{
            position: "absolute",
            bottom: 0,
            top: 0,
            display: "flex",
            flexGrow: 1,
            color: "#FFFFFF",
            width: "100%",
            height: "100%",
            alignItems: "flex-end",
          }}>
            <Box sx={{padding: "20px", width: "100%"}}>
              {/* <PrimaryButton label={title} /> */}
              <Stack direction={"row"} spacing={"4px"} alignItems={"flex-end"} width={"100%"} justifyContent={"space-between"}>
                <Typography variant={"h5"} weight={"semibold"} component={"span"}>{title}</Typography>
                <div style={{
                    display: "flex",
                  backgroundColor: "#F64137",
                  padding: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  color: "#FFFFFF"
                }}>
                  <IconArrowRight style={{ width: "10px", height: "10px" }}/>
                </div>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Card>
    </Link>
  </>
}

export default MediaCard;