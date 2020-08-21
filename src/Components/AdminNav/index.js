import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const AdminNav = () => {

    const history = useHistory()

    const [anchorEl, setAnchorEl] = useState(false)
    const [anchorElMenu, setAnchorElMenu] = useState(false)

    const handleMenuOpen = (event) => {
        setAnchorElMenu(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorElMenu(false)
    }
    

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(false);
    };

    const renderProfile = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={anchorEl}
            onClose={handleProfileMenuClose}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
        </Menu>
    );

    const renderMenu = (
        <Menu
            anchorEl={anchorElMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={anchorElMenu}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => history.push("/home")}>Home</MenuItem>
            <MenuItem onClick={() => history.push("/home/signup/admin")}>Criar conta administradora</MenuItem>
        </Menu>

    )

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleProfileMenuOpen}
                    >
                            <AccountCircle />
                        </IconButton>
                </Toolbar>
            </AppBar>
            {renderProfile}
            {renderMenu}
        </div>
    )
}

export default AdminNav