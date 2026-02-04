import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₦0",
    features: ["Basic writing", "Cloud sync", "1 device"],
    highlight: false,
  },
  {
    name: "Early Access",
    price: "₦4,500",
    features: [
      "Unlimited writing",
      "All future features",
      "Lifetime discount",
      "Priority support",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className='py-24 bg-[rgb(var(--color-surface))]'>
      <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-3xl font-semibold text-center text-[rgb(var(--color-text-dark))] mb-12'>
          Early Access Pricing
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`
                rounded-3xl
                p-8
                border
                transition
                ${
                  plan.highlight
                    ? "bg-[rgb(var(--color-secondary)/0.2)] border-[rgb(var(--color-secondary))]"
                    : "bg-[rgb(var(--color-card))] border-[rgb(var(--color-border))]"
                }
              `}
            >
              <h3 className='text-xl font-medium mb-4'>{plan.name}</h3>

              <p className='text-4xl font-semibold mb-6'>{plan.price}</p>

              <ul className='space-y-3 text-[rgb(var(--color-text-muted))] mb-8'>
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 rounded-full
                  ${
                    plan.highlight
                      ? "bg-[rgb(var(--color-secondary))] text-white"
                      : "border border-[rgb(var(--color-border))]"
                  }
                `}
              >
                {plan.highlight ? "Pre-Order Now" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
