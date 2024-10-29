import { 
  Box as MuiBox, 
  //Grid as MuiGrid,
  Container as MuiContainer, 
  Stack as MuiStack,
  } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import { Typography } from "components/Typography";
import nasaLogo from "../../assets/nasa.svg";

import "./Footer.scss";

export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterProps = {
  primaryLinks:FooterLink[],
  secondaryLinks:FooterLink[],
  pageLastUpdated:string
}

export const Footer = ({
  primaryLinks,
  secondaryLinks,
  pageLastUpdated
}:FooterProps) => {
  return <>
    <footer>
      <MuiContainer
        maxWidth={false}
        className="pds-wds-footer-root"
        >
        <MuiContainer
          maxWidth={"xl"}
          className="pds-wds-footer-container"
        >
          <MuiStack direction={"column"} spacing={"24px"}>
            <MuiBox>
              <img src={nasaLogo} alt="The National Aeronautics and Space Administration (NASA) Logo" width={68} height={68} />
            </MuiBox>
            <Grid container>

              <Grid xs={8} md={4} lg={3} sx={{mb: "40px"}}>
                <MuiBox>
                  <Typography variant="h3" weight="bold" sx={{my: "22px"}}>The National Aeronautics <br />and Space Administration</Typography>
                  <Typography variant="body4" weight="regular" sx={{ my: "14px", color: "#F6F6F6"}}>NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</Typography>
                  <p style={{margin: "0", paddingTop: "8px", paddingBottom: "8px"}}>
                    <Link to={"https://www.nasa.gov/about/"} target="_blank" style={{color: "#D1D1D1"}}>
                      <Typography variant="h6" weight="semibold" component="span">About NASA&apos;s Mission</Typography>
                    </Link>
                  </p>
                </MuiBox>
              </Grid>

              {
                <Grid xs={12} md={6} lg={6} mdOffset={1} >
                  <MuiStack direction={"column"} sx={{ height: {xs: "325px", md: "225px"}, flexWrap: 'wrap', flexShrink: 1, flexGrow: 0 }}>
                    {
                      primaryLinks.map( (link:FooterLink, primaryLinkIndex) => {
                        return <>
                          <Link to={link.href} className={"pds-wds-footer-primary-link"} style={{color: "#D1D1D1", marginBottom: "19px"}} key={primaryLinkIndex}>
                            <Typography variant="h6" weight="semibold" component="span">{link.label}</Typography>
                          </Link>
                        </>
                      })
                    }
                  </MuiStack>
                </Grid>

              }

            </Grid>
            <MuiBox sx={{height: {xs: "175px", md: "unset"}, pt: "64px", mt: "64px", borderTop: "1px solid #2E2E32", marginBottom: "16px", paddingTop: "24px"}}>
              {/* <MuiStack direction={{xs: "column", md: "row"}} spacing={"49px"}> */}
              <MuiStack direction={{xs:"column", md: "row"}} spacing={{md: "49px"}} sx={{ height: {xs: "175px", md: "unset"}, flexWrap: 'wrap', flexShrink: 1, flexGrow: 0 }}>
                {
                  secondaryLinks.map( (link, index) => {
                    return <>
                      <Link to={link.href} className={"pds-wds-footer-secondary-link"} key={index}>
                        <Typography variant="h6" weight="regular" component="span">{link.label}</Typography>
                      </Link>
                    </>
                  })
                }
              </MuiStack>
            </MuiBox>
            <MuiBox className="pds-wds-footer-metadata">
              <MuiStack direction={{xs:"column", md: "row"}} spacing={{md: "32px"}} sx={{flexWrap: 'wrap', flexShrink: 1, flexGrow: 0 }}>
                <MuiStack direction={"row"} spacing={"4px"}>
                  <Typography variant="h6" weight="regular" component="span">Page Last Updated:</Typography>
                  <Typography variant="h6" weight="semibold" component="span">{pageLastUpdated}</Typography>
                </MuiStack>
                <MuiStack direction={"row"} spacing={"4px"}>
                  <Typography variant="h6" weight="regular" component="span">Responsible NASA Official:</Typography>
                  <Typography variant="h6" weight="semibold" component="span">Bo Trieu</Typography>
                </MuiStack>
              </MuiStack>
            </MuiBox>
          </MuiStack>
        </MuiContainer>
      </MuiContainer>
    </footer>
  </>
};

export default Footer;