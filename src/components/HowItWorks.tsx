import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Open a blank page",
    text: "No templates. No pressure. Just you and your thoughts.",
  },
  {
    title: "Write freely",
    text: "Thoughts, worries, ideas. Let it all out without judgment.",
  },
  {
    title: "Walk away lighter",
    text: "Mental clarity restored. A mind uncluttered is a mind at peace.",
  },
];

export default function HowItWorks() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' }, 
            mb: 10,
            color: 'primary.main'
          }}
        >
          Designed for thinking, not managing
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%', 
                    borderRadius: 4, 
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {step.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
