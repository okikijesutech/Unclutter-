import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  { 
    question: "Who is this for?", 
    answer: "Anyone who wants mental clarity. Whether you're a creative, a student, or a professional, Unclutter provides the space you need to think." 
  },
  { 
    question: "Is this a journaling app?", 
    answer: "It's more than that—it's a thinking space. While you can journal, Unclutter is designed for offloading thoughts and finding clarity." 
  },
  { 
    question: "When is the official launch?", 
    answer: "We're launching soon. Joining the waitlist ensures you're among the first to get early access and special beta pricing." 
  },
];

export default function FAQ() {
  return (
    <Box component="section" sx={{ py: 12, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3.5rem' }, 
            mb: 8,
            color: 'primary.main'
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
          {faqs.map((faq, i) => (
            <Accordion 
              key={i} 
              elevation={0} 
              sx={{ 
                '&:before': { display: 'none' },
                borderBottom: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'transparent'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                sx={{ px: 0, py: 1 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 4 }}>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
