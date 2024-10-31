import React from "react";
import { 
  Grid as MuiGrid,
  Box as MuiBox,
  Container as MuiContainer,
  Stack as MuiStack
} from "@mui/material";
import {
  IconArrowDiagonal,
  IconArrowRight,
} from "../Icons";
import { Typography } from "../Typography";
import { Link } from "react-router-dom";

type Link = {
  href:string;
  title:string;
  type:"internal" | "external";
}

export type BannerProps = {
  link?:Link;
  message:string;
  title:string;
  variant?:"info" | "alert"
}

export const Banner = (
  {
    link,
    message,
    title,
    variant = "info"
  }:BannerProps
) => {

  return <React.Fragment>
    <MuiBox className={'pds-wds-react-banner ' + variant}>
      <MuiContainer maxWidth={"xl"}>
        <MuiGrid container>
          <MuiGrid xs={12} lg={8}>
            <MuiStack direction={{xs: "column", sm: "row"}} gap={{xs: "8px", sm:"32px"}} alignItems={{xs: "flex-start", sm:"center"}} justifyContent={"flex-start"}>
              <MuiStack direction={{xs: "column", sm: "row"}} gap={"8px"} alignItems={{xs: "flex-start", sm: "center"}} justifyContent={"flex-start"}>
                <Typography variant="h5" weight="semibold" component="span" className="title">{title}</Typography>
                <Typography variant="h6" weight="regular" component="span">{message}</Typography>
              </MuiStack>
              { link && 
                  <Link to={link.href}>
                    <Typography variant="h6" weight="semibold" component={"span"}>{link.title}</Typography>
                    <span className={"icon " + variant}>{link.type ? <IconArrowRight /> : <IconArrowDiagonal />}</span>
                  </Link>
              }
            </MuiStack>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </MuiBox>
  </React.Fragment>

}