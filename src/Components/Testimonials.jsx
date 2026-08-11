function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Amazing equipment and a very motivating environment. The trainers are genuinely helpful.",
    },
    {
      name: "Aman Verma",
      text: "One of the best fitness environments in Faridabad. The staff is professional.",
    },
    {
      name: "Priya Singh",
      text: "Clean gym, premium equipment and great trainers. I really enjoy training here.",
    },
    {
      name: "Karan Mehta",
      text: "The atmosphere keeps me motivated. I have seen a big improvement in my fitness.",
    },
    {
      name: "Neha Kapoor",
      text: "The personal training sessions are excellent and the staff is very supportive.",
    },
    {
      name: "Arjun Malik",
      text: "Great equipment, great trainers and a serious fitness community.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-bold uppercase tracking-[3px] text-orange-500">
            Member Stories
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            REAL PEOPLE.
            <span className="block text-orange-500">
              REAL STORIES.
            </span>
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[.03] p-7 transition hover:-translate-y-1 hover:border-orange-500/50"
            >

              <div className="text-orange-500">
                ★★★★★
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                "{item.text}"
              </p>

              <div className="mt-7 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Ironcore Member
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;