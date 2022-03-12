import Hero from "./components/Hero/Hero";
import ListForm from "./components/ListForm/ListForm";
import Lists from './components/Lists/Lists';

const Home = () => {
  return(
    <div>
      <Hero />
      <Lists />
      <ListForm />
    </div>
  );
};

export default Home;