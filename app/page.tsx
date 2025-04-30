import Navbar from "@/components/navbar"
import IntroductionAndSummary from "@/components/introduction-and-summary"
import AboutMe from "@/components/about-me"
import SkillsAndTechnologies from "@/components/skills-and-technologies"
import Projects from "@/components/projects"
import CertificationsAndCourses from "@/components/certifications-and-courses"
import Experience from "@/components/experience"
import CompetitiveProgrammingAndHackathons from "@/components/competitive-programming-and-hackathons"
import OpenSourceContributions from "@/components/open-source-contributions"
import BlogAndTechnicalWriting from "@/components/blog-and-technical-writing"
import ResearchPublicationOrPatent from "@/components/research-publication-or-patent"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

// Sample data - in a real application, this would come from a CMS or API
const portfolioData = {
  personal: {
    name: "Harshit Sisodia ",
    title: "Full Stack Developer",
    summary: "Building elegant solutions to complex problems with modern web technologies.",
    resumeUrl: "/resume.pdf",
    email: "harshitdharmveer@gmail.com",
    github: "https://github.com/harrsh-it",
    linkedin: "https://www.linkedin.com/in/harshit-sisodia-30718b328/",
    twitter: "https://x.com/harrsh_it",
  },
  about: {
    description:
      "I'm a passionate full-stack developer with 3+ years of experience building web applications. I specialize in React, Node.js, and modern JavaScript frameworks. I'm dedicated to creating efficient, scalable, and user-friendly solutions that solve real-world problems.",
    image: "/HARSHIT.png?height=400&width=400",
  },
  skills: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 75 },
    { name: "Docker", level: 65 },
  ],
  projects: [
    {
      title: "AnantVega – An Aerospace company",
      description:
        "Developed a high-performance landing page for an aerospace company using React.js, Tailwind CSS, and modern frameworks to enhance user experience.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "anantvega.png?height=300&width=500",
      demoUrl: "https://anantvega.com/",
      codeUrl: "https://github.com/harrsh-it",
    },
    {
      title: "BACon –A Space Events platform",
      description: "Developed a space-related event management platform with an informational landing page and a ticket booking system. Integrated Clerk for authentication, Stripe for secure payment processing, and MongoDB for efficient data management",
      technologies: ["Next.js", "Tailwind CSS", "NextAuth"],
      image: "bacon.png?height=300&width=500",
      demoUrl: "https://ba-con.vercel.app/",
      codeUrl: "https://github.com/harrsh-it",
    },
    {
      title: "Face Liveness Detection System",
      description: "Developed a real-time face liveness detection system using Python and machine learning. Trained the model with custom datasets and deployed it on a browser using Streamlit for an interactive user interface.",
      technologies: ["Python", "OpenCV", "ML", "Streamlit"],
      image: "face.jpg?height=300&width=500",
      demoUrl: "#",
      codeUrl: "https://github.com/harrsh-it",
    },
  ],
  certifications: [
    {
      title: "Complete Interview Preparation",
      issuer: "Geeks for geeks",
      date: "2024",
      url: "gfg.png",
    },
    {
      title: "Getting started with DevOps",
      issuer: "LinkedIn Learning",
      date: "2024",
      url: "devops.png",
    },
    {
      title: "Final Round of Cipherthon 2.0",
      issuer: "Cipher School",
      date: "2024",
      url: "cipher.png",
    },
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building and maintaining multiple web applications. Implemented modern React patterns and improved performance by 40%.",
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive and accessible interfaces.",
    },
    {
      role: "Web Development Intern",
      company: "StartUp Hub",
      period: "2017 - 2018",
      description:
        "Assisted in developing web applications and learned modern JavaScript frameworks and best practices.",
    },
  ],
  competitions: [
    {
      name: "Smart India Hackathon 2024",
      position: "Pre-Final",
      year: "2024",
      description: "Nominated for Smart India Hackathon 2024 among 300+ national teams for developing an innovative tech solution. Our project leverages cutting-edge technologies to address real-world challenges with impactful, scalable solutions.",
    },
    {
      name: "CipherThon Hackathon",
      position: "Runner-Up",
      year: "2024",
      description:
        "Showcasing innovation and problem-solving skills. Developed a tech-driven solution with a strong impact and practical application.",
    },
  ],
  openSource: [
    {
      project: "React Component Library - SwingUI",
      contribution: "Contributed several reusable components and improved documentation.",
      url: "#",
    },
    {
      project: "Node.js Utility Package",
      contribution: "Fixed critical bugs and added new features for file handling.",
      url: "#",
    },
  ],
  blog: [
    {
      title: "Full Stack Development Series",
      publication: "Medium",
      date: "2024",
      url: "https://medium.com/@harshitdharmveer.work",
    },
  ],
  research: {
    title: "Machine Learning Approaches to Code Optimization",
    publication: "Journal of Software Engineering",
    date: "2023",
    url: "#",
  },
}

export default function Home() {
  // Determine which optional sections to show based on data availability
  const showOpenSource = portfolioData.openSource && portfolioData.openSource.length > 0
  const showBlog = portfolioData.blog && portfolioData.blog.length > 0
  const showResearch = portfolioData.research && Object.keys(portfolioData.research).length > 0

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar resumeUrl={portfolioData.personal.resumeUrl} />

      <div className="container mx-auto px-4">
        <IntroductionAndSummary data={portfolioData.personal} />
        <AboutMe data={portfolioData.about} />
        <SkillsAndTechnologies data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <CertificationsAndCourses data={portfolioData.certifications} />
        {/* <Experience data={portfolioData.experience} /> */}
        <CompetitiveProgrammingAndHackathons data={portfolioData.competitions} />

        {showOpenSource && <OpenSourceContributions data={portfolioData.openSource} />}
        {showBlog && <BlogAndTechnicalWriting data={portfolioData.blog} />}
        {/* {showResearch && <ResearchPublicationOrPatent data={portfolioData.research} />} */}

        <ContactSection data={portfolioData.personal} />
      </div>

      <Footer />
    </main>
  )
}
