import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="bg-white py-16 px-4 md:px-10" id="contact">
            <motion.div
                className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                {/* Contact Info */}
                <div className="space-y-6">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Get in Touch
                    </motion.h2>

                    {/* Address Card */}
                    <motion.div
                        className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Address</h4>
                            <p className="text-gray-600 leading-relaxed">
                                College Road,<br />
                                Nashik, Maharashtra,<br />
                                India - 422005
                            </p>
                        </div>
                    </motion.div>

                    {/* Call Us Card */}
                    <motion.div
                        className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
                            <p className="text-gray-600">+91 70393 76572</p>
                        </div>
                    </motion.div>

                    {/* Email Us Card */}
                    <motion.div
                        className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
                            <p className="text-gray-600">info@visionqtechnology.com</p>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form (already animated inside) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ContactForm />
                </motion.div>
            </motion.div>
        </section>
    );
}