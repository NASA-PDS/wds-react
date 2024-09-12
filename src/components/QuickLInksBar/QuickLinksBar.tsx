import { Stack as MuiStack } from "@mui/material";
import { Button } from "components/Button";
import { PrimaryButton } from "components/PrimaryButton";
import { Typography } from "components/Typography";

import "./QuickLinksBar.scss"
import { Link } from "react-router-dom";

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
    <MuiStack direction={{ xs: 'column', lg: 'row' }} alignItems={{xs: "flex-start", lg: "center"}} justifyContent={{xs: "flex-start", lg: "space-between"}} spacing={{ xs: "32px"}}>
      <Typography variant="h2" weight="bold">{title}</Typography>
      <MuiStack direction={{ xs: "column", lg: "row"}} spacing={{xs: "32px", lg: "16px"}}>
        <MuiStack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "left",  lg:"flex-end"}} alignItems={{xs: "flex-start", lg: "center"}} spacing={"16px"}>
          {
            primaryLinks.map( (link, index) => {
              return <Link to={link.url} key={index}><Button variant="cta">{link.label}</Button></Link>
            })
          }
        </MuiStack>
        <MuiStack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: "left",  lg:"flex-end"}} alignItems={{xs: "flex-start", md: "center", lg: "center"}} spacing={"16px"}>
          {
            secondaryLinks.map( (link, index) => {
              return <Link to={link.url} key={index}><PrimaryButton label={link.label} /></Link>
            })
          }
        </MuiStack>
      </MuiStack>
    </MuiStack>
  </>
}

export default QuickLinksBar;