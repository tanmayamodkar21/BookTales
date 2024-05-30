import React from "react";
import { links } from "../data";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-3xl sm:text-5xl h-8 w-auto mr-4 items-center">
                Book<span className="text-orange-900">Tales</span>
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              {links.map((link) => (
                <a
                  className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 capitalize"
                  key={link.id}
                  href={link.href}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.picture}
                  alt={user.name}
                />
                <span className="ml-2">{user.name}</span>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
              >
                Log In / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
