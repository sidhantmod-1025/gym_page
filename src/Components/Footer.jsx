function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        <div>

          <h2 className="text-2xl font-black">
            IRON<span className="text-orange-500">CORE</span>
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-500">
            Premium fitness destination in Faridabad built for people
            who refuse to settle for average.
          </p>

        </div>

        <div>

          <h3 className="font-bold">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3">

            <a href="#home" className="text-gray-500 hover:text-orange-500">
              Home
            </a>

            <a href="#about" className="text-gray-500 hover:text-orange-500">
              About
            </a>

            <a href="#services" className="text-gray-500 hover:text-orange-500">
              Services
            </a>

            <a href="#pricing" className="text-gray-500 hover:text-orange-500">
              Pricing
            </a>

            <a href="#contact" className="text-gray-500 hover:text-orange-500">
              Contact
            </a>

          </div>

        </div>

        <div>

          <h3 className="font-bold">
            Contact
          </h3>

          <p className="mt-4 text-gray-500">
            📍 Sector 15, Faridabad
          </p>

          <p className="mt-3 text-gray-500">
            📞 +91 98765 43210
          </p>

          <p className="mt-3 text-gray-500">
            ✉️ hello@ironcorefitness.in
          </p>

        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-600">
        © 2026 Ironcore Fitness. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;