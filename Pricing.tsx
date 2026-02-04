import { Button, Container, Card } from "@mui/material";

export default function Pricing() {
  return (
    <section className='py-24 bg-gray-50'>
      <Container maxWidth='lg'>
        <h2 className='text-3xl font-semibold text-center mb-12'>
          Early access pricing
        </h2>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {/* Free */}
          <Card className='p-8 text-center'>
            <h3 className='text-xl font-semibold'>Free</h3>
            <p className='text-4xl font-bold my-4'>₦0</p>

            <ul className='text-gray-600 space-y-2 mb-6'>
              <li>Basic writing space</li>
              <li>Limited notes</li>
              <li>Cloud sync</li>
            </ul>

            <Button variant='outlined' fullWidth>
              Join Free
            </Button>
          </Card>

          {/* Early Access */}
          <Card className='p-8 text-center border-2 border-gray-900'>
            <p className='text-sm uppercase tracking-wide text-gray-500'>
              Early Access
            </p>
            <h3 className='text-xl font-semibold mt-2'>Lifetime Clarity</h3>

            <p className='text-4xl font-bold my-4'>₦4,500</p>

            <ul className='text-gray-600 space-y-2 mb-6'>
              <li>Unlimited writing</li>
              <li>Early feature access</li>
              <li>Lifetime discount</li>
              <li>Support the product</li>
            </ul>

            <Button
              variant='contained'
              fullWidth
              sx={{
                backgroundColor: "#111827",
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Pre-Order Now
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
