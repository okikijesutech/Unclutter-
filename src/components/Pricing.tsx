import { Box, Container, Typography, Grid, Card, CardContent, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <Box component="section" id="pricing" sx={{ py: { xs: 10, md: 15 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' }, 
            mb: 2,
            color: 'primary.main'
          }}
        >
          Secure your copy
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 8, fontSize: '1.2rem' }}
        >
          Limited first edition run. Pre-order now to guarantee delivery.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card 
                elevation={0} 
                sx={{ 
                  p: 2,
                  borderRadius: 6, 
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                    Digital Only
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, my: 2 }}>
                    Free
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Access our intentional writing methodology digitally.
                  </Typography>
                  <Divider sx={{ mb: 4 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    • Minimalist web interface
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                    • Digital journaling templates
                  </Typography>
                  <Button variant="outlined" fullWidth sx={{ py: 1.5 }}>
                    Start Digital Journey
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card 
                elevation={0} 
                sx={{ 
                  p: 2,
                  borderRadius: 6, 
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  backgroundColor: 'rgba(197, 163, 108, 0.05)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: -15, 
                    right: 20, 
                    bgcolor: 'secondary.main', 
                    color: 'white', 
                    px: 2, 
                    py: 0.5, 
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  MOST POPULAR
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600 }} gutterBottom>
                    Physical Journal
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, my: 2 }}>
                    ₦12,500
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    The complete Unclutter experience delivered to your door.
                  </Typography>
                  <Divider sx={{ mb: 4 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    • Premium A5 Linen Journal
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    • Archival 120gsm Paper
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                    • Lifetime Digital Access included
                  </Typography>
                  <Button variant="contained" fullWidth color="primary" sx={{ py: 1.5 }}>
                    Pre-order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
