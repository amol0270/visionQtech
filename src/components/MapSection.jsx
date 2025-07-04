

export default function MapSection() {
    return (
        <section className="py-12 px-4 md:px-10 bg-white" id="location">
            <div className="max-w-6xl mx-auto text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Find Us on the Map
                </h3>

                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="VisionQ Technology Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1384343683045!2d73.7603847!3d20.0059967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb994f54f533%3A0xef938d11bd1d4c9e!2sCollege%20Rd%2C%20Nashik%2C%20Maharashtra%20422005!5e0!3m2!1sen!2sin!4v1718291234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};