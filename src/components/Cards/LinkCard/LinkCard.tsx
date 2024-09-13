import { Box as MuiBox, Card as MuiCard } from "@mui/material";
import { PrimaryButton } from "components/PrimaryButton";
import { Link } from "react-router-dom";

export type LinkCardProps = {
  title: string;
  url:string;
  urlType?:"internal" | "external";
  width?:string;
}

export const LinkCard = ({
  title,
  url,
  urlType = "internal",
  width = "100%"
}:LinkCardProps) => {
  return <>
    <Link to={url}>
      <MuiCard sx={{
        boxShadow:'none', 
        borderRadius: "0px",
        ':focus': {
          border: '1px dotted',
        },
        height: "250px", 
        width
      }}>
        <MuiBox sx={{ 
          width: "100%", 
          height: "100%", 
          backgroundColor: "#FFFFFF",
        }}>
          <MuiBox sx={{
            display: "flex",
            flexGrow: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <MuiBox sx={{padding: "20px"}}>
              <PrimaryButton label={title} iconType={urlType}/>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiCard>
    </Link>
  </>
}

export default LinkCard;