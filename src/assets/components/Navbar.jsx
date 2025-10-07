import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function Navbar(){
    return(
        <AppBar sx={{bgcolor: "secondary.main" }} position="static">
            <Toolbar>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 'bold'}}
                >
                    Ticket Plug
                </Typography>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 2,
                    '& .MuiButton-root': {  // Targets all MUI Buttons
                      '&:hover': {
                        bgcolor: 'primary.main',
                      },
                      borderRadius: 2,
                      px: 2,
                    }
                  }}
                >
                    <Button
                    component={Link}
                    to='/'
                    color="inherit"
                    >
                        Home
                    </Button>
                    <Button                        
                        component={Link}
                        to="/orders"
                        color="inherit"
                    >
                        Orders
                    </Button>
                    <Button                        
                        component={Link}
                        to="/faq"
                        color="inherit"
                    >
                        FAQ
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;