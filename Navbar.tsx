import { Button, Container } from "@mui/material";

export default function Navbar() {
  return (
    <nav className='py-4 border-b bg-white'>
      <Container maxWidth='lg' className='flex justify-between items-center'>
        <h1 className='font-semibold text-xl'>Unclutter</h1>

        <Button
          variant='contained'
          sx={{
            backgroundColor: "#111827",
            "&:hover": { backgroundColor: "#000" },
            borderRadius: "9999px",
          }}
        >
          Pre-Order
        </Button>
      </Container>
    </nav>
  );
}
