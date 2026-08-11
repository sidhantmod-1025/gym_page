function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#0d0d0d] px-6 py-24"
    >

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

        <div>

          <p className="font-bold uppercase tracking-[3px] text-orange-500">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">

            START YOUR

            <span className="block text-orange-500">
              FITNESS JOURNEY.
            </span>

          </h2>

          <p className="mt-7 max-w-xl leading-8 text-gray-400">
            Want to visit Ironcore or know more about our memberships?
            Send us a message and our team will contact you.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <p className="text-xs font-bold text-orange-500">
                LOCATION
              </p>

              <p className="mt-2 text-gray-300">
                📍 Sector 15, Faridabad, Haryana
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-orange-500">
                PHONE
              </p>

              <p className="mt-2 text-gray-300">
                📞 +91 98765 43210
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-orange-500">
                EMAIL
              </p>

              <p className="mt-2 text-gray-300">
                ✉️ hello@ironcorefitness.in
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-orange-500">
                OPENING HOURS
              </p>

              <p className="mt-2 text-gray-300">
                🕐 Monday - Sunday • 5 AM - 11 PM
              </p>
            </div>

          </div>

        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-white/10 bg-white/[.03] p-7"
        >

          <h3 className="text-2xl font-black">
            BOOK A FREE VISIT
          </h3>

          <div className="mt-7 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-500"
            />

            <select
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-gray-400 outline-none focus:border-orange-500"
              defaultValue=""
            >
              <option value="" disabled>
                Interested In
              </option>

              <option>Basic Membership</option>
              <option>Premium Membership</option>
              <option>Elite Membership</option>
              <option>Personal Training</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-4 font-black transition hover:bg-orange-600"
            >
              SEND MESSAGE →
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Contact;