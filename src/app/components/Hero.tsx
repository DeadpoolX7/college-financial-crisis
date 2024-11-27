'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Using placeholder images for demonstration
const imageUrls = [
  '/images/proof_image1.jpg',
  '/images/proof_image2.jpg',
  '/images/proof_image3.jpg',
  '/images/proof_image4.jpg',
  //Add more images
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
    <AnimatePresence initial={false}>
      {imageUrls[currentImage] && (
        <motion.div
          key={imageUrls[currentImage]}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={imageUrls[currentImage]}
            alt={`College image ${currentImage + 1}`}
            fill
            sizes="100vw"
            priority={currentImage === 0}
            className="object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>

    {/* Animated Text */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-white text-center px-4"
      >
        Save CIEM!
      </motion.h1>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-2xl md:text-4xl font-medium text-white text-center px-4 mt-2"
      >
        Save education.
      </motion.h2>
    </div>
  </section>
  )
}

export default Hero

