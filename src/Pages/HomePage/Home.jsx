import Bonus from "./HomePageSection/Bonus/Bonus";
import Banner from "./HomePageSection/banner/banner";
import FeaturesSec from "./HomePageSection/FeaturesSection/FeaturesSec";
import WorkersSec from "./HomePageSection/WorkerSec/WorkersSec";
import PricesingSec from "./HomePageSection/PricesingSec/PricesingSec";
import TestimonialSec from "./HomePageSection/TestimonialSec/TestimonialSec";




const Home = () => {
  return (
    <>
      <Banner />
      <Bonus />
      <FeaturesSec/>
      <WorkersSec/>
      <PricesingSec/>
      <TestimonialSec/>
    </>
  );
};

export default Home;
