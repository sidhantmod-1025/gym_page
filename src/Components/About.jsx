function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#0d0d0d] px-6 py-24"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        <div>

          <p className="font-bold uppercase tracking-[3px] text-orange-500">
            About Ironcore
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">

            MORE THAN

            <span className="block text-orange-500">
              JUST A GYM.
            </span>

          </h2>

          <p className="mt-7 leading-8 text-gray-400">
            IRONCORE FITNESS is a premium fitness destination in Faridabad
            built for people who are serious about their health, strength
            and performance.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            Whether you are just starting your fitness journey or already
            experienced, our equipment, trainers and environment are designed
            to help you keep progressing.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h3 className="text-3xl font-black text-orange-500">
                10+
              </h3>

              <p className="mt-2 text-gray-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h3 className="text-3xl font-black text-orange-500">
                5K+
              </h3>

              <p className="mt-2 text-gray-500">
                Happy Members
              </p>
            </div>

          </div>

        </div>

        <div
          className="h-[500px] rounded-3xl bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90')",
          }}
        />

      </div>

    </section>
  );
}

export default About;