import { motion } from "framer-motion";
import { BrainIcon } from "./icons/BrainIcon";
import { PenIcon } from "./icons/PenIcon";
import { LeafIcon } from "./icons/LeafIcon";
import { TargetIcon } from "./icons/TargetIcon";

const benefitsList = [
  {
    title: "Clear mental overload",
    icon: BrainIcon,
  },
  {
    title: "Think more clearly",
    icon: PenIcon,
  },
  {
    title: "Reduce stress & anxiety",
    icon: LeafIcon,
  },
  {
    title: "Focus on what matters",
    icon: TargetIcon,
  },
];

export default function Benefits() {
  return (
    <section className='bg-[rgb(var(--color-surface))] py-20 md:py-28'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
        >
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='bg-white rounded-3xl p-6 border border-[rgb(var(--color-border))] text-center'
              >
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--color-primary)/0.25)]'>
                  <Icon className='h-6 w-6 text-[rgb(var(--color-text-dark))]' />
                </div>

                <h3 className='text-base font-medium text-[rgb(var(--color-text-dark))]'>
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
