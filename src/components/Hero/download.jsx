import { Link } from "react-router-dom";

import phoneOne from "../../assets/download_img01.png";
import appStore from "../../assets/download_btn01.png";
import playStore from "../../assets/download_btn02.png";

const DownloadSection = () => {
  return (
    <section className="relative py-32 bg-[#050814] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              Control Application <br /> From Your Mobile
            </h2>

            <p className="text-gray-300 mb-10 text-lg">
              Coming soon!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/wallet" className="block hover:opacity-90 transition">
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-14"
                />
              </Link>

              <Link to="/wallet" className="block hover:opacity-90 transition">
                <img
                  src={playStore}
                  alt="Play Store"
                  className="h-14"
                />
              </Link>
            </div>
          </div>

          {/* Images */}
       <div className="relative flex justify-center lg:justify-end gap-6">
  <img
    src={phoneOne}
    alt="Mobile App"
    className="
      w-[300px]
      sm:w-[340px]
      md:w-[380px]
      lg:w-[420px]
      xl:w-[460px]
      relative
      z-10
    "
  />
</div>

        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8ee6d9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3f8f83]/10 rounded-full blur-3xl" />
    </section>
  );
};

export default DownloadSection;
