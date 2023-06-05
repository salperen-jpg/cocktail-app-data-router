import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <section className='error-page'>
        <h2>can not find the page you look for</h2>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    );
  }
  return <div>Error</div>;
};
export default Error;
