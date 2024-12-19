import { Link } from "react-router-dom";
import { useState } from "react";

const TopMenu = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#ffffff] px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="font-bold text-lg">
        <img
          src="https://as2.ftcdn.net/v2/jpg/09/95/46/37/1000_F_995463700_GkpZNpBC9UKjoeCKLfTHOhuoLRbKGGj8.jpghttps://t4.ftcdn.net/jpg/08/12/86/57/240_F_812865737_oy8Gbm41vS78qnvEMiyrJ1ShmzTz3b7a.jpg"
          alt="logo"
          width="45px"
        />
      </div>

      {/* Navigation Menu */}
      <ul className="flex gap-6 text-gray-800 font-semibold text-center mt-3">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/patient-register">Patient Register</Link>
        </li>
        <li className="relative group">
          <div className="flex cursor-pointer">
            <span className="">Patient Data </span>
            <span className="ml-2 pt-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                <path
                  id="Path_88"
                  data-name="Path 88"
                  d="M308.849,353.209l3.858,3.858,3.858-3.858"
                  transform="translate(-308.495 -352.855)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1"
                />
              </svg>
            </span>
          </div>

          <div className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-md">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              View Data
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              Upload Data
            </Link>
          </div>
        </li>

        {/* Dropdown for Operation Theater */}
        <li className="relative group">

          <div className="flex cursor-pointer">
            <span className="">Operation Theater</span>
            <span className="ml-2 pt-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                <path
                  id="Path_88"
                  data-name="Path 88"
                  d="M308.849,353.209l3.858,3.858,3.858-3.858"
                  transform="translate(-308.495 -352.855)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1"
                />
              </svg>
            </span>
          </div>
          <div className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-md">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              Schedule
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              View Reports
            </Link>
          </div>
        </li>

        <li>
          <Link to="/">Reports</Link>
        </li>
      </ul>

      {/* Icons and Profile Section */}
      <div className="flex items-center gap-7 relative">
        {/* Help Icon */}
        <button title="Help">
          {/* <span className="text-xl text-gray-700">❓</span> */}
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6a3.939 3.939 0 00-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 00-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0012 6zm-1 10h2v2h-2z" />
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button title="Notifications">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M19 17v-5.2c-.5.1-1 .2-1.5.2H17v6H7v-7c0-2.8 2.2-5 5-5 .1-1.3.7-2.4 1.5-3.3-.3-.4-.9-.7-1.5-.7-1.1 0-2 .9-2 2v.3C7 5.2 5 7.9 5 11v6l-2 2v1h18v-1l-2-2m-9 4c0 1.1.9 2 2 2s2-.9 2-2h-4M21 6.5c0 1.9-1.6 3.5-3.5 3.5S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5" />
            </svg>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
  <div
    className="flex items-center cursor-pointer"
    onClick={() => setShowProfileMenu(!showProfileMenu)}
  >
    {/* Avatar */}
    <div className="w-8 h-8 rounded-lg bg-[#AEB982] flex items-center justify-center text-gray-700 mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-5-2.33-5-5s2.33-5 5-5 5 2.33 5 5-2.33 5-5 5z" />
      </svg>
    </div>

    {/* Name and Role */}
    <div className="flex flex-col mr-3">
      <span className="font-medium text-gray-800">Hardeep</span>
      <span className="text-sm text-gray-500">Staff</span>
    </div>

    {/* Icon */}
    <div className="ml-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"
        />
      </svg>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default TopMenu;
