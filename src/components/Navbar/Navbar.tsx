import {MouseEvent, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Divider } from "@mui/material";
import {HeaderProps} from '../Header/Header';

const Navbar = ({navItems}: HeaderProps) => {
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

   const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
     setAnchorElNav(null);
   };

   return (
      <>
         <Divider variant="fullWidth" orientation="horizontal" sx={{ bgcolor: '#58585B' }} />
         <AppBar component="nav" position="static" 
            sx={{
               backgroundColor: "#17171B",
            }}>
            <Container maxWidth="xl">
               <Toolbar disableGutters sx={{ justifyContent: "space-between"}}>
                  <div />
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                     {navItems.map((item) => {
                        return ( item.items ?
                           <Button key={item.id} sx={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.1875rem', letterSpacing: '-0.25px', color: '#fff', mr: '32px', textTransform: 'none', }} endIcon={<ExpandCircleDownOutlinedIcon />}>
                              {item.label}
                           </Button>
                           : 
                           <Link href={item.href}>
                              <Button key={item.id} sx={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.1875rem', letterSpacing: '-0.25px', color: '#fff', mr: '32px', textTransform: 'none', }}>
                                 {item.label}
                              </Button>
                           </Link>
                        )
                     }
                     )}
                  </Box>

                  <Box sx={{ display: { sm: 'block', md: 'none' }, }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <ExpandCircleDownOutlinedIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                           display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {navItems.map((item) => (
                           <Link key={item.id} href={item.href}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                 <Typography textAlign="center">{item.label}</Typography>
                              </MenuItem>
                           </Link>
                        ))}
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
      </>
   )
}

export default Navbar;