import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import TechMarquee from "../../components/ui/TechMarquee";

const Home = () => {
  return (
    <main className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            Frontend Developer
          </h1>
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
