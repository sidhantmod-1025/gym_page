function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: [
        "Gym Access",
        "Cardio Zone",
        "Locker Facility",
      ],
    },
    {
      name: "Premium",
      price: "₹1,799",
      popular: true,
      features: [
        "24/7 Gym Access",
        "Personal Trainer",
        "Cardio + Strength",
        "Locker Facility",
      ],
    },
    {
      name: "Elite",
      price: "₹2,999",
      features: [
        "Everything in Premium",
        "Diet Guidance",
        "Personalized Workout",
        "Priority Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[#0d0d0d] px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-bold uppercase tracking-[3px] text-orange-500">
            Membership
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            CHOOSE YOUR
            <span className="text-orange-500"> PLAN.</span>
          </h2>

        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/[.03]"
              }`}
            >

              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-4 py-1 text-xs font-black">
                  POPULAR
                </span>
              )}

              <h3 className="text-2xl font-black">
                {plan.name}
              </h3>

              <div className="mt-6">
                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span className="text-gray-500">
                  {" "}
                  / month
                </span>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">

                {plan.features.map((feature) => (
                  <p
                    key={feature}
                    className="text-gray-300"
                  >
                    <span className="mr-3 text-orange-500">
                      ✓
                    </span>

                    {feature}
                  </p>
                ))}

              </div>

              <a
                href="#contact"
                className={`mt-8 block rounded-full py-4 text-center font-bold ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border border-white/20 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                Choose Plan
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;