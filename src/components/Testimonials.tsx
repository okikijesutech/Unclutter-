import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Clara", text: "“Unclutter gives my thoughts room to breathe. It's the first thing I open in the morning.”", role: "Content Creator" },
  { name: "Olu", text: "“The minimalist design helps me focus on writing, not on the tool itself. Truly life-changing.”", role: "Software Engineer" },
  { name: "Amaka", text: "“I've tried every journaling app out there. Unclutter is the only one that stuck.”", role: "Design Student" },
];

export default function Testimonials() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: 'background.default' }}>
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
          What our writers say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 4, 
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    height: '100%',
                    p: 2
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic', 
                        mb: 4, 
                        color: 'text.secondary',
                        lineHeight: 1.8
                      }}
                    >
                      {t.text}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main', color: 'white' }}>
                        {t.name[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {t.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>
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
