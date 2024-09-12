import { Box as MuiBox, Card as MuiCard } from "@mui/material";
import { PrimaryButton } from "components/PrimaryButton";
import { Link } from "react-router-dom";

export type LinkCardProps = {
  title: string;
  url:string;
  width?:string;
}

export const LinkCard = ({
  title,
  url,
}:LinkCardProps) => {
  return <>
    <Link to={url}>
      <MuiCard sx={{
        boxShadow:'none', 
        ':focus': {
          border: '1px dotted',
        },
        height: "250px", 
      }}>
        <MuiBox sx={{ 
          width: "100%", 
          height: "100%", 
          backgroundColor: "#FFFFFF",
        }}>
          {/* <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: "100%",
              height: '50%',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
              color: 'white',
            }}
          /> */}
          <MuiBox sx={{
            display: "flex",
            flexGrow: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <MuiBox sx={{padding: "20px"}}>
              <PrimaryButton label={title} />
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiCard>
    </Link>
  </>
}

export default LinkCard;