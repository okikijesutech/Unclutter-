import { Button, Container } from "@mui/material";

export default function Pricing() {
  return (
    <section className='bg-white'>
      <Container maxWidth='lg'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Early Access Offers
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* FREE */}
          <div className='border rounded-lg p-8 text-center hover:shadow-lg transition'>
            <p className='text-sm uppercase text-gray-500'>Forever Free</p>
            <p className='text-5xl font-bold my-4'>₦0</p>
            <ul className='space-y-2 text-gray-600 mb-6'>
              <li>Basic writing space</li>
              <li>Cloud sync</li>
              <li>Basic notes</li>
            </ul>
            <Button variant='outlined' fullWidth>
              Join Free
            </Button>
          </div>

          {/* LIFETIME */}
          <div className='border-2 border-[#111827] rounded-lg p-8 text-center bg-[#f9fafb] hover:shadow-xl transition'>
            <p className='text-sm text-[#111827] font-semibold mb-2'>
              Limited Offer
            </p>
            <p className='text-5xl font-bold my-4'>₦4,500</p>
            <ul className='space-y-2 text-gray-600 mb-6'>
              <li>Unlimited writing</li>
              <li>Early feature access</li>
              <li>Lifetime discount</li>
              <li>Priority support</li>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
