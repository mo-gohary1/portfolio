import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({ children, href, variant = "primary", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-xl font-medium transition-all duration-300 transform";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/30 border border-transparent",
        secondary: "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 shadow-sm hover:shadow-lg",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
    };

    const Component = href ? Link : motion.button;
    const linkProps = href ? { to: href } : {};

    return (
        <Component
            {...linkProps}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
            >
                {children}
            </motion.span>
        </Component>
    );
};

export default Button;
