"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

interface PersonalData {
  name: string
  title: string
  summary: string
  email: string
  github: string
  linkedin: string
  twitter: string
}

interface IntroductionAndSummaryProps {
  data: PersonalData
}

export default function IntroductionAndSummary({ data }: IntroductionAndSummaryProps) {
  const { name, title, summary, email, github, linkedin, twitter } = data

  // Ref for the section to add some scroll animations
  const sectionRef = useRef<HTMLDivElement>(null)

  // Social media links
  const socialLinks = [
    { icon: <GitHub className="h-5 w-5" />, url: github, label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: linkedin, label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: twitter, label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, url: `mailto:${email}`, label: "Email" },
  ]

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h2 className="text-purple-400 text-lg md:text-xl mb-2">Hello, I'm</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-300">{title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">{summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300 text-gray-300 hover:text-white"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
