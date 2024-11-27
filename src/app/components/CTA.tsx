'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section id="cta" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Take Action Now
        </motion.h2>
        <div className="space-x-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <Button size="lg"
              onClick={() => window.open('https://www.change.org/', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-xl"
            >
              Sign Petition
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block"
          >
            <Button size="lg"
              onClick={() => {
                // Add PayU embed payment button logic here
                console.log('Donate button clicked')
              }}
              className="bg-green-600 hover:bg-green-700 text-xl"
            >
              Donate
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA


