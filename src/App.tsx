"use client";

import { motion } from "motion/react";
import React from "react";
import AcademyPlan from "./components/AcademyPlan";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import InfluencerApplicationForm from "./components/InfluencerApplicationForm";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import PlatformStat from "./components/PlatformStat";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./components/ScrollMotion";
import StatsGrid from "./components/Stats";
import { academyPlans, plans } from "./content";

export default function MemeCoinCallsSite() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at50%-10%,rgba(168,85,247,.25),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Live
            community
          </span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is in view; only once
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {"Alpha Meme Coin Calls — Simplified"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-2 inline-block"
                  variants={{
                    hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4"
          >
            High-signal calls. Clean risk frameworks. Fast execution. No noise.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
              },
            }}
            id="cta"
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://forms.gle/6aHjGvVS1gcCwTun8"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-95"
            >
              Get Access
            </a>
            <button
              onClick={(e) => handleSmoothScroll(e, "apply")}
              className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5"
            >
              Apply as Influencer
            </button>
          </motion.div>

          <StatsGrid />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            className="mt-6 max-w-3xl mx-auto"
          >
            <PlatformStat label="Available on" />
          </motion.div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <motion.section
        className="border-y border-white/10 bg-white/5"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers once when ~30% in view
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
            <ScrollVelocityRow baseVelocity={3} direction={1}>
              Real-time Alerts • Structured entries & exits • Education-first
              culture •
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={3} direction={-1}>
              Education-first culture • Structured entries & exits • Real-time
              Alerts •
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </motion.section>

      {/* ACADEMY CTA BANNER */}
      <motion.section
        className="px-4 py-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-white/10"
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left sm:text-left">
              <h3 className="text-xl font-bold text-white">
                Level Up Your Trading
              </h3>
              <p className="text-gray-300 text-sm">
                Join our premium academies for structured learning
              </p>
            </div>
            <button
              onClick={(e) => handleSmoothScroll(e, "academy")}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-95 whitespace-nowrap transition-transform hover:scale-105"
            >
              Explore Academy
            </button>
          </div>
        </div>
      </motion.section>

      {/* PRICING */}
      <motion.section
        id="pricing"
        className="px-4 py-16"
        initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your Access
            </h2>
            <p className="text-gray-400 mt-2">Start simple. Upgrade anytime.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex"
              >
                <Plan {...plan} className="flex flex-col flex-1" />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-xs text-gray-500 mt-6">
            No refunds. Cancel anytime. Not financial advice. Crypto is risky—do
            your own research.
          </p>
        </div>
      </motion.section>

      {/* ACADEMY */}
      <motion.section
        id="academy"
        className="px-4 py-16 bg-gradient-to-b from-slate-900 to-slate-950"
        initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trading Academies
            </h2>
            <p className="text-gray-400 mt-2">
              Structured courses for serious traders
            </p>
          </div>

          {/* Cards with stagger animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {academyPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex"
              >
                <AcademyPlan {...plan} className="flex flex-col flex-1" />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              All academies include lifetime access to materials and community
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-300">
                New cohorts starting monthly
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* APPLY */}
      <section id="apply" className="px-4 py-16 border-t border-white/10">
        <InfluencerApplicationForm />
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
