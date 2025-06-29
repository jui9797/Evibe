import Banner from "./Banner";
import Events from "./Events";
import Partners from "./Partners";
import Review from "./Review";
import Service from "./Service";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <Service></Service>
      <Partners></Partners>
      <Events></Events>
      <Review></Review>
    </div>
  );
};

export default Home;
