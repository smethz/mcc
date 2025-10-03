import { motion } from "motion/react";
import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import Check from "./ui/Check";
import Input from "./ui/Input";
import MonoInput from "./ui/MonoInput";
import Textarea from "./ui/Textarea";

const SUBMISSION_WORKER_URL =
  "https://influencer-submissions.cf-f0d.workers.dev";

interface FormData {
  name: string;
  email: string;
  phone: string;
  xUsername: string;
  telegram: string;
  discord: string;
  audienceEngagement: string;
  discordCalls: boolean;
  telegramCalls: boolean;
  xGroupCalls: boolean;
  xPublicCalls: boolean;
  solanaWallet: string;
  ethereumWallet: string;
  suiWallet: string;
  channelLinks: string;
}

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

export default function InfluencerApplicationForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    xUsername: "",
    telegram: "",
    discord: "",
    audienceEngagement: "",
    discordCalls: false,
    telegramCalls: false,
    xGroupCalls: false,
    xPublicCalls: false,
    solanaWallet: "",
    ethereumWallet: "",
    suiWallet: "",
    channelLinks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleCheckChange =
    (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.checked,
      }));
    };

  const validateForm = (): boolean => {
    const required: (keyof FormData)[] = [
      "name",
      "email",
      "phone",
      "xUsername",
      "telegram",
      "discord",
      "audienceEngagement",
      "solanaWallet",
      "ethereumWallet",
      "suiWallet",
    ];

    for (const field of required) {
      if (!formData[field]?.toString().trim()) {
        return false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      submissionId:
        Date.now().toString(36) + Math.random().toString(36).substr(2),
    };

    try {
      const response = await fetch(SUBMISSION_WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitStatus({
          type: "success",
          message: result.message || "Application submitted successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          xUsername: "",
          telegram: "",
          discord: "",
          audienceEngagement: "",
          discordCalls: false,
          telegramCalls: false,
          xGroupCalls: false,
          xPublicCalls: false,
          solanaWallet: "",
          ethereumWallet: "",
          suiWallet: "",
          channelLinks: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-3xl mx-auto p-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Influencer Application
        </h2>
        <p className="text-gray-400 mt-2">
          For active alpha callers only. Solana wallet required.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name *"
            placeholder="John Doe"
            type="text"
            value={formData.name}
            onChange={handleInputChange("name")}
            required
          />
          <Input
            label="Email *"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange("email")}
            required
          />
        </div>

        <Input
          label="Phone *"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={handleInputChange("phone")}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="X Username *"
            type="text"
            placeholder="username"
            value={formData.xUsername}
            onChange={handleInputChange("xUsername")}
            required
          />
          <Input
            label="Telegram *"
            placeholder="@username"
            type="text"
            value={formData.telegram}
            onChange={handleInputChange("telegram")}
            required
          />
          <Input
            label="Discord *"
            placeholder="username#1234"
            type="text"
            value={formData.discord}
            onChange={handleInputChange("discord")}
            required
          />
        </div>

        <Textarea
          label="Audience & Engagement *"
          placeholder={`X: 50K / 5%
Telegram: 10K / 20% active
Discord: 5K ...`}
          value={formData.audienceEngagement}
          onChange={handleInputChange("audienceEngagement")}
          required
        />

        <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Check
            label="Discord Channel Calls"
            checked={formData.discordCalls}
            onChange={handleCheckChange("discordCalls")}
          />
          <Check
            label="Telegram Channel Calls"
            checked={formData.telegramCalls}
            onChange={handleCheckChange("telegramCalls")}
          />
          <Check
            label="X Groupchat Calls"
            checked={formData.xGroupCalls}
            onChange={handleCheckChange("xGroupCalls")}
          />
          <Check
            label="X Public Post Calls"
            checked={formData.xPublicCalls}
            onChange={handleCheckChange("xPublicCalls")}
          />
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MonoInput
            label="Solana Wallet *"
            placeholder="Phantom / Backpack"
            value={formData.solanaWallet}
            onChange={handleInputChange("solanaWallet")}
            required
          />
          <MonoInput
            label="Ethereum Wallet *"
            placeholder="0x..."
            value={formData.ethereumWallet}
            onChange={handleInputChange("ethereumWallet")}
            required
          />
          <MonoInput
            label="Sui Wallet *"
            placeholder="Sui address"
            value={formData.suiWallet}
            onChange={handleInputChange("suiWallet")}
            required
          />
        </div>

        <Textarea
          label="Links to call channels"
          placeholder="Paste your X threads, Telegram, Discord, etc."
          value={formData.channelLinks}
          onChange={handleInputChange("channelLinks")}
        />

        {submitStatus && (
          <div
            className={`p-3 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            We review weekly and contact profiles that fit.
          </p>
        </div>
      </form>
    </motion.div>
  );
}
