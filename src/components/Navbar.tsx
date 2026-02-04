import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box 
                component="img" 
                src="/assets/logo.png" 
                alt="Unclutter Logo" 
                sx={{ height: 40, width: 40, objectFit: 'contain' }} 
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main',
                  letterSpacing: '-0.5px'
                }}
              >
                Unclutter
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button 
                variant="contained" 
                color="primary"
                href="#preorder"
                sx={{ 
                  borderRadius: 50,
                  px: 4
                }}
              >
                Pre-order
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
            Unclutter
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#preorder" sx={{ textAlign: 'center' }}>
                <ListItemText primary="Pre-order" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Spacer to prevent content from going under the fixed AppBar */}
      <Toolbar />
    </>
  );
}
