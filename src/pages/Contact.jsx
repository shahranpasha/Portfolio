import React from "react";

const Contact = () => {

  return (

    <section
      id="contact"
      className="
      relative

      pt-24
      pb-10

      px-4 md:px-10

      bg-[#f5f5f7]
      dark:bg-[#050816]

      overflow-hidden

      transition-all duration-500
      "
    >

      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-size:40px_40px]

        [background-image:
        linear-gradient(to_right,#000000_1px,transparent_1px),
        linear-gradient(to_bottom,#000000_1px,transparent_1px)]
        dark:[background-image:
        linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      {/* BLUR */}
      <div
        className="
        absolute

        top-20
        left-1/2

        -translate-x-1/2

        w-[400px]
        h-[400px]

        bg-blue-500/10

        blur-[120px]

        rounded-full
        "
      />

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto

        grid grid-cols-1
        lg:grid-cols-2

        gap-12
        items-start
        "
      >

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-28">

          <p
            className="
            text-blue-500

            uppercase
            tracking-[4px]

            text-xs md:text-sm
            font-semibold
            "
          >
            Contact
          </p>

          <h2
            className="
            mt-4

            text-4xl md:text-6xl
            font-black

            leading-tight

            text-zinc-900
            dark:text-white
            "
          >
            Let’s Build
            Something Amazing
          </h2>

          <p
            className="
            mt-6

            max-w-xl

            text-sm md:text-base
            leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
          >
            Have a project idea, business website or
            full stack application in mind?
            Let’s connect and create something modern,
            fast and premium.
          </p>

          {/* CONTACT BOXES */}
          <div className="mt-10 space-y-4">

            {/* EMAIL */}
            <div
              className="
              flex items-center
              gap-4

              p-4

              rounded-[24px]

              border border-black/10
              dark:border-blue-500/20

              bg-white/80
              dark:bg-[#0d1224]/90

              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              dark:shadow-[0_10px_40px_rgba(59,130,246,0.08)]
              "
            >

              <div
                className="
                w-12 h-12

                rounded-2xl

                bg-blue-500/10

                border border-blue-500/20

                flex items-center justify-center

                text-xl
                "
              >
                📩
              </div>

              <div>

                <p
                  className="
                  text-[11px]

                  uppercase
                  tracking-[2px]

                  text-zinc-500
                  "
                >
                  Email
                </p>

                <h3
                  className="
                  mt-1

                  text-sm md:text-base
                  font-semibold

                  text-zinc-900
                  dark:text-white
                  "
                >
                  shahranpasha899@gmail.com
                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <div
              className="
              flex items-center
              gap-4

              p-4

              rounded-[24px]

              border border-black/10
              dark:border-blue-500/20

              bg-white/80
              dark:bg-[#0d1224]/90

              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              dark:shadow-[0_10px_40px_rgba(59,130,246,0.08)]
              "
            >

              <div
                className="
                w-12 h-12

                rounded-2xl

                bg-blue-500/10

                border border-blue-500/20

                flex items-center justify-center

                text-xl
                "
              >
                📍
              </div>

              <div>

                <p
                  className="
                  text-[11px]

                  uppercase
                  tracking-[2px]

                  text-zinc-500
                  "
                >
                  Location
                </p>

                <h3
                  className="
                  mt-1

                  text-sm md:text-base
                  font-semibold

                  text-zinc-900
                  dark:text-white
                  "
                >
                  Delhi, India
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="
          relative z-20

          rounded-[35px]

          border border-black/10
          dark:border-blue-500/20

          bg-white/80
          dark:bg-[#0d1224]/90

          backdrop-blur-xl

          p-5 md:p-8

          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          dark:shadow-[0_20px_80px_rgba(59,130,246,0.08)]
          "
        >

          <h3
            className="
            text-2xl md:text-3xl
            font-bold

            text-zinc-900
            dark:text-white
            "
          >
            Leave a message
          </h3>

          {/* FORM */}
          <form
  action="https://getform.io/f/ayvvkrgb"
  method="POST"

  onSubmit={(e) => {

    setTimeout(() => {
      e.target.reset();
    }, 500);

  }}

  className="mt-8 space-y-4"
>

            {/* ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                required
                placeholder="Mohd Shahran Turki"
                className="
                w-full

                h-14
                px-5

                rounded-2xl

                border border-black/10
                dark:border-blue-500/20

                bg-white
                dark:bg-white/[0.03]

                text-black
                dark:text-white

                text-sm
                placeholder:text-sm

                placeholder:text-zinc-400
                dark:placeholder:text-zinc-500

                outline-none

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                transition-all duration-300

                relative
                z-10
                "
              />

              <input
                type="email"
                name="email"
                required
                placeholder="shahranpasha899@gmail.com"
                className="
                w-full

                h-14
                px-5

                rounded-2xl

                border border-black/10
                dark:border-blue-500/20

                bg-white
                dark:bg-white/[0.03]

                text-black
                dark:text-white

                text-sm
                placeholder:text-sm

                placeholder:text-zinc-400
                dark:placeholder:text-zinc-500

                outline-none

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                transition-all duration-300

                relative
                z-10
                "
              />

            </div>

            {/* ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="phone"
                placeholder="+91 XXXXX XX089"
                className="
                w-full

                h-14
                px-5

                rounded-2xl

                border border-black/10
                dark:border-blue-500/20

                bg-white
                dark:bg-white/[0.03]

                text-black
                dark:text-white

                text-sm
                placeholder:text-sm

                placeholder:text-zinc-400
                dark:placeholder:text-zinc-500

                outline-none

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                transition-all duration-300

                relative
                z-10
                "
              />

              <input
                type="text"
                name="subject"
                placeholder="I want to contact for..."
                className="
                w-full

                h-14
                px-5

                rounded-2xl

                border border-black/10
                dark:border-blue-500/20

                bg-white
                dark:bg-white/[0.03]

                text-black
                dark:text-white

                text-sm
                placeholder:text-sm

                placeholder:text-zinc-400
                dark:placeholder:text-zinc-500

                outline-none

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                transition-all duration-300

                relative
                z-10
                "
              />

            </div>

            {/* TEXTAREA */}
            <textarea
              rows="6"
              name="message"
              required
              placeholder="Your message here..."
              className="
              w-full

              p-5

              rounded-[24px]

              border border-black/10
              dark:border-blue-500/20

              bg-white
              dark:bg-white/[0.03]

              text-black
              dark:text-white

              text-sm
              placeholder:text-sm

              placeholder:text-zinc-400
              dark:placeholder:text-zinc-500

              outline-none

              resize-none

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20

              transition-all duration-300

              relative
              z-10
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
              w-full

              py-4

              rounded-2xl

              bg-gradient-to-r
              from-blue-500
              to-cyan-500

              hover:from-blue-600
              hover:to-cyan-600

              text-white
              text-sm md:text-base
              font-semibold

              shadow-[0_10px_40px_rgba(59,130,246,0.35)]

              transition-all duration-300
              "
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>

  );

};

export default Contact;