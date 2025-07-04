import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@visionqtechnology.com&su=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.open(mailtoLink, '_blank');
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 shadow-xl p-8 rounded-2xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
            >
                Send Us a Message
            </motion.h2>

            <motion.div
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
            </motion.div>

            <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            />

            <motion.textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            ></motion.textarea>

            <motion.button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-red-600 hover:to-red-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
                Send Message
            </motion.button>
        </motion.form>
    );
}