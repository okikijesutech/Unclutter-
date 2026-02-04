import { Container, Typography, Box } from "@mui/material";

export default function Problem() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', spaceY: 4 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' }, 
              mb: 3,
              color: 'primary.main'
            }}
          >
            Your mind is full. That’s not your fault.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.2rem', 
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.8
            }}
          >
            Thoughts pile up. Notes scatter. Journals get abandoned.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.2rem', 
              color: 'text.secondary',
              lineHeight: 1.8
            }}
          >
            Most tools add more noise.
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, ml: 1 }}>
              Unclutter removes it.
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
