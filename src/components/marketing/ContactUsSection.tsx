"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { SUPPORT, whatsappUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/site/Button";
import { FeatherAlertCircle, FeatherCheckCircle } from "@/components/site/icons";

const LABEL = "block font-sans text-[12px] font-normal leading-[18px] text-black";
const INPUT =
  "focus-ring mt-[8px] block h-[48px] w-full rounded-[8px] border border-black/20 bg-white px-[12px] font-sans text-[14px] leading-[20px] text-black placeholder:text-black/[0.32] transition-colors [color-scheme:light] focus:border-black focus-visible:ring-offset-white";

const TEAM_SIZES = [
  "Just me (1)",
  "2–5 people",
  "6–15 people",
  "16–50 people",
  "50+ people",
] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 font-sans text-[12px] leading-[18px] text-red-600">
      {message}
    </p>
  );
}

/**
 * White split contact section matching Figma `Contact` (`650:16147`):
 * 591px left column with direction copy + black-icon bordered support rows,
 * 641px right column white bordered form card with Black Primary submit CTA.
 */
export function ContactUsSection() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const [startedAt, setStartedAt] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setStartedAt(Date.now());
  }, [resetKey]);

  const errors = state.status === "error" && state.fieldErrors ? state.fieldErrors : {};

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }, [state]);

  return (
    <section className="relative z-[1] bg-white px-4 py-16 text-black [font-feature-settings:normal] sm:px-8 lg:px-[84px] lg:py-[88px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-10 lg:flex-row lg:gap-[40px]">
        {/* Left: Direct channels (650:16149 — 591×546 on desktop) */}
        <div className="flex w-full flex-col items-start justify-between gap-9 lg:h-[546px] lg:w-[591px] lg:shrink-0 lg:gap-0">
          <div className="w-full">
            <p className="font-sans text-[12px] font-normal leading-[18px] text-black">
              A LITTLE DIRECTION
            </p>
            <h2 className="mt-[21px] font-inter text-[28px] font-bold leading-[normal] tracking-[-0.416px] text-black sm:text-[32px]">
              Let&apos;s get you to
              <br />
              the right next step.
            </h2>
            <p className="mt-[16px] font-sans text-[14px] font-normal leading-[20px] text-black/[0.64]">
              A little context helps. Share your goal, the workflow you&apos;re improving or the issue you&apos;re trying to solve.
            </p>
          </div>

          <div className="w-full">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex items-center justify-between gap-6 border-b border-t border-black/20 px-3 py-[24px] transition-colors hover:bg-black/[0.02] focus-visible:ring-offset-white sm:gap-[40px] sm:px-[16px]"
            >
              <div className="flex min-w-0 flex-1 items-center gap-5 sm:gap-[24px]">
                <span className="grid size-[40px] shrink-0 place-items-center rounded-[8px] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src="/figma/5b09f.svg"
                    width={30}
                    height={30}
                    aria-hidden="true"
                    className="block size-[30px] max-w-none"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sans text-[18px] font-semibold leading-[25px] tracking-[-0.27px] text-black">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-[4px] block font-sans text-[12px] font-normal leading-[18px] text-black/[0.64]">
                    Fastest way to reach us during business hours
                  </span>
                  <span className="mt-[4px] block font-sans text-[12px] font-normal leading-[18px] text-black">
                    {SUPPORT.whatsappDisplay}
                  </span>
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/ac8ba.svg"
                width={32}
                height={32}
                aria-hidden="true"
                className="block size-[32px] shrink-0 max-w-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={`mailto:${SUPPORT.email}`}
              className="focus-ring group flex items-center justify-between gap-6 border-b border-black/20 px-3 py-[24px] transition-colors hover:bg-black/[0.02] focus-visible:ring-offset-white sm:gap-[40px] sm:px-[16px]"
            >
              <div className="flex min-w-0 flex-1 items-center gap-5 sm:gap-[24px]">
                <span className="grid size-[40px] shrink-0 place-items-center rounded-[8px] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src="/figma/a725d.svg"
                    width={30}
                    height={30}
                    aria-hidden="true"
                    className="block size-[30px] max-w-none"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sans text-[18px] font-semibold leading-[25px] tracking-[-0.27px] text-black">
                    Email us
                  </span>
                  <span className="mt-[4px] block font-sans text-[12px] font-normal leading-[18px] text-black/[0.64]">
                    We reply within one business day
                  </span>
                  <span className="mt-[4px] block font-sans text-[12px] font-normal leading-[18px] text-black">
                    {SUPPORT.email}
                  </span>
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/ac8ba.svg"
                width={32}
                height={32}
                aria-hidden="true"
                className="block size-[32px] shrink-0 max-w-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="flex items-center gap-5 border-b border-black/20 px-3 py-[24px] sm:gap-[24px] sm:px-[16px]">
              <span className="grid size-[40px] shrink-0 place-items-center rounded-[8px] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/df813.svg"
                  width={30}
                  height={30}
                  aria-hidden="true"
                  className="block size-[30px] max-w-none"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-sans text-[18px] font-semibold leading-[25px] tracking-[-0.27px] text-black">
                  Working Hours
                </p>
                <p className="mt-[8px] font-sans text-[12px] font-normal leading-[18px] text-black/[0.64]">
                  {SUPPORT.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: White bordered form card (650:16191 — 641×546 on desktop) */}
        <div className="w-full rounded-[16px] border border-black/20 bg-white p-[24px] lg:w-[641px] lg:shrink-0">
          {state.status === "success" ? (
            <div className="py-12 text-center" role="status">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#5ee878] text-black">
                <FeatherCheckCircle className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-inter text-[28px] font-bold tracking-[-0.4px] text-black">
                Message sent
              </h3>
              <p className="mx-auto mt-2 max-w-sm font-sans text-[16px] leading-[24px] text-black/[0.64]">
                Thanks for reaching out. Our team will get back to you within a few business hours.
              </p>
              <Button
                type="button"
                size="md"
                variant="secondary-light"
                onClick={() => setResetKey((k) => k + 1)}
                className="mt-6"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <div>
              <h2 className="font-inter text-[28px] font-bold leading-[normal] tracking-[-0.416px] text-black sm:text-[32px]">
                Start the conversation.
              </h2>

              <form
                key={resetKey}
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  startTransition(() => formAction(data));
                }}
                noValidate
                className="pt-[25px]"
                aria-describedby="contact-form-status"
              >
                {state.status === "error" && (
                  <div
                    id="contact-form-status"
                    role="alert"
                    className="mb-[21px] flex items-start gap-2 rounded-[10px] border border-red-300 bg-red-50 p-3.5 font-sans text-[14px] text-red-800"
                  >
                    <FeatherAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <span>
                      {state.message}{" "}
                      {!state.fieldErrors && (
                        <a
                          href={whatsappUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline"
                        >
                          Message us on WhatsApp
                        </a>
                      )}
                    </span>
                  </div>
                )}

                {/* Honeypot field: visually off-screen so bots filling every field get silently filtered. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <input type="hidden" name="startedAt" value={startedAt} />

                <div className="flex flex-col gap-[21px]">
                  <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={LABEL}>
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={INPUT}
                      />
                      <FieldError id="contact-name-error" message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={LABEL}>
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={INPUT}
                      />
                      <FieldError id="contact-email-error" message={errors.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-company" className={LABEL}>
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company Name"
                        className={INPUT}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-team-size" className={LABEL}>
                        Team Size
                      </label>
                      <select
                        id="contact-team-size"
                        name="teamSize"
                        defaultValue=""
                        className={cn(INPUT, "appearance-none cursor-pointer")}
                      >
                        <option value="" className="bg-white text-black">
                          Select team size
                        </option>
                        {TEAM_SIZES.map((size) => (
                          <option key={size} value={size} className="bg-white text-black">
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={LABEL}>
                      How can we help?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your team, your workflow or your questions"
                      className={cn(INPUT, "h-[128px] resize-none py-[12px]")}
                    />
                  </div>
                </div>

                <div className="pt-[40px]">
                  <Button type="submit" size="md" variant="primary-dark" disabled={pending} className="w-full">
                    {pending ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
