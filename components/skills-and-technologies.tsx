"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  level: number
}

interface SkillsAndTechnologiesProps {
  data: Skill[]
}

export default function SkillsAndTechnologies({ data }: SkillsAndTechnologiesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Group skills into categories
  const frontendSkills = data.filter((skill) =>
    ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Next.js"].includes(skill.name),
  )

  const backendSkills = data.filter((skill) =>
    ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL", "Python", "Django"].includes(skill.name),
  )

  const otherSkills = data.filter((skill) => !frontendSkills.includes(skill) && !backendSkills.includes(skill))

  return (
    <section id="skills" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Skills &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          My technical skills and expertise across different technologies and tools.
        </motion.p>

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
            <SkillCategory title="Frontend" color="purple" skills={frontendSkills} isVisible={isInView} />
            <SkillCategory title="Backend" color="blue" skills={backendSkills} isVisible={isInView} />
            <SkillCategory title="Tools & Other" color="green" skills={otherSkills} isVisible={isInView} />
          </div>

          {/* Hexagon Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 "
          >
            {data.map((skill, index) => (
              <SkillHexagon key={index} skill={skill} index={index} isVisible={isInView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  color: "purple" | "blue" | "green"
  skills: Skill[]
  isVisible: boolean
}

function SkillCategory({ title, color, skills, isVisible }: SkillCategoryProps) {
  const colorClasses = {
    purple: "from-purple-500 to-purple-700 text-purple-400",
    blue: "from-blue-500 to-blue-700 text-blue-400",
    green: "from-green-500 to-green-700 text-green-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900/60 p-6 rounded-xl border border-gray-700"
    >
      <h3 className={`text-xl font-semibold mb-4 ${colorClasses[color].split(" ").pop()}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${colorClasses[color]
              .split(" ")
              .slice(0, 2)
              .join(" ")} bg-opacity-20 text-white`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

interface SkillHexagonProps {
  skill: Skill
  index: number
  isVisible: boolean
}

function SkillHexagon({ skill, index, isVisible }: SkillHexagonProps) {
  // Determine color based on skill level
  const getColor = (level: number) => {
    if (level >= 90) return "from-purple-500 to-blue-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-cyan-500 to-green-500"
    if (level >= 60) return "from-green-500 to-yellow-500"
    return "from-yellow-500 to-orange-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      {/* Hexagon Shape */}
      <div className="w-24 h-28 md:w-28 md:h-32 flex items-center justify-center">
        <div
          className={`hexagon bg-gradient-to-br ${getColor(skill.level)} w-full h-full flex items-center justify-center`}
        >
          <div className="z-10 text-center">
            <div className="text-lg md:text-xl font-bold text-white">{getSkillIcon(skill.name)}</div>
            <div className="text-xs md:text-sm font-medium text-white mt-1">{skill.name}</div>
          </div>
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        Proficiency: {skill.level}%
      </div>
    </motion.div>
  )
}

// Helper function to render skill icons (simplified for this example)
function getSkillIcon(skillName: string) {
  // In a real application, you would use actual icons from a library
  return skillName.charAt(0)
}
