import { useRouteError } from "react-router-dom";

const PageError = () => {
  const error = useRouteError();
  return <h4>{error.message}</h4>;
};
export default PageError;
