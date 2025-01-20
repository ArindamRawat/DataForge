import illustration from "../assets/images/illustration-intro.png";
import MotionComponent from "../components/MotionComponent";
import {
  textVariants,
  staggerContainer,
  fadeInVariants,
} from "../utils/motion";

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-9 px-8 pt-[4.6875rem] pb-[9.9375rem]">
      <MotionComponent
        as="img"
        src={illustration}
        alt="DataForge illustration"
        width={720}
        height={534}
        variants={fadeInVariants("up", 0.5, 0.8)}
      ></MotionComponent>

      <MotionComponent
        as="div"
        variants={staggerContainer}
        className="flex flex-col items-center gap-8 text-center"
      >
        <MotionComponent
          as="h1"
          variants={textVariants}
          className="max-w-[35ch] font-raleway text-clamp-24-40 font-bold"
        >
          Unlock the Power of NFT Analytics with DataForge
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="max-w-[54ch] text-clamp-14-20 leading-[1.875rem]"
        >
          DataForge is a comprehensive tool for generating detailed NFT collection analytics using the BitsCrunch API. Simply specify the number of collections you want to analyze, and get an Excel file with insights on sales, volume, floor price, and more. Ideal for developers, researchers, and analysts, DataForge streamlines access to valuable NFT data for better decision-making and visualization.
        </MotionComponent>
        <MotionComponent
          as="p"
          variants={textVariants}
          className="max-w-[54ch] text-clamp-14-20 leading-[1.875rem] text-red-600 mt-4"
        >
          Note: If you want to get data for more than 1000 rows, a payment of 50 BCUT is required.
        </MotionComponent>
        <MotionComponent
          as="a"
          variants={textVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="p-default bg-gradient block rounded-full text-base font-bold leading-[1.1875rem] hover:bg-cyan"
        >
          Get Started
        </MotionComponent>
      </MotionComponent>
    </div>
  );
};

export default HeroSection;
