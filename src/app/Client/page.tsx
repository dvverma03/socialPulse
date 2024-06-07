import SectionTitle, { SectionTitleClient } from "@/components/Common/SectionTitle";
import { SingleFeatureEven, SingleFeatureOdd } from "./SingleFeature";
import featuresData from "./featureData";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  subsets: ['latin'],
});

const Features = () => {
  return (
    <div className={poppins.className}>
      <section id="features" className="relative pt-24 md:pt-24 lg:pt-28">
        <div className="container relative z-10">
          <SectionTitleClient
            title="Our Clients"
            paragraph="With a dedication to understanding their unique needs, we forge deep partnerships that transcend mere service provision. Each client represents a story of ambition, innovation, and aspiration, driving us to deliver tailored solutions and exceed expectations. Through unwavering commitment and personalized attention, we foster an environment where their success becomes our shared achievement."
            center
          />

          
        </div>
        <div className="mt-6">

        <Image
          src="/images/clients.svg"
          alt="Background SVG"
          className="w-screen"
          width={800}
          height={600}
          style={{ zIndex: -1 }}
        />
        </div>
          
        <div className="relative aspect-[77/40] items-center justify-center">
                <video src="/images/video/client.mp4" autoPlay muted loop/>
              </div>

        {/* Add the SVG background image */}
        <Image
          src="/images/hero/shape-01.svg"
          alt="Background SVG"
          width={400} // specify the width of the SVG
          height={400} // specify the height of the SVG
          className="absolute right-0 top-0"
          style={{ zIndex: -1 }}
        />
      </section>
    </div>
  );
};

export default Features;
