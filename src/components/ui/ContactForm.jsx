import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Button from "./Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// NOTE: You need to replace these with your actual EmailJS keys
// 1. Sign up at https://www.emailjs.com/
// 2. Create a Service and a Template (simple text template)
// 3. Get your Public Key, Service ID, and Template ID
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const ContactForm = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // Mock send for demonstration if keys aren't set
        if (SERVICE_ID === "YOUR_SERVICE_ID") {
            setTimeout(() => {
                setStatus("success");
            }, 1500);
            return;
        }

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus("success");
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                    <p className="text-gray-500 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="text-blue-600 hover:underline mt-4"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-500 text-sm">
                            <AlertCircle size={16} />
                            <span>Something went wrong. Please try again.</span>
                        </div>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? (
                            <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Send Message <Send size={18} />
                            </span>
                        )}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
