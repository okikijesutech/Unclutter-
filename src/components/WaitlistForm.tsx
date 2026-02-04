import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, TextField, Button, Alert, CircularProgress } from "@mui/material";
import { submitToWaitlist, isAlreadyWaitlisted } from "../lib/storage";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (isAlreadyWaitlisted()) {
      setStatus("success");
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await submitToWaitlist(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Box component="section" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Box 
            component="form" 
            onSubmit={submit}
            sx={{ 
              p: 6, 
              borderRadius: 6, 
              backgroundColor: 'background.paper', 
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}
          >
            <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>
              Join the waitlist
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Be the first to know when we launch and get early access.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField
                fullWidth
                type="email"
                required
                placeholder="you@example.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'success' || status === 'loading'}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 50,
                    backgroundColor: 'background.default'
                  }
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={status === 'loading' || status === 'success'}
                sx={{ 
                  borderRadius: 50, 
                  px: 4,
                  py: { xs: 1.5, sm: 0 },
                  minWidth: '140px'
                }}
              >
                {status === "loading" ? <CircularProgress size={24} color="inherit" /> : "Notify me"}
              </Button>
            </Box>

            {status === "success" && (
              <Alert 
                severity="success" 
                sx={{ 
                  mt: 3, 
                  borderRadius: 4,
                  '& .MuiAlert-message': { fontWeight: 500 }
                }}
              >
                You’re on the list! We'll be in touch soon. 🌸
              </Alert>
            )}

            {status === "error" && (
              <Alert 
                severity="error" 
                sx={{ 
                  mt: 3, 
                  borderRadius: 4,
                  '& .MuiAlert-message': { fontWeight: 500 }
                }}
              >
                Something went wrong. Please try again later.
              </Alert>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
