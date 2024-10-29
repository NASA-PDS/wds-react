import { 
  Box as MuiBox, 
  Card as MuiCard, 
  CardMedia as MuiCardMedia,
  CardMediaProps as MuiCardMediaProps,
  Stack as MuiStack 
} from "@mui/material";
import { Typography } from "components/Typography";
import { IconArrowRight } from "components/Icons";
import testImage from '../../../nasaTest.jpeg';

export type MediaCardProps = {
  description?:string;
  image:MuiCardMediaProps['image'];
  imageDescription:string;
  title:string;
}

export const MediaCard = ({
  description,
  image = testImage,
  imageDescription,
  title,
}:MediaCardProps) => {

  return <>
    <MuiCard sx={{
      height: "250px",
      boxShadow: "none",
      ':focus': {
          border: '1px dotted',
      },
      borderRadius: "0px",
      transition: "none"
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
        <MuiBox
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            color: 'white',
            padding: '20px 20px',
            gap: "12px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap"
          }}
        >
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
                  }}
              >
                <IconArrowRight style={{ width: "10px", height: "10px" }}/>
              </div>
            </MuiStack>
          { description && <Typography variant="body2" weight="regular">{description}</Typography> }
        </MuiBox>
      </MuiBox>
    </MuiCard>
  </>
}

export default MediaCard;