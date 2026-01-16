import { Link } from "react-router-dom";


const DocumentSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#050814] via-[#0a1b22] to-[#3f8f83] text-white flex flex-col items-center px-6 rounded-b-[3rem] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Have Any Questions?
          </h2>
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="bg-[#0b1020]/70 backdrop-blur-md border border-white/10 rounded-2xl p-10 max-w-md text-center">
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact us via our live chat
            </h4>

            <Link
              to="/wallet"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Shape */}
     
    </section>
  );
};

export default DocumentSection;
