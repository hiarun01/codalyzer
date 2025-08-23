import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
    setUser(null);
  };

  // Check if the current page is the dashboard
  const isDashboard = window.location.pathname === "/dashboard";

  if (isDashboard) {
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("bg-[#111010]");
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Codalyzer
              </span>
            </Link>
          </div>

          <div className="md:flex items-center space-x-4">
            {user ? (
              <div className="relative flex items-center ">
                <img
                  onClick={() => setIsOpen((prev) => !prev)}
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer"
                />

                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute top-14 right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                    {/* Close button */}
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      &times;
                    </button>
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <div className=" flex flex-col p-2">
                      {isDashboard ? (
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          onClick={() => {
                            setIsOpen(false);
                            navigate("/");
                          }}
                        >
                          Home
                        </button>
                      ) : (
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          onClick={() => {
                            setIsOpen(false);
                            navigate("/dashboard");
                          }}
                        >
                          Dashboard
                        </button>
                      )}

                      <button
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors duration-200"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
