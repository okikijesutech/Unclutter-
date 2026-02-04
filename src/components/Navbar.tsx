import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-[rgb(var(--color-border))]'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <span className='text-lg font-semibold text-[rgb(var(--color-text-dark))]'>
          Unclutter
        </span>

        <div className='hidden md:flex items-center gap-4'>
          <button className='bg-[rgb(var(--color-secondary))] text-white px-6 py-2 rounded-full hover:opacity-90 transition'>
            Pre-Order
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-2xl text-[rgb(var(--color-text-dark))]'
          aria-label='Toggle menu'
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='md:hidden bg-white border-t border-[rgb(var(--color-border))]'
          >
            <div className='px-6 py-6'>
              <button className='w-full bg-[rgb(var(--color-secondary))] text-white py-3 rounded-full'>
                Pre-Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
