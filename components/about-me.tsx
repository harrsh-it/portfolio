"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface AboutData {
  description: string
  image: string
}

interface AboutMeProps {
  data: AboutData
}

export default function AboutMe({ data }: AboutMeProps) {
  const { description, image } = data
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 relative rounded-3xl overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">{description}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Education</h3>
                <p className="text-gray-400">Computer Science, BTech</p>
                <p className="text-gray-500">Lovely Professional University</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Location</h3>
                <p className="text-gray-400">Punjab, India</p>
                <p className="text-gray-500">Available for Remote Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
