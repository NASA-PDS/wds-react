import { Container as MuiContainer } from "@mui/material";

import "./Footer.scss";

export const Footer = () => {
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
          Footer
        </MuiContainer>
      </MuiContainer>
    </footer>
  </>
};

export default Footer;