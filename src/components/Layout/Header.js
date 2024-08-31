import React,{useState} from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom"
import "../../styles/HeaderStyles.css"
import logo from "../../images/logo.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] =useState(false)

  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }

  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={"goldenrod"} variant='h5' component="div" sx={{flexGrow:1 , my:2}}>
            
          <img src={logo} alt='logo' height={'50'} width={'50'}/>
            MealMagic
            </Typography>
            <Divider/>
              <ul className='mobile-navigation'>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black",borderBottom: '2px solid gold'}}>
          <Toolbar>
            
           <Typography color={"goldenrod"} variant='h4' component="div" sx={{flexGrow:1}}>
           <img src={logo} alt='logo' height={'50'} width={'50'} /> MealMagic 

            </Typography>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
              
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2}}
            onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

          </Toolbar>
        
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block"},
           "& .MuiDrawer-paper":{
            boxSizing:"border-box",width:"240px",
           }}}>
            {drawer}</Drawer>
        </Box>
        <Box sx={{P:1}}>
          <Toolbar/>
        </Box>
      </Box>
    
    </>
  )
}

export default Header