import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((r) => setTimeout(r, 1000));

    setStatus("success");
    setEmail("");
  };

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-md mx-auto px-6'>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='rounded-3xl bg-[rgb(var(--color-surface))] p-6 border border-[rgb(var(--color-border))]'
        >
          <label className='block text-sm mb-2'>Join the waitlist</label>

          <div className='flex gap-2'>
            <input
              type='email'
              required
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='flex-1 rounded-xl px-4 py-3 text-sm border border-[rgb(var(--color-border))] focus:outline-none'
            />

            <button className='rounded-xl bg-[rgb(var(--color-secondary))] px-5 py-3 text-white text-sm'>
              {status === "loading" ? "…" : "Notify me"}
            </button>
          </div>

          {status === "success" && (
            <p className='mt-3 text-sm text-[rgb(var(--color-text-muted))]'>
              You’re in 🌸
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
