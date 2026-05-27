import {
  Check,
  Crown,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

import Contact from "./Contact";

const plans = [
  {
    icon: <Zap size={30} />,
    name: "Basic",
    price: "₹1,400",
    pages: "1 - 2 Pages",
    desc: "Perfect for small updates, landing pages, and quick business websites.",
    features: [
      "Responsive Design",
      "Modern Landing Page",
      "Mobile Friendly Layout",
      "Basic Animations",
      "WhatsApp Integration",
    ],
    button: "Get Started",
    popular: true,
  },

  {
    icon: <Sparkles size={30} />,
    name: "Starter",
    price: "₹3,500",
    pages: "1 - 5 Pages",
    desc: "Perfect for personal brands and startups.",
    features: [
      "Responsive Design",
      "Contact Form Integration",
      "Basic SEO Optimization",
      "Fast Performance",
    ],
    button: "Get Started",
    popular: false,
  },

  {
    icon: <Rocket size={30} />,
    name: "Professional",
    price: "₹9,999",
    pages: "5 - 9 Pages",
    desc: "Best for businesses and growing brands.",
    features: [
      "Modern UI/UX Design",
      "Admin Dashboard",
      "API Integrations",
      "Authentication System",
      "Priority Support",
    ],
    button: "Get Started",
    popular: true,
  },

  {
    icon: <Crown size={30} />,
    name: "Enterprise",
    price: "Custom",
    pages: "10+ Pages",
    desc: "Advanced scalable solutions for large projects.",
    features: [
      "Full Stack Web Application",
      "Database Integration",
      "Custom Features",
      "Advanced Authentication",
      "High Performance Optimization",
      "Maintenance & Support",
    ],
    button: "Get Started",
    popular: false,
  },
];

const Pricing = () => {

  /* SCROLL TO CONTACT */
  const scrollToContact = () => {

    const section = document.getElementById("contact");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <section
      className="
      relative

      min-h-screen

      pt-28
      pb-20

      px-4 md:px-10

      overflow-hidden

      bg-[#f5f5f7]
      dark:bg-[#070b1a]
      "
    >

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-size:40px_40px]

        [background-image:
        linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      {/* BLUR */}
      <div
        className="
        absolute

        top-32
        left-1/2

        -translate-x-1/2

        w-[500px]
        h-[500px]

        bg-cyan-500/10

        blur-[120px]

        rounded-full
        "
      />

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto
        "
      >

        {/* HEADING */}
        <div className="text-center">

          <p
            className="
            text-cyan-500

            uppercase
            tracking-[5px]

            text-sm
            font-semibold
            "
          >
            Pricing
          </p>

          <h2
            className="
            mt-5

            text-4xl md:text-6xl
            font-black

            text-zinc-900
            dark:text-white
            "
          >
            Simple Pricing Plans
          </h2>

          <p
            className="
            mt-6

            max-w-2xl
            mx-auto

            text-base md:text-lg

            text-zinc-600
            dark:text-zinc-400
            "
          >
            Flexible pricing for startups,
            businesses and premium full stack projects.
          </p>

        </div>

        {/* CARDS */}
        <div
          className="
          mt-20

          grid grid-cols-1
          lg:grid-cols-3

          gap-8
          "
        >

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`
              relative

              rounded-[35px]

              border

              backdrop-blur-xl

              p-8

              overflow-hidden

              transition-all duration-500

              hover:-translate-y-3

              ${
                plan.popular
                  ? `
                  border-cyan-500/40

                  bg-gradient-to-b
                  from-cyan-500/10
                  to-blue-500/5

                  scale-[1.03]

                  shadow-[0_20px_80px_rgba(6,182,212,0.18)]
                  `
                  : `
                  border-black/10
                  dark:border-white/10

                  bg-white/80
                  dark:bg-white/[0.03]
                  `
              }
              `}
            >

              {/* POPULAR */}
              {plan.popular && (

                <div
                  className="
                  absolute

                  top-5
                  right-5

                  px-4 py-2

                  rounded-full

                  bg-cyan-500

                  text-white
                  text-xs
                  font-bold

                  uppercase
                  tracking-[2px]
                  "
                >
                  Popular
                </div>

              )}

              {/* ICON */}
              <div
                className={`
                w-16 h-16

                rounded-3xl

                flex items-center justify-center

                ${
                  plan.popular
                    ? `
                    bg-cyan-500
                    text-white
                    `
                    : `
                    bg-black/[0.05]
                    dark:bg-white/[0.05]

                    text-cyan-500
                    `
                }
                `}
              >
                {plan.icon}
              </div>

              {/* NAME */}
              <h3
                className="
                mt-8

                text-2xl
                font-bold

                text-zinc-900
                dark:text-white
                "
              >
                {plan.name}
              </h3>

              {/* DESC */}
              <p
                className="
                mt-3

                text-sm
                leading-relaxed

                text-zinc-600
                dark:text-zinc-400
                "
              >
                {plan.desc}
              </p>

              {/* PRICE */}
              <div className="mt-8">

                <h2
                  className="
                  text-4xl md:text-5xl
                  font-black

                  text-zinc-900
                  dark:text-white
                  "
                >
                  {plan.price}
                </h2>

                <p
                  className="
                  mt-2

                  text-sm

                  text-zinc-500
                  "
                >
                  One Time Payment
                </p>

                {/* PAGES */}
                <div
                  className="
                  mt-4

                  inline-flex
                  items-center

                  px-4 py-2

                  rounded-full

                  bg-cyan-500/10

                  border border-cyan-500/20

                  text-cyan-500
                  text-sm
                  font-medium
                  "
                >
                  {plan.pages}
                </div>

              </div>

              {/* LINE */}
              <div
                className="
                my-8

                h-[1px]
                w-full

                bg-black/10
                dark:bg-white/10
                "
              />

              {/* FEATURES */}
              <div className="space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="
                    flex items-start
                    gap-3
                    "
                  >

                    <div
                      className="
                      mt-[2px]

                      text-cyan-500
                      "
                    >
                      <Check size={18} />
                    </div>

                    <p
                      className="
                      text-sm

                      text-zinc-700
                      dark:text-zinc-300
                      "
                    >
                      {feature}
                    </p>

                  </div>

                ))}

              </div>

              {/* BUTTON */}
              <button
                onClick={scrollToContact}
                className={`
                mt-10

                w-full

                py-4

                rounded-2xl

                text-sm
                font-semibold

                transition-all duration-300

                ${
                  plan.popular
                    ? `
                    bg-cyan-500
                    hover:bg-cyan-600

                    text-white

                    shadow-[0_10px_40px_rgba(6,182,212,0.35)]
                    `
                    : `
                    border border-black/10
                    dark:border-white/10

                    hover:border-cyan-500

                    text-zinc-900
                    dark:text-white
                    `
                }
                `}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>

      <Contact />

    </section>

  );

};

export default Pricing;