import { Github, Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";

const About = () => {
  return (
    <section className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          About Me
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="prose prose-lg dark:prose-invert">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I didn’t start programming just to write code.
          I started because I enjoy building things that people actually use.
        </p>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I focus on clean UI, smooth UX, and scalable React architecture.
          Every project teaches me something new, and I love the constant challenge of optimizing performance and user experience.
        </p>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Currently, I’m looking for opportunities to grow as a Frontend Developer
          and work on real-world products that make a difference.
        </p>
      </div>

      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript (ES6+)", "Tailwind CSS", "Git", "Framer Motion", "Vite"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <div className="flex gap-6">
          <a
            href="https://github.com/mo-gohary1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-elgohary-3452073a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://x.com/MO_gohary1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://www.facebook.com/mohamef.hesham.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/mo_gohary1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://wa.me/201028290508"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M17.49 14.7c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.68-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.38.12-.14.16-.24.24-.38.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.18-.46-.38-.4-.52-.4h-.44c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.06 0 1.22.88 2.4.98 2.54 1.14 1.76 2.76 2.62 4.46 2.82 2.74.32 3.32-.78 3.76-1.76.12-.26.24-.52.3-.64.04-.12.02-.26-.1-.32z" />
              <path d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-2.5 0-4.82-.94-6.62-2.5L2 21z" />
            </svg>
          </a>
          <a
            href="mailto:moelgohary2004@icloud.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;
