import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <div className='section-center'>
        {navigation.state === "loading" ? (
          <div className='loading'>loading</div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};
export default Home;
