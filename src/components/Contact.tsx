import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "nadinematloa@gmail.com",
      link: "mailto:nadinematloa@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "077 450 7307",
      link: "tel:+27774507307",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Greenlee Blvd, Linbro Park",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/Gomotsegang1",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gomotsegang-matloa-a56240234",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-deep-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 line-grid" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
              <span className="bg-linear-to-r from-[#87BAC3] to-[#249E94] bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={idx}
                      variants={itemVariants}
                      href={info.link}
                      className="flex items-start gap-4 p-4 card-glow hover:shadow-card-hover group"
                    >
                      <div className="text-[#249E94] dark:text-[#3BC1A8] group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      variants={itemVariants}
                      href={social.link}
                      className="cursor-pointer p-4 card-glow text-slate-600 dark:text-slate-300 hover:text-[#249E94] dark:hover:text-[#3BC1A8] hover:shadow-card-hover hover:border-[#249E94]/40 transition-all duration-300"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-deep-950 border-t border-slate-200/60 dark:border-[#249E94]/25 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-sm"
            >
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#249E94] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-[#249E94] transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#249E94] transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-[#249E94] transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200/60 dark:border-[#249E94]/25 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <p>Copyright © 2024 Gomotsegang Matloa. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
