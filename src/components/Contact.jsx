import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill out all fields");
      return false;
    }
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // No backend on the static site — open the visitor's email client
    // with everything pre-filled so the message actually reaches Adeet.
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:adeettuldhr5@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client — hit send to reach me!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-bg_light_primary">
    <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-gray-50" id="contact">
      <h2 className="title" data-aos="fade-down">Contact Me</h2>
      <h4 className="subtitle mb-20" data-aos="fade-down">GET IN TOUCH</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <p className="text-gray-700 text-lg mb-6">
          I’d love to hear about what you’re working on and how I could help. I’m currently looking
            for a new role and am open to a wide range of opportunities. I’m a hard-working and
            positive person who always approaches each task with purpose and attention to detail.
          </p>
          <div className="text-sm text-gray-600 space-y-1 mb-6">
          <p>adeettuldhr5@gmail.com</p>
            <p> +1 (672) 673-5247</p>
            <p> Vancouver, BC</p>
          </div>
          <div className="flex gap-4 mt-4 text-teal-600 text-2xl">
            <a href="https://linkedin.com/in/adeet-tuladhar" target="_blank"><FaLinkedin className="hover:opacity-75" /></a>
            <a href="https://github.com/Adeettldhr" target="_blank"><FaGithub className="hover:opacity-75" /></a>
            <a href="https://instagram.com/adeet_tldhr_/" target="_blank"><FaInstagram className="hover:opacity-75" /></a>
            <a href="https://facebook.com/adeet.tuladhar" target="_blank"><FaFacebook className="hover:opacity-75" /></a>
            <a href="https://x.com/adeettldhr" target="_blank"><FaTwitter className="hover:opacity-75" /></a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
