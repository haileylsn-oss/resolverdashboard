import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#02040c] to-[#050814]">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* Newsletter */}
        <div className="mb-16">
          <h4 className="text-white text-sm font-semibold tracking-widest mb-6 uppercase">
            Subscribe Newsletter
          </h4>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center max-w-md"
          >
            <input
              type="email"
              placeholder="Info@gmail.com"
              className="
                flex-1 px-6 py-4
                bg-[#0b1020]
                text-white
                placeholder:text-gray-400
                rounded-l-xl
                outline-none
              "
            />

            <button
              type="submit"
              className="
                w-16 h-16
                bg-white
                rounded-r-xl
                flex items-center justify-center
                hover:opacity-90
                transition
              "
            >
              <Send className="text-black w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} DAPP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
