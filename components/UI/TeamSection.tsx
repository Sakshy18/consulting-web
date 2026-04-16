import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  roleHighlight?: boolean;
  imagePosition?: string;
};

const members: TeamMember[] = [
  {
    name: "XioFik Hasan",
    role: "Managing Director",
    image: "/images/png/home-team-1.png",
    imagePosition: "object-[52%_20%]",
  },
  {
    name: "Daniel Morgan",
    role: "Senior Business Consultant",
    image: "/images/png/home-team-2.png",
    imagePosition: "object-[46%_25%]",
  },
  {
    name: "Sophia Patel",
    role: "Legal Advisor",
    roleHighlight: true,
    image: "/images/png/home-team-3.png",
    imagePosition: "object-[46%_20%]",
  },
  {
    name: "James Walker",
    role: "Financial Advisory",
    image: "/images/png/home-team-4.png",
    imagePosition: "object-[55%_18%]",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#fafafa] px-5 py-10 sm:px-8 lg:px-20 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="text-center">
          <h2
            className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.2px]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Meet our team
          </h2>
          <p className="mx-auto mt-[5px] max-w-[543px] text-[16px] leading-6 text-[#33373d]">
            Experienced minds. Structured solutions. Sustainable results.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.name}
              className="group relative h-[232px] overflow-hidden rounded-[16px] p-4 lg:h-[400px] lg:rounded-[32px] lg:p-6"
            >
              <Image
                src={member.image}
                alt={`${member.name} portrait`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 302px"
                className={[
                  "object-cover transition-[filter,transform] duration-500 ease-out lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-[1.02]",
                  member.imagePosition ?? "object-center",
                ].join(" ")}
              />

              <div className="absolute inset-0 hidden bg-linear-to-t from-[#232930] from-7% to-transparent to-36% transition-opacity duration-500 lg:block lg:group-hover:opacity-0" />
              <div className="absolute inset-0 bg-linear-to-t from-[#84cc16] from-2% to-transparent to-40% opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 right-4 z-10 lg:bottom-6 lg:left-6 lg:right-6">
                <h3 className="text-[16px] leading-6 font-medium tracking-normal text-white lg:text-[24px] lg:leading-[1.4] lg:tracking-[-0.5px]">
                  {member.name}
                </h3>
                <p
                  className={[
                    "text-[12px] leading-4 transition-colors duration-500 lg:text-[14px] lg:leading-normal",
                    member.roleHighlight ? "text-[#d9f99d]" : "text-[#aaaaaa]",
                    "group-hover:text-[#d9f99d]",
                  ].join(" ")}
                >
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
