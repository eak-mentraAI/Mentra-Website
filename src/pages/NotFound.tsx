import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from '@/components/layout/PageTransition';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-white font-rounded">
        <div className="text-center max-w-md mx-auto px-4">
          <img
            src="/images/sprig/sleepy.png"
            alt=""
            width="120"
            height="120"
            className="w-28 h-28 mx-auto mb-8 drop-shadow-md"
            aria-hidden="true"
          />

          <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Sprig wandered off.
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            The page you were looking for isn't here. Let's get you back.
          </p>

          <Link
            to="/"
            className="inline-block bg-mentra-blue hover:bg-mentra-blue/90 text-white px-7 py-3 rounded-full font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Back to home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
