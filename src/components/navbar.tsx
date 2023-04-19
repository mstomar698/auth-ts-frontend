import { useContext, useState } from 'react';
import { Store } from '../store';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [userMenu, setUserMenu] = useState(false);
  const [adminMenu, setAdminMenu] = useState(false);
  const { userInfo } = state;
  const handleUserMenuClick = () => {
    setUserMenu((prevState) => !prevState);
    setAdminMenu(false);
  };
  const handleAdminMenuClick = () => {
    setAdminMenu((prevState) => !prevState);
    setUserMenu(false);
  };
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/signin';
    handleUserMenuClick();
  };
  return (
    <div className="">
      <header className="bg-gray-300">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-black font-bold text-lg">
              mstomar698
            </Link>
          </div>
          <div>
            <nav className="flex items-center justify-end">
              {userInfo ? (
                <div className="relative mx-1">
                  <button
                    className="text-black focus:outline-none border rounded-lg p-1 shadow-lg bg-gray-500 px-2 flex flex-row"
                    onClick={handleUserMenuClick}
                  >
                    <span className="mr-2">{userInfo.name}</span>
                    <FaChevronDown className="mt-1" />
                  </button>
                  {userMenu && (
                    <>
                      <div className="absolute right-0 mt-2 w-48 bg-green-400 rounded-md shadow-lg z-10">
                        <ul className="py-1">
                          <li>
                            <Link
                              to="/profile"
                              onClick={handleUserMenuClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-red-500"
                            >
                              User Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={signoutHandler}
                              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-red-500"
                            >
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link to="/signin" className="text-black hover:underline">
                  <button className="text-black focus:outline-none border rounded-lg p-1 shadow-lg bg-gray-500 px-2 flex flex-row">
                    <FaSignInAlt className="mt-1" />
                    <span className="ml-2">Sign In</span>
                  </button>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="relative mx-1">
                  <button
                    className="text-black focus:outline-none border rounded-lg p-1 shadow-lg bg-gray-500 px-2 flex flex-row"
                    onClick={handleAdminMenuClick}
                  >
                    <span className="mr-2">Admin</span>
                    <FaChevronDown className="mt-1" />
                  </button>
                  {adminMenu && (
                    <>
                      <div className="absolute right-0 mt-2 w-48 bg-green-500 rounded-md shadow-lg z-10">
                        <ul className="py-1">
                          <li>
                            <Link
                              to="/admin/dashboard"
                              onClick={handleAdminMenuClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-red-500"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/users"
                              onClick={handleAdminMenuClick}
                              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-red-500"
                            >
                              Users
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </nav>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
