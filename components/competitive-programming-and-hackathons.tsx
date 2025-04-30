"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Code } from "lucide-react"

interface Competition {
  name: string
  position: string
  year: string
  description: string
}

interface CompetitiveProgrammingAndHackathonsProps {
  data: Competition[]
}

export default function CompetitiveProgrammingAndHackathons({ data }: CompetitiveProgrammingAndHackathonsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="competitions" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Competitive Programming &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Hackathons</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Competitions and hackathons I've participated in.
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.map((competition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  {index % 2 === 0 ? (
                    <Trophy className="h-6 w-6 text-blue-400" />
                  ) : (
                    <Code className="h-6 w-6 text-purple-400" />
                  )}
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{competition.name}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 md:ml-2">
                      {competition.position}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{competition.year}</p>
                  <p className="text-gray-400">{competition.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
