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

  /**
   * Native form submission.
   *
   * IMPORTANT:
   * We intentionally DO NOT preventDefault().
   * The browser submits directly to SilentForms.
   *
   * The form targets a hidden iframe, so the user
   * stays on this page instead of being redirected.
   */
  const handleSubmit = () => {
    submittedRef.current = true;
    setStatus("submitting");
  };

  /**
   * SilentForms loads its response into the hidden iframe.
   *
   * We cannot read the cross-origin response itself,
   * but we can detect that the iframe finished loading.
   */
  const handleIframeLoad = () => {
    if (!submittedRef.current) {
      return;
    }

    submittedRef.current = false;

    setStatus("success");

    // Reset form after successful submission
    formRef.current?.reset();
  };

  return (
    <section
      id="contact"
      className="py-[70px] border-t border-slate-800/80"
    >
      <SectionHeader
        number="07"
        title="connect with me"
        subtitle="Let's build something exceptional together. Open to full-stack, mobile, and consulting roles."
      />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-[#0e1526] to-slate-950 p-6 sm:p-10 shadow-2xl">
        {/* Glow Backdrops */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300 mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />

                <span>
                  Open for Work & Collaboration
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Have a project in mind or want to collaborate?
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you need a cross-platform Flutter
                application, a robust React & Laravel web
                system, or a technical consultation, feel free
                to send a message directly.
              </p>
            </div>

            {/* Optional email card */}
            <div className="mt-8">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-left transition-all hover:border-cyan-500/40 hover:bg-cyan-500/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {copied ? "Copied!" : "Prefer email?"}
                  </div>

                  <div className="font-mono text-xs text-slate-300 group-hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-5">
              // Send a Direct Message
            </div>

            <form
              ref={formRef}
              action="https://silentforms.com/api/submit"
              method="POST"
              target="silentforms-response"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* SilentForms Access Key */}
              <input
                type="hidden"
                name="accessKey"
                value="6cddf514dfe8708009f5ec44538f95c590db2731b567fad16e595f87187ee565"
              />

              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-px w-px opacity-0"
              />

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] text-slate-300 mb-1.5"
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
                    className="w-full font-mono text-xs bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] text-slate-300 mb-1.5"
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
                    className="w-full font-mono text-xs bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] text-slate-300 mb-1.5"
                >
                  Message{" "}
                  <span className="text-cyan-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, ideas, or timeline..."
                  onInput={handleMessageInput}
                  className="w-full min-h-[110px] max-h-[400px] overflow-y-auto font-mono text-xs bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-[height] duration-150 resize-none"
                />
              </div>


              {/* SUCCESS */}
              {status === "success" && (
                <div
                  role="status"
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400 animate-fade-in"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />

                  <div>
                    <div className="font-semibold">
                      Message sent successfully.
                    </div>

                    <div className="mt-0.5 text-emerald-400/70">
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
                  className="flex items-start gap-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 font-mono text-xs text-rose-400"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />

                  <div>
                    <div className="font-semibold">
                      Something went wrong.
                    </div>

                    <div className="mt-0.5 text-rose-400/70">
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:cursor-not-allowed"
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
