import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("You're in 🌸 We'll email you soon.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className='w-full max-w-md rounded-2xl bg-white/70 backdrop-blur p-6 shadow-md'
    >
      <label className='block text-sm text-gray-700 mb-2'>
        Join the waitlist
      </label>

      <div className='flex gap-2'>
        <input
          type='email'
          required
          placeholder='you@calmspace.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='flex-1 rounded-xl px-4 py-3 text-sm outline-none border border-gray-200 focus:border-pink-300'
        />

        <button
          disabled={status === "loading"}
          className='rounded-xl bg-pink-400 px-5 py-3 text-white text-sm hover:bg-pink-500 transition'
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </div>

      {message && <p className='mt-3 text-sm text-gray-600'>{message}</p>}

      <p className='mt-3 text-xs text-gray-400'>
        No spam. Just calm updates ✨
      </p>
    </motion.form>
  );
}
