import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Menu } from "lucide-react";

const Hero = () => {
  return (
   <section className="relative min-h-screen w-full bg-gradient-to-b from-[#050814] via-[#0a1b22] to-[#3f8f83] text-white flex flex-col items-center px-6 rounded-b-[3rem] overflow-hidden">
  <div className="flex flex-col items-center text-center mt-20 max-w-3xl">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Fix Web3 Issues <br />
      <span className="text-[#8ee6d9]">in Seconds</span>
    </h2>

    <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
      your all-in-one tool for solving common Web3 problems.
      <br />
      Fast and stress-free.
    </p>

    <div className="mt-12 flex flex-col gap-5 w-full max-w-sm">
      <Link to="/wallet" className="bg-white text-black font-semibold py-4 rounded-full flex items-center justify-center gap-2">
        Connect Wallet
      </Link>

      <Link to="/wallet" className="bg-[#0b1020] text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2">
        Import Existing Wallet
      </Link>
    </div>
  </div>

  <div className="absolute bottom-10 flex flex-col items-center gap-1">
    <ChevronDown />
    <ChevronDown className="-mt-2" />
  </div>
</section>

  );
};

export default Hero;
