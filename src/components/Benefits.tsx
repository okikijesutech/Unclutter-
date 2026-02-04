import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const physicalBenefits = [
  { title: "Archival-Quality Paper", description: "Thick, ink-friendly 120gsm paper that feels substantial and prevents bleed-through.", icon: "📄" },
  { title: "Smyth-Sewn Binding", description: "Expertly crafted to lay perfectly flat, providing a seamless writing surface from edge to edge.", icon: "🧵" },
  { title: "Premium Linen Cover", description: "A tactile, durable linen finish that ages beautifully with every season of use.", icon: "✨" },
  { title: "Minimalist Design", description: "No distracting templates or prompts. Just a pure space for your unfiltered thoughts.", icon: "🎨" },
];

export default function Benefits() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' }, 
            mb: 8,
            color: 'primary.main'
          }}
        >
          Built for a lifetime of clarity
        </Typography>

        <Grid container spacing={4}>
          {physicalBenefits.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.default',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <Typography variant="h3" sx={{ fontSize: '2.5rem' }}>
                    {item.icon}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
