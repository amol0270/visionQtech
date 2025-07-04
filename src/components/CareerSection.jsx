import { motion } from "framer-motion";

export default function CareerSection() {

    const hrEmail = "hr@visionqtechnology.com";
    const subject = "Career Opportunity Inquiry";
    const body = `Hi VisionQ HR Team,%0D%0A%0D%0AI am interested in potential opportunities at VisionQ Technology. Please find my resume attached.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;

    const handleJoinClick = () => {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${hrEmail}&su=${encodeURIComponent(
            subject
        )}&body=${body}`;
        window.open(gmailURL, "_blank");
    };

    return (
        <section className="py-16 bg-gray-50 px-6 md:px-12" id="careers">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-sm uppercase text-gray-600 tracking-widest mb-3 border-b-2 border-red-500 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Careers
                </motion.h2>

                <motion.h3
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Shape the Future with Us
                </motion.h3>

                <motion.p
                    className="text-gray-600 mb-8 max-w-3xl mx-auto text-md"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    At <strong>VisionQ Technology</strong>, we're always excited to connect with passionate and skilled professionals who want to be part of cutting-edge innovations. Even if we don't have current openings, we'd love to hear from you!
                </motion.p>

                <motion.button
                    onClick={handleJoinClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    Join Us
                </motion.button>
            </motion.div>
        </section>
    );
}