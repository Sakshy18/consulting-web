import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#" },
  { label: "Blog", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Reviews", href: "#" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: "/images/svg/icon-instagram.svg",
  },
  {
    label: "X",
    href: "#",
    icon: "/images/svg/icon-twitter.svg",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "/images/svg/icon-facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "/images/svg/icon-linkedin.svg",
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white px-5 pb-5">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 rounded-[40px] bg-[#070a0f] px-6 pb-6 pt-10 text-white sm:px-10 sm:pt-14 lg:gap-[92px] lg:px-[60px] lg:pb-[42px] lg:pt-[60px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-8">
          <div className="flex max-w-[560px] flex-col gap-10 lg:gap-[60px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <Image
                  src="/images/svg/execora-logo-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={62}
                  height={62}
                />
                <span className="font-[var(--font-inter-tight)] text-[46px] leading-[1.1] font-semibold text-white">
                  Execora
                </span>
              </div>
              <p className="max-w-[521px] font-[var(--font-inter-tight)] text-[18px] leading-7 text-[#aaaaaa]">
                Helping business with structured strategy, disciplined execution,
                and measurable growth.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-[#373737] p-2.5 transition-colors hover:bg-[#151a22]"
                >
                  <Image src={social.icon} alt="" aria-hidden="true" width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:gap-[60px]">
            <div className="flex min-w-[108px] flex-col gap-4">
              <h2 className="font-[var(--font-inter-tight)] text-[20px] leading-7 font-medium tracking-[-0.2px] text-white">
                Quick Links
              </h2>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-[var(--font-inter-tight)] text-[18px] leading-7 text-[#babdc2] transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-[108px] flex-col gap-4">
              <h2 className="font-[var(--font-inter-tight)] text-[20px] leading-7 font-medium tracking-[-0.2px] text-white">
                Company
              </h2>
              <ul className="space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-[var(--font-inter-tight)] text-[18px] leading-7 text-[#babdc2] transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[224px]">
              <h2 className="mb-4 font-[var(--font-inter-tight)] text-[20px] leading-7 font-medium tracking-[-0.2px] text-white">
                Address
              </h2>
              <p className="font-[var(--font-inter-tight)] text-[18px] leading-7 text-[#babdc2]">
                123 Innovation Drive, Tech City, CA 94016, USA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.12)] py-6">
          <div className="flex flex-col gap-3 text-[16px] leading-6 text-[#95989e] sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © 2026 Execora. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-white transition-colors hover:text-[#d6d9de]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white transition-colors hover:text-[#d6d9de]">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
