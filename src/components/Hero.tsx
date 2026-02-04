import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(250, 249, 246, 0.9), rgba(250, 249, 246, 0.9)), url("/assets/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center' }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              mb: 3,
              color: 'primary.main',
              lineHeight: 1.1
            }}
          >
            Unclutter your mind.<br />
            Hold your thoughts.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              color: 'text.secondary',
              mb: 6,
              maxWidth: '650px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            A premium physical journal designed for intentional thinking. 
            Experience the clarity of analog writing on archival-quality paper.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}
            >
              Pre-order Now
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{ px: 5, py: 1.5, fontSize: '1.1rem', borderRadius: 50 }}
            >
              The Experience
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
