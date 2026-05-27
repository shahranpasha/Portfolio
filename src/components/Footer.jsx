import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      relative

      overflow-hidden

      pt-10
      pb-8

      bg-[#f5f5f7]
      dark:bg-[#070b1a]

      border-t border-black/10
      dark:border-white/10
      "
    >
      {/* BIG BACKGROUND TEXT */}
      <h1
        className="
        absolute

        top-6
        left-1/2

        -translate-x-1/2

        text-[90px]
        md:text-[150px]

        font-black
        tracking-[-6px]

        text-transparent

        opacity-[0.05]

        select-none
        pointer-events-none

        stroke-text
        "
      >
        shahran.dev
      </h1>

      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        opacity-[0.03]

        [background-size:35px_35px]

        [background-image:
        linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      {/* CONTENT */}
      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6 md:px-10
        "
      >
        {/* LOGO */}
        <div className="mt-14 flex justify-center">
          <div
            className="
            flex items-center
            gap-3
            "
          >
            {/* ICON */}
            <div
              className="
              flex items-end
              gap-[3px]
              "
            >
              <span
                className="
                w-2 h-4

                rounded-full

                bg-blue-500
                "
              />

              <span
                className="
                w-2 h-6

                rounded-full

                bg-blue-500
                "
              />

              <span
                className="
                w-2 h-8

                rounded-full

                bg-blue-500
                "
              />

              <span
                className="
                w-2 h-5

                rounded-full

                bg-blue-500
                "
              />
            </div>

            {/* TEXT */}
            <h2
              className="
              text-2xl
              font-semibold

              text-zinc-900
              dark:text-white
              "
            >
              Shahran Pasha
            </h2>
          </div>
        </div>

        {/* NAV LINKS */}
        <div
          className="
          mt-6

          flex flex-wrap
          items-center
          justify-center

          gap-5

          text-sm

          text-zinc-700
          dark:text-zinc-300
          "
        >
          <a
            href="/"
            className="
            hover:text-blue-500

            transition-all duration-300
            "
          >
            Home
          </a>

          <a
            href="/services"
            className="
            hover:text-blue-500

            transition-all duration-300
            "
          >
            Services
          </a>

          <a
            href="/portfolio"
            className="
            hover:text-blue-500

            transition-all duration-300
            "
          >
            Portfolio
          </a>

          <a
            href="/pricing"
            className="
            hover:text-blue-500

            transition-all duration-300
            "
          >
            Pricing
          </a>

          <a
            href="#contact"
            className="
            hover:text-blue-500

            transition-all duration-300
            "
          >
            Contact
          </a>
        </div>

        {/* SOCIALS */}
        <div
          className="
          mt-6

          flex items-center
          justify-center

          gap-4
          "
        >
          {/* GITHUB */}
          <a
            href="#"
            className="
            w-10 h-10

            rounded-xl

            border border-white/10

            flex items-center justify-center

            text-base

            bg-white/[0.03]

            hover:bg-[#171515]
            hover:text-white

            transition-all duration-300
            "
          >
            <FaGithub />
          </a>

          {/* LINKEDIN */}
          <a
            href="#"
            className="
            w-10 h-10

            rounded-xl

            border border-white/10

            flex items-center justify-center

            text-base

            bg-white/[0.03]

            hover:bg-[#0A66C2]
            hover:text-white

            transition-all duration-300
            "
          >
            <FaLinkedin />
          </a>

          {/* INSTAGRAM */}
          <a
            href="#"
            className="
            w-10 h-10

            rounded-xl

            border border-white/10

            flex items-center justify-center

            text-base

            bg-white/[0.03]

            hover:bg-gradient-to-r
            hover:from-pink-500
            hover:to-orange-400

            hover:text-white

            transition-all duration-300
            "
          >
            <FaInstagram />
          </a>

          {/* FACEBOOK */}
          <a
            href="#"
            className="
            w-10 h-10

            rounded-xl

            border border-white/10

            flex items-center justify-center

            text-base

            bg-white/[0.03]

            hover:bg-[#1877F2]
            hover:text-white

            transition-all duration-300
            "
          >
            <FaFacebookF />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-7 text-center">
          <p
            className="
            text-xs

            text-zinc-600
            dark:text-zinc-400
            "
          >
            © 2023 All Rights Reserved by{" "}
            <span className="text-blue-500">Shahran.dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
