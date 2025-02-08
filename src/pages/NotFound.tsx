
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
