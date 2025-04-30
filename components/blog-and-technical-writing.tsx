"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  publication: string
  date: string
  url: string
}

interface BlogAndTechnicalWritingProps {
  data: BlogPost[]
}

export default function BlogAndTechnicalWriting({ data }: BlogAndTechnicalWritingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // If no data, don't render the section
  if (!data || data.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Blog &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Technical Writing
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Articles and technical content I've written.
        </motion.p>

        <div ref={ref} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                  <p className="text-gray-400 mb-1">{post.publication}</p>
                  <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="mr-1">Read Article</span>
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
