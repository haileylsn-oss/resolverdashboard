


import { Link } from "react-router-dom";
import img1 from "../../assets/features_img01.png";
import img2 from "../../assets/features_img02.png";
import img3 from "../../assets/features_img03.png";
import img4 from "../../assets/features_img04.png";





const features = [
  {
    title: "Smart",
    desc: "Handles complex errors automatically",
    img: img1,
  },
  {
    title: "Fast",
    desc: "Fix most issues in under 30 seconds",
    img: img2,
  },
  {
    title: "Chain-Agnostic",
    desc: "Works across major blockchains",
    img: img3,
  },
  {
    title: "Secure",
    desc: "We never store your keys or data",
    img: img4,
  },
];

const Features = () => {
  return (
    <section id="feature" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <Link to={'/wallet'}>
            <div
              key={index}
              className="flex items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-28 md:w-32 object-contain"
              />
            </div>
            </Link>
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
