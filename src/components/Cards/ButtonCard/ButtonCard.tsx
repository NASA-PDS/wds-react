import { Box as MuiBox, Card as MuiCard, Stack as MuiStack } from "@mui/material";
import { Typography } from "components/Typography";
import { IconArrowRight, IconArrowDiagonal } from "components/Icons";

export type ButtonCardProps = {
  title: string;
  linkType?:"internal" | "external";
  width?:string;
}

export const ButtonCard = ({
  title,
  linkType = "internal",
  width = "100%"
}:ButtonCardProps) => {

  let icon = <IconArrowRight style={{ width: "10px", height: "10px" }} />

  if( linkType === "external" ) {
    icon = <IconArrowDiagonal style={{ width: "10px", height: "10px" }} />
  }

  return <>
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
            <MuiStack direction={"row"} spacing={"4px"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
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
                {icon}
              </div>
            </MuiStack>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </MuiCard>
  </>
}

export default ButtonCard;