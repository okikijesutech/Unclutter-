import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

const specs = [
  { label: "Cover Material", value: "Premium Italian Linen" },
  { label: "Paper Weight", value: "120 gsm Archival Quality" },
  { label: "Page Count", value: "192 numbered pages" },
  { label: "Binding", value: "Smyth-Sewn (Lays Flat)" },
  { label: "Size", value: "A5 (148 x 210 mm)" },
  { label: "Additional Features", value: "Expandable back pocket, 2 ribbon markers" },
];

export default function ProductSpecs() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              component="img"
              src="/assets/journal-texture.png"
              alt="Journal paper texture close-up"
              sx={{
                width: '100%',
                borderRadius: 8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                display: 'block'
              }}
            />
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ mb: 4, color: 'primary.main' }}>
              Product Specifications
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary', lineHeight: 1.8 }}>
              Every Unclutter journal is manufactured with the highest attention to detail, 
              ensuring that your writing experience is as smooth as your thoughts.
            </Typography>
            
            <List disablePadding>
              {specs.map((spec, index) => (
                <Box key={index}>
                  <ListItem sx={{ py: 2, px: 0 }}>
                    <ListItemText 
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {spec.label}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1" color="text.secondary">
                          {spec.value}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < specs.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
