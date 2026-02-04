import { Box, Container, Typography, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 8, backgroundColor: 'background.default', borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Unclutter
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Contact
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} Unclutter. Built for clarity and peace of mind.
        </Typography>
      </Container>
    </Box>
  );
}
