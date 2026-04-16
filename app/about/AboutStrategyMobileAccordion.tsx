"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AboutStrategyMobileAccordionProps = {
  principles: {
    title: string;
    description: string;
  }[];
};

export default function AboutStrategyMobileAccordion({ principles }: AboutStrategyMobileAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-1 lg:hidden">
      {principles.map((principle, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.button
            key={principle.title}
            type="button"
            onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
            className="w-full border-b border-[#f4f5f7] py-3 text-left last:border-b-0"
            whileTap={{ scale: 0.998 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3
                className="text-[16px] leading-6 font-medium text-[#182226]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {principle.title}
              </h3>
              <motion.span
                className="text-[24px] leading-none text-[#182226]"
                animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.06 : 1 }}
                transition={{ duration: 0.22 }}
              >
                {isOpen ? "−" : "+"}
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 6 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] leading-5 text-[#3e4447]">{principle.description}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
