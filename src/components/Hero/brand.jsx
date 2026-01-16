import one from "../../assets/1.svg";
import two from "../../assets/2.png";
import three from "../../assets/3.svg";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/7.png";
import eight from "../../assets/8.svg";
import nine from "../../assets/9.svg";
import ten from "../../assets/10.svg";




const brands = [
  one, two,three,four,five,six,seven,eight, nine, ten
];

const BrandSection = () => {
  return (
    <section className="w-full py-20 overflow-hidden bg-transparent">
      {/* Title */}
      <div className="text-center mb-12">
        <h6 className="text-sm uppercase tracking-widest text-gray-300">
          Our Top Partner
        </h6>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {/* First loop */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px]"
            >
              <img
                src={brand}
                alt="brand"
                className="h-7 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* Duplicate loop for seamless scroll */}
          {brands.map((brand, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center min-w-[180px]"
            >
              <img
                src={brand}
                alt="brand"
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
