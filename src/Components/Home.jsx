function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.95), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90')",
      }}
    >

      <div className="mx-auto w-full max-w-7xl px-6 pt-20">

        <div className="max-w-3xl">

          <p className="mb-5 font-bold uppercase tracking-[4px] text-orange-500">
            Premium Fitness Club • Faridabad
          </p>

          <h1 className="text-5xl font-black leading-none sm:text-7xl lg:text-8xl">

            BUILD

            <span className="block text-orange-500">
              YOUR
            </span>

            STRONGEST SELF.

          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
            Premium equipment, expert trainers and a powerful fitness
            community designed to help you become your strongest self.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#pricing"
              className="rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-orange-600"
            >
              View Membership
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 px-8 py-4 font-bold transition hover:border-orange-500 hover:text-orange-500"
            >
              Book Free Visit
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-black">5K+</h3>
              <p className="text-gray-400">Members</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">20+</h3>
              <p className="text-gray-400">Expert Trainers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">4.9★</h3>
              <p className="text-gray-400">Rating</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;