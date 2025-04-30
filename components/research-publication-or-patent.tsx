"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Research {
  title: string
  publication: string
  date: string
  url: string
}

interface ResearchPublicationOrPatentProps {
  data: Research
}

export default function ResearchPublicationOrPatent({ data }: ResearchPublicationOrPatentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // If no data, don't render the section
  if (!data || Object.keys(data).length === 0) {
    return null
  }

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Research{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Publications
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          My research work and publications.
        </motion.p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700"
        >
          <div className="flex items-start gap-6">
            <div className="bg-purple-500/20 p-4 rounded-lg">
              <BookOpen className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{data.title}</h3>
              <p className="text-gray-400 mb-1">{data.publication}</p>
              <p className="text-gray-500 mb-6">{data.date}</p>
              <p className="text-gray-300 mb-6">
                This research explores innovative approaches to optimize code execution through machine learning
                techniques, resulting in significant performance improvements for complex computational tasks.
              </p>
              <Link
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors duration-300"
              >
                <span className="mr-2">Read Publication</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
