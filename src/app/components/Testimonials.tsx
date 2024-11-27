'use client'

import { motion } from 'framer-motion'


// adding testimonials manually
// utilize some 3rd party api service for service them in real-time in production
// use jsonplaceholder.typecode.com for adding testimonals and fetching them
const testimonials = [
  {
    id: 1,
    name: 'Anonymous',
    role: 'Student',
    content: 'This campaign has brought much-needed attention to the financial crisis in our college. CIEM',
  },
  {
    id: 2,
    name: 'A College Professor',
    role: 'Professor',
    content: 'I fully support this initiative. It\'s crucial for the future of our educational institution.',
  },
  {
    id: 3,
    name: 'CIEM Alumni',
    role: 'Alumni',
    content: 'As a former student, I believe addressing this crisis is vital for current and future students.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div
className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

