export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Harshit Sisodia. All rights reserved.</p>
        <p className="text-gray-500 text-xs mt-2">Designed and built with React, Next.js, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
