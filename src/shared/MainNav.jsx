import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../assets/logo.png'

const MainNav = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Blogs</a></li>
              <li><a>Shops</a></li>
              <li><a>Contact</a></li>
              {user && <li><Link to={'/deshboard'}>Deshboard</Link></li>}
            </ul>
          </div>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/home'}>Home</Link></li>
            <li><a>About</a></li>
            <li><a>Blogs</a></li>
            <li><Link to={'/shop'}>Shops</Link></li>
            <li><a>Contact</a></li>
            {user && <li><Link to={'/deshboard'}>Deshboard</Link></li>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNav;