"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GitBranch, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Contribution {
  project: string
  contribution: string
  url: string
}

interface OpenSourceContributionsProps {
  data: Contribution[]
}

export default function OpenSourceContributions({ data }: OpenSourceContributionsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // If no data, don't render the section
  if (!data || data.length === 0) {
    return null
  }

  return (
    <section id="open-source" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Open Source{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Contributions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          My contributions to open source projects.
        </motion.p>

        <div ref={ref} className="max-w-3xl mx-auto space-y-6">
          {data.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <GitBranch className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{contribution.project}</h3>
                  <p className="text-gray-400 mb-4">{contribution.contribution}</p>
                  <Link
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    <span className="mr-1">View Project</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
