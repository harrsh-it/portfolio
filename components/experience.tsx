"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

interface ExperienceProps {
  data: ExperienceItem[]
}

export default function Experience({ data }: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          My professional journey and work experience.
        </motion.p>

        <div ref={ref} className="max-w-3xl mx-auto">
          {data.map((item, index) => (
            <ExperienceCard
              key={index}
              experience={item}
              index={index}
              isVisible={isInView}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  experience: ExperienceItem
  index: number
  isVisible: boolean
  isLast: boolean
}

function ExperienceCard({ experience, index, isVisible, isLast }: ExperienceCardProps) {
  const { role, company, period, description } = experience

  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2"></div>
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        className="absolute left-4 top-6 w-6 h-6 bg-gray-900 border-2 border-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <Briefcase className="h-3 w-3 text-purple-400" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <span className="text-purple-400 text-sm md:text-base">{period}</span>
        </div>
        <p className="text-gray-400 mb-4">{company}</p>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </div>
  )
}
