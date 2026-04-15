import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/services", hasChevron: true },
  { label: "Case Studies", href: "#" },
  { label: "Articles", href: "#" },
];

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eaecf0]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 pb-3 pt-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Execora homepage"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/images/svg/execora-logo-mark.svg"
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            priority
          />
          <span className="font-[var(--font-inter-tight)] text-[24px] leading-8 font-semibold text-[#1f1f1f]">
            Execora
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-1.5 rounded-md px-4 py-2 text-[16px] leading-6 font-medium text-[#484b52] transition-colors hover:text-[#070a0f]"
            >
              <span>{item.label}</span>
              {item.hasChevron ? (
                <Image
                  src="/images/svg/icon-chevron-down.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-[#e8eaed] px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f] transition-colors hover:bg-[#f6f7f8]"
          >
            Contact Us
          </Link>
          <Link
            href="tel:+1234567890"
            aria-label="Call Execora"
            className="rounded-full border border-[#e8eaed] p-3.5 transition-colors hover:bg-[#f6f7f8]"
          >
            <Image
              src="/images/svg/icon-call.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#eef0f3] bg-white md:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-4 rounded-full bg-[#5b616a]" />
            <span className="ml-1 block h-0.5 w-3 rounded-full bg-[#5b616a]" />
          </span>
        </button>
      </div>
    </header>
  );
}
