"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { isValidEmail } from "@/lib/utils/validation";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Business Strategy",
  "Operational Excellence",
  "Leadership Coaching",
  "Market Expansion",
];

const inputBaseClass =
  "h-[52px] w-full rounded-2xl border bg-white px-5 text-[14px] leading-5 text-[#070a0f] outline-none transition-colors placeholder:text-[#6e737a] focus:border-[#84cc16]";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6e737a]"
      fill="none"
    >
      <path
        d="M2.5 6.25A1.75 1.75 0 0 1 4.25 4.5h11.5a1.75 1.75 0 0 1 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-7.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="m3.25 6.25 5.88 4.37a1.5 1.5 0 0 0 1.74 0l5.88-4.37" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function getFieldErrorMessage(field: keyof ContactFormData, value: string): string {
  if (!value.trim()) {
    return "This field is required.";
  }

  if (field === "email" && !isValidEmail(value)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: getFieldErrorMessage(field, value) }));
  };

  const validateForm = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((field) => {
      const fieldError = getFieldErrorMessage(field, formData[field]);
      if (fieldError) {
        nextErrors[field] = fieldError;
      }
    });

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section className="w-full bg-[#ffffff] px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-[46px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[540px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c7c9cc]" />
              <p className="text-[16px] leading-6 text-[#6e737a]">Contact Us</p>
            </div>
            <h1
              className="mt-3 text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Get In touch with us
            </h1>
          </div>
          <p
            className="max-w-[460px] text-[18px] leading-7 text-[#1f1f1f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Helping businesses overcome complexity, achieve growth, and transform with expert
            guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,572px)_minmax(0,1fr)] lg:gap-20">
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] sm:min-h-[520px] lg:min-h-[659px] lg:rounded-[40px]">
            <Image
              src="/images/png/services-guidance-main.png"
              alt="Consultant smiling while working in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 572px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(224.7deg, rgba(132, 204, 22, 0) 54.32%, rgba(132, 204, 22, 1) 100.56%)",
              }}
            />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <div className="max-w-[386px]">
                <h2
                  className="text-[32px] leading-10 font-medium tracking-[-1px] text-white"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Prefer to Talk to Us Directly?
                </h2>
                <p className="mt-2 text-[16px] leading-6 text-white">
                  Get instant support from our team for urgent inquiries or quick questions.
                </p>
                <Link
                  href="tel:+1234567890"
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#e8eaed] bg-white px-5 py-3 text-[16px] leading-6 font-medium text-[#070a0f]"
                >
                  Call Us Now
                  <Image
                    src="/images/svg/icon-arrow-right.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-[#fafafa] p-6 sm:p-8 lg:rounded-[40px] lg:p-10"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-[5px] block text-[14px] leading-5 font-medium text-[#191c21]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Full Name
                </label>
                <div className="relative">
                  <MailIcon />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(event) => handleFieldChange("fullName", event.target.value)}
                    placeholder="Enter your name"
                    className={`${inputBaseClass} border-[#f4f5f7] pl-12`}
                  />
                </div>
                {errors.fullName ? (
                  <p className="mt-1 text-[13px] leading-5 text-[#dc2626]">{errors.fullName}</p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-[5px] block text-[14px] leading-5 font-medium text-[#191c21]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <MailIcon />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => handleFieldChange("email", event.target.value)}
                      placeholder="Enter your email"
                      className={`${inputBaseClass} border-[#f4f5f7] pl-12`}
                    />
                  </div>
                  {errors.email ? (
                    <p className="mt-1 text-[13px] leading-5 text-[#dc2626]">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-[5px] block text-[14px] leading-5 font-medium text-[#191c21]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <Image
                      src="/images/svg/icon-call.svg"
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => handleFieldChange("phone", event.target.value)}
                      placeholder="Enter your number"
                      className={`${inputBaseClass} border-[#f4f5f7] pl-12`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="mt-1 text-[13px] leading-5 text-[#dc2626]">{errors.phone}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-[5px] block text-[14px] leading-5 font-medium text-[#191c21]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Select a Service
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(event) => handleFieldChange("service", event.target.value)}
                    className={`${inputBaseClass} border-[#f4f5f7] appearance-none pr-12 text-[#6e737a]`}
                  >
                    <option value="">Choose your service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <Image
                    src="/images/svg/icon-chevron-down.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
                  />
                </div>
                {errors.service ? (
                  <p className="mt-1 text-[13px] leading-5 text-[#dc2626]">{errors.service}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-[5px] block text-[14px] leading-5 font-medium text-[#191c21]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder="Enter your message"
                  className="h-[147px] w-full resize-none rounded-2xl border border-[#f4f5f7] bg-white px-5 py-[14px] text-[14px] leading-5 text-[#070a0f] outline-none transition-colors placeholder:text-[#6e737a] focus:border-[#84cc16]"
                />
                {errors.message ? (
                  <p className="mt-1 text-[13px] leading-5 text-[#dc2626]">{errors.message}</p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#e8eaed] bg-white px-5 py-3 text-[16px] leading-6 font-medium text-[#070a0f]"
            >
              Sent Message
              <Image
                src="/images/svg/icon-arrow-right.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
            </button>

            {isSubmitted ? (
              <p className="mt-3 text-[14px] leading-5 text-[#166534]">
                Thanks! Your message has been sent successfully.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
