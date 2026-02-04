import { TextField, Button, Container } from "@mui/material";

export default function Preorder() {
  return (
    <div className='py-20 bg-white'>
      <Container maxWidth='sm'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl font-semibold'>Be the first to know</h2>

          <p className='text-gray-500'>
            Join the waitlist for early access and launch discounts.
          </p>

          <div className='flex gap-3 mt-6'>
            <TextField fullWidth label='Email address' variant='outlined' />

            <Button
              variant='contained'
              sx={{
                backgroundColor: "#111827",
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Join
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
