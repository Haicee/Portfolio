import React, { useRef, useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");
  // idle | submitting | success | error

  const formRef = useRef(null);
  const submittedRef = useRef(false);

  const handleMessageInput = (e) => {
    const textarea = e.target;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const handleSubmit = () => {
    submittedRef.current = true;
    setStatus("submitting");
  };

  const handleIframeLoad = () => {
    if (!submittedRef.current) {
      return;
    }

    submittedRef.current = false;

    setStatus("success");

    formRef.current?.reset();

    // Reset textarea height after submission
    const textarea = formRef.current?.querySelector("textarea");

    if (textarea) {
      textarea.style.height = "";
    }
  };

  return (
    <section
      id="contact"
      className="py-[77px] border-t border-slate-800/80"
    >
      <SectionHeader
        number="07"
        title="connect with me"
        subtitle="Let's build something exceptional together. Open to full-stack, mobile, and consulting roles."
      />

      {/* =====================================================
          CONTACT CONTENT
          No outer background/card.
          Uses the existing page background naturally.
      ===================================================== */}
      <div className="mt-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* =================================================
              LEFT SIDE
          ================================================= */}
          <div className="lg:col-span-5">

            {/* Availability Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/5
                px-3
                py-1
                font-mono
                text-xs
                text-cyan-300
                mb-5
              "
            >
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />

              <span>Open for Work & Collaboration</span>
            </div>

            {/* Heading */}
            <h3
              className="
                max-w-xl
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-extrabold
                text-white
                leading-[1.1]
                tracking-tight
              "
            >
              Have a project in mind or want to collaborate?
            </h3>

            {/* Description */}
            <p
              className="
                max-w-xl
                mt-4
                text-sm
                sm:text-[15px]
                text-slate-400
                leading-relaxed
              "
            >
              Whether you need a cross-platform Flutter application,
              a robust React & Laravel web system, or a technical
              consultation, feel free to send a message directly.
            </p>

            {/* Email */}
            <div className="mt-8">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="
                  group
                  inline-flex
                  max-w-full
                  items-center
                  gap-3
                  text-left
                  transition-colors
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-800
                    bg-slate-950/40
                    text-cyan-400
                    transition-colors
                    group-hover:border-cyan-500/40
                    group-hover:bg-cyan-500/5
                  "
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </div>

                {/* Email Text */}
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {copied ? "Copied!" : "Prefer email?"}
                  </div>

                  <div
                    className="
                      mt-0.5
                      font-mono
                      text-xs
                      text-slate-300
                      group-hover:text-cyan-300
                      transition-colors
                      truncate
                    "
                  >
                    {personalInfo.email}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE / FORM
          ================================================= */}
          <div className="lg:col-span-7 w-full lg:max-w-2xl lg:ml-auto">

            {/* Form Header */}
            <div
              className="
                pb-4
                mb-5
                border-b
                border-slate-800/80
                font-mono
                text-xs
                text-cyan-400
                font-semibold
                uppercase
                tracking-wider
              "
            >
              // Send a Direct Message
            </div>

            <form
              ref={formRef}
              action="https://silentforms.com/api/submit"
              method="POST"
              target="silentforms-response"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* SilentForms Access Key */}
              <input
                type="hidden"
                name="accessKey"
                value="YOUR_SILENTFORMS_ACCESS_KEY"
              />

              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="
                  absolute
                  left-[-9999px]
                  h-px
                  w-px
                  opacity-0
                "
              />

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      block
                      font-mono
                      text-[11px]
                      text-slate-300
                      mb-2
                    "
                  >
                    Your Name{" "}
                    <span className="text-cyan-400">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Alex Rivera"
                    className="
                      w-full
                      font-mono
                      text-xs
                      bg-slate-950/50
                      border
                      border-slate-800
                      rounded-lg
                      px-4
                      py-3
                      text-slate-100
                      placeholder-slate-600
                      focus:outline-none
                      focus:border-cyan-500/70
                      focus:ring-1
                      focus:ring-cyan-500/30
                      transition-all
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      block
                      font-mono
                      text-[11px]
                      text-slate-300
                      mb-2
                    "
                  >
                    Your Email{" "}
                    <span className="text-cyan-400">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="e.g. alex@company.com"
                    className="
                      w-full
                      font-mono
                      text-xs
                      bg-slate-950/50
                      border
                      border-slate-800
                      rounded-lg
                      px-4
                      py-3
                      text-slate-100
                      placeholder-slate-600
                      focus:outline-none
                      focus:border-cyan-500/70
                      focus:ring-1
                      focus:ring-cyan-500/30
                      transition-all
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    block
                    font-mono
                    text-[11px]
                    text-slate-300
                    mb-2
                  "
                >
                  Message{" "}
                  <span className="text-cyan-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, ideas, or timeline..."
                  onInput={handleMessageInput}
                  className="
                    w-full
                    min-h-[130px]
                    max-h-[400px]
                    overflow-y-auto
                    resize-none
                    font-mono
                    text-xs
                    bg-slate-950/50
                    border
                    border-slate-800
                    rounded-lg
                    px-4
                    py-3
                    text-slate-100
                    placeholder-slate-600
                    focus:outline-none
                    focus:border-cyan-500/70
                    focus:ring-1
                    focus:ring-cyan-500/30
                    transition-[height]
                    duration-150
                  "
                />
              </div>

              {/* SUCCESS */}
              {status === "success" && (
                <div
                  role="status"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-lg
                    border
                    border-emerald-500/30
                    bg-emerald-500/5
                    p-3
                    font-mono
                    text-xs
                    text-emerald-400
                  "
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />

                  <div>
                    <div className="font-semibold">
                      Message sent successfully.
                    </div>

                    <div className="mt-1 text-emerald-400/70">
                      Thanks for reaching out. I'll get back to
                      you as soon as possible.
                    </div>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div
                  role="alert"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-lg
                    border
                    border-rose-500/30
                    bg-rose-500/5
                    p-3
                    font-mono
                    text-xs
                    text-rose-400
                  "
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />

                  <div>
                    <div className="font-semibold">
                      Something went wrong.
                    </div>

                    <div className="mt-1 text-rose-400/70">
                      Please try again or contact me directly by
                      email.
                    </div>
                  </div>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-cyan-500
                  hover:bg-cyan-400
                  disabled:bg-slate-800
                  disabled:text-slate-500
                  text-slate-950
                  font-mono
                  text-xs
                  font-bold
                  transition-all
                  shadow-[0_0_20px_rgba(6,182,212,0.18)]
                  hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]
                  disabled:cursor-not-allowed
                "
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Invisible SilentForms response target */}
            <iframe
              name="silentforms-response"
              title="SilentForms submission"
              onLoad={handleIframeLoad}
              className="hidden"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
