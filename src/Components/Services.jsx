function Services() {
  const services = [
    {
      icon: "🏋️",
      title: "Strength Training",
      text: "Premium machines and free weights to help you build strength and muscle.",
    },
    {
      icon: "🥊",
      title: "Boxing",
      text: "High-energy boxing workouts designed to improve speed and endurance.",
    },
    {
      icon: "🔥",
      title: "CrossFit",
      text: "Functional training sessions that challenge your complete body.",
    },
    {
      icon: "🧑‍🏫",
      title: "Personal Training",
      text: "One-on-one coaching with workouts designed around your goals.",
    },
    {
      icon: "❤️",
      title: "Cardio Zone",
      text: "Premium cardio equipment for improving stamina and endurance.",
    },
    {
      icon: "🥗",
      title: "Diet Guidance",
      text: "Practical nutrition guidance to support your fitness journey.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="font-bold uppercase tracking-[3px] text-orange-500">
            What We Offer
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">

            EVERYTHING YOU NEED

            <span className="block text-orange-500">
              TO GET STRONGER.
            </span>

          </h2>

        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/60"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-7 text-2xl font-bold transition group-hover:text-orange-500">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {service.text}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-block font-bold text-orange-500"
              >
                Get Started →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;