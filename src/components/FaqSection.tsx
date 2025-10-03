"use client";

import { motion } from "motion/react";
import { faqs } from "../content";
import Faq from "./ui/Faq";

export default function FaqSection() {
  return (
    <section id="faq" className="px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-white/10 rounded-2xl overflow-hidden border border-white/10">
          {faqs.map((item, index) => (
            <Faq key={index} q={item.q} a={item.a} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
