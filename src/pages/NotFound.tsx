import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-journal-sand font-rounded">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-charcoal">404</h1>
        <p className="text-xl text-gray-600 mb-4 font-rounded">Oops! Page not found</p>
        <a href="/" className="text-mentra-blue hover:text-growth-green underline font-rounded">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
