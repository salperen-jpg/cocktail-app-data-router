import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { API_ENPOINT } from "../constants";
import Cocktails from "../components/Cocktails";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${API_ENPOINT}?s=`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <Cocktails drinks={drinks} />
    </>
  );
};
export default Landing;
