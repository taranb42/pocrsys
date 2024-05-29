import Link from 'next/link';
import { Button } from "@mui/material";
import { clearCookies, getToken } from '../utils/utils';
import { useRouter } from 'next/router';

const Header = () => {

const router = useRouter()

  const logoutuser = () => {
   clearCookies();
   router.push("/")
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            R systems Corp
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-4">
            {getToken() && <NavLink to="/">Home</NavLink>}
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/news">News</NavLink>
            {/* <NavLink to="/history">History</NavLink> */}
            <a
              href="https://www.rsystems.com/retail-education-hospitality/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
            <NavLink to="/Projects">Projects </NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            {getToken() ? (
              <Button
                onClick={logoutuser}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// NavLink component for better consistency and easier styling
const NavLink = ({ to, children }: { to: string; children: any }) => (
  <Link
    href={to}
    className="text-gray-600 hover:text-gray-800 transition duration-300"
  >
    {children}
  </Link>
);

export default Header;
