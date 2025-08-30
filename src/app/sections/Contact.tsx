import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaSpinner, FaPaperPlane } from "react-icons/fa";
import { socialMedia } from "../utils/socmed";
import emailjs from "@emailjs/browser";

type SectionProps = {
  theme: "light" | "dark"
}

const Contact = ({ theme }: SectionProps) => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitStatus("success")
      setStatusMessage("Email sent successfully! I'll get back to you soon.")
      form.current.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setStatusMessage("Failed to send email. Please try again or contact me directly through my socials.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = '/Eugenio, Crislane Josh B. - RESUME.pdf'
    link.download = "Josh_Eugenio_Resume.pdf"
    link.click()
  }

  return (
    <motion.div
      id="contact"
      initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8}}
      className="flex flex-col items-center justify-center space-y-8 mb-20"
    >
      <h2 className={`font-zen-dots text-3xl md:text-5xl px-4 bg-gradient-to-r ${theme === 'dark'? 'from-blue-500 to-yellow-300' : 'from-blue-400 via-blue-700 to-black'} text-center bg-clip-text text-transparent`}> 
        Wanna Get in Touch? 
      </h2>

      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg text-center font-electrolize w-3/5 mx-auto`}> 
        Want to have a website or an app made? Email me through the button below, or connect with me on my socials listed down there! 
      </p>

      {/* Resume Download Button */}
      <motion.button
        onClick={handleResumeDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 p-3 md:p-4 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-green-600 to-green-700 text-white border-green-500 shadow-green-600 hover:shadow-green-500' 
            : 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 shadow-green-400 hover:shadow-green-400'
        } font-zen-dots text-sm md:text-lg rounded-lg border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer`}
      >
        <FaDownload />
        Download Resume
      </motion.button>

      {/* Contact Form */}
      <motion.div 
        className="w-full max-w-2xl mx-auto px-6 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className={`w-full p-4 rounded-lg border-2 font-electrolize ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none transition-colors duration-300`}
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className={`w-full p-4 rounded-lg border-2 font-electrolize ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                    : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none transition-colors duration-300`}
              />
            </div>
          </div>
          
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={`w-full p-4 rounded-lg border-2 font-electrolize ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                  : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'
              } focus:outline-none transition-colors duration-300`}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className={`w-full p-4 rounded-lg border-2 font-electrolize resize-none ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                  : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-blue-500'
              } focus:outline-none transition-colors duration-300`}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-2 p-4 md:p-5 ${
                theme === 'dark' 
                  ? 'bg-black text-white border-cyan-500 shadow-cyan-600 hover:shadow-cyan-500' 
                  : 'bg-blue-500 text-white border-blue-500 shadow-blue-400 hover:bg-blue-500/80 hover:border-blue-500/80 hover:shadow-blue-400'
              } font-zen-dots text-sm md:text-lg rounded-lg border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-500 font-electrolize text-center"
              >
                ✅ {statusMessage}
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-red-500 font-electrolize text-center"
              >
                ❌ {statusMessage}
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>

      {/* Alternative Contact Methods */}
      <div className="flex flex-col items-center justify-center gap-4">
        <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} font-electrolize text-sm`}>
          Or reach me directly:
        </p>
        <a 
          href="mailto:josheugenio65@gmail.com" 
          className={`${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-800'} font-electrolize transition-colors duration-300`}
        >
          josheugenio65@gmail.com
        </a>
      </div>

      {/* Social Media Links */}
      <div className={`flex items-center justify-center space-x-6 text-3xl md:text-4xl ${theme === 'dark' ? 'text-white/80' : 'text-black'}`}>
        {socialMedia.map((social, index) => {
          const IconComponent = social.logo

          // Handle special case for Discord
          if (social.name === "Discord") {
            return (
              <button
                key={index}
                onClick={() => {
                  navigator.clipboard.writeText(`${social.username}`)
                  alert(`Copied to clipboard: ${social.username}`)
                }}
                className="hover:cursor-pointer"
                title="Click to copy Josh's Discord username"
              >
                <IconComponent className={`${social.hoverColor} transition-all duration-300 ease-in-out`} />
              </button>
            )
          }

          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name}`}
              title={`Visit Josh's ${social.name}`}
            >
              <IconComponent className={`${social.hoverColor} transition-all duration-300 ease-in-out`} />
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Contact;