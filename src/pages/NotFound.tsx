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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 font-rounded">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png" 
            alt="Sprig looking curious" 
            className="w-24 h-24 mx-auto mb-4 animate-bounce-gentle"
          />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-mentra-blue">Oops!</h1>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Looks like this page took a learning detour! Don't worry—even the best explorers get lost sometimes. 
          Let's get you back to discovering amazing things with Sprig.
        </p>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </a>
          
          <p className="text-sm text-gray-500">
            Or explore our <a href="/features" className="text-mentra-blue hover:underline">features</a> to see what Sprig can do!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
