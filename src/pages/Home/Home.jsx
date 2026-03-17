import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import TechMarquee from "../../components/ui/TechMarquee";

const useTypewriter = (text, typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

const Home = () => {
  const title = useTypewriter("Frontend Developer", 120, 60, 2000);

  return (
    <main className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6">
        {/* Image + Title wrapper */}
        <div className="flex flex-col items-center">
          {/* Profile Photo — above the title with 3D effect */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 60, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 120,
              damping: 14,
              mass: 0.8,
            }}
            className="mb-6"
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
          >
            <img
              src="/IMG_3192.JPG"
              alt="Profile"
              className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(20px)",
                boxShadow:
                  "0 20px 40px rgba(59,130,246,0.3), 0 8px 16px rgba(147,51,234,0.2)",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
              {title}<span className="animate-pulse">|</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="max-w-3xl"
        >
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I build clean, scalable, and responsive web applications using the modern React ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/projects" variant="primary">
              View Work
            </Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <section>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Powered By Modern Tech
          </p>
        </div>
        <TechMarquee />
      </section>
    </main>
  );
};

export default Home;
