import { Box as MuiBox, Stack as MuiStack } from "@mui/material";
import { Button } from "components/Button";
import { PrimaryButton } from "components/PrimaryButton";
import { Typography } from "components/Typography";

import "./QuickLinksBar.scss"

export type QuickLinksBarProps = {

  primaryLinks:Array<{label:string, url:string }>;
  secondaryLinks:Array<{label:string, url:string }>;
  title:string;
}

export const QuickLinksBar = ({
  primaryLinks,
  secondaryLinks,
  title
}:QuickLinksBarProps) => {
  return <>
    <MuiBox className="pds-wds-quick-links-bar-root">
      <MuiStack direction={{ xs: 'column', lg: 'row' }} alignItems={{xs: "flex-start", lg: "center"}} justifyContent={{xs: "flex-start", lg: "space-between"}} spacing={{ xs: "32px"}}>
        <Typography variant="h2" weight="bold">{title}</Typography>
        <MuiStack direction={{ xs: "column", lg: "row"}} spacing={{xs: "32px", lg: "16px"}}>
          <MuiStack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "left",  lg:"flex-end"}} alignItems={{xs: "flex-start", lg: "center"}} spacing={"16px"}>
            {
              primaryLinks.map( (link, index) => {
                return <Button variant="cta" key={index}>{link.label}</Button>
              })
            }
          </MuiStack>
          <MuiStack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "left",  lg:"flex-end"}} alignItems={{xs: "flex-start", md: "center", lg: "center"}} spacing={"16px"}>
            {
              secondaryLinks.map( (link, index) => {
                return <PrimaryButton label={link.label} key={index}/>
              })
            }
          </MuiStack>
        </MuiStack>
      </MuiStack>
    </MuiBox>
  </>
}

export default QuickLinksBar;