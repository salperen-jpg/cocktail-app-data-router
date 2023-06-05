import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h2 className='logo'>DrinkIt</h2>
        <div className='nav-links'>
          <NavLink to='/'>home</NavLink>
          <NavLink to='/about'>about</NavLink>
          <NavLink to='/newsletter'>newsletter</NavLink>
        </div>
      </div>
    </nav>
  );
};

const Wrapper = styled.nav``;

export default Navbar;
