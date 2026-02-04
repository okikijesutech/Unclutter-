import { Box, Container, Typography, TextField, Button, Grid, Paper, CircularProgress, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { submitPreorder, isAlreadyPreordered } from "../lib/storage";

export default function Preorder() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (isAlreadyPreordered()) {
      setStatus("success");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await submitPreorder(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Box component="section" id="preorder" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 8 }, 
            borderRadius: 8, 
            backgroundColor: 'primary.main', 
            color: 'white',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h2" sx={{ mb: 3, color: 'white' }}>
                Ready to reclaim your mental space?
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, opacity: 0.9, fontSize: '1.2rem', lineHeight: 1.6 }}>
                Our first edition is limited to 500 hand-numbered journals. 
                Pre-order today and receive a complimentary Unclutter brass bookmark with your shipment.
              </Typography>
              
              {status === "success" ? (
                <Box sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4 }}>
                  <Typography variant="h6">Thank you for your pre-order! 🌸</Typography>
                  <Typography variant="body2">We'll send a confirmation email with your order details shortly.</Typography>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <TextField 
                        fullWidth 
                        type="email"
                        placeholder="Enter your email to start checkout" 
                        variant="outlined"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            backgroundColor: 'white',
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Button 
                        type="submit"
                        fullWidth
                        variant="contained" 
                        sx={{ 
                          height: '100%', 
                          borderRadius: '50px', 
                          bgcolor: 'secondary.main',
                          color: 'white',
                          py: { xs: 1.5, sm: 0 },
                          minHeight: '56px',
                          '&:hover': { bgcolor: '#b49460' }
                        }}
                        disabled={status === "loading"}
                      >
                       {status === "loading" ? <CircularProgress size={24} color="inherit" /> : "Pre-order Now"}
                      </Button>
                    </Grid>
                  </Grid>
                  {status === "error" && (
                    <Alert severity="error" sx={{ mt: 2, borderRadius: 4 }}>
                      Something went wrong. Please try again later.
                    </Alert>
                  )}
                </Box>
              )}
            </Grid>
            
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box 
                component="img"
                src="/assets/journal-top.png"
                alt="Unclutter Journal top view"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  transform: 'rotate(5deg) scale(1.1)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
