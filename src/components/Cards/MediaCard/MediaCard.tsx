import { 
  Box as MuiBox, 
  Card as MuiCard, 
  CardMedia as MuiCardMedia,
  CardMediaProps as MuiCardMediaProps,
  Stack as MuiStack 
} from "@mui/material";
import { Link } from "react-router-dom";
//import { PrimaryButton } from "components/PrimaryButton";
import { Typography } from "components/Typography";
import { IconArrowRight } from "components/Icons";
import testImage from '../../../nasaTest.jpeg';

export type MediaCardProps = {
  image:MuiCardMediaProps['image'];
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
      <MuiCard sx={{
        height: "250px",
        boxShadow: "none",
        ':focus': {
            border: '1px dotted',
        }
      }}>
        <MuiBox sx={{ 
          width: "100%", 
          height: "100%", 
          position: 'relative', 
        }}>
          <MuiCardMedia
            component="img"
            image={image}
            width={"100%"}
            height={"100%"}
            sx={{ backgroundSize: "cover"}}
            alt={imageDescription}
          />
          <MuiBox
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
          <MuiBox sx={{
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
            <MuiBox sx={{padding: "20px", width: "100%"}}>
              {/* <PrimaryButton label={title} /> */}
              <MuiStack direction={"row"} spacing={"4px"} alignItems={"flex-end"} width={"100%"} justifyContent={"space-between"}>
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
              </MuiStack>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiCard>
    </Link>
  </>
}

export default MediaCard;