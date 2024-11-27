import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">College Financial Crisis</h3>
            <p className="text-gray-400">Fighting for better education funding.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#cta" className="hover:text-gray-300">Take Action</Link></li>
              <li><Link href="#videos" className="hover:text-gray-300">Videos</Link></li>
              <li><Link href="#testimonials" className="hover:text-gray-300">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link href="https://mirror.xyz" className="hover:text-gray-300">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="https://x.com" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} College Financial Crisis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

