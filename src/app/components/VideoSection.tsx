'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const videos = [
  { id: '1', title: 'Video 1', url: 'https://www.youtube.com/embed/PHYX6oo6kW4?si=_51InfJ_owcZtA0-' },
  { id: '2', title: 'Video 2', url: 'https://www.youtube.com/embed/WQNh8tKByu8?si=Mj8wIb4f3-8GlNJf' },
  { id: '3', title: 'Video 3', url: 'https://www.youtube.com/embed/UhOxNtLXiBY?si=MrC1i1jkRRubH9y5' },
  // Add more videos as needed
]

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Watch Our Videos</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-3/4"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-40"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/4"
          >
            <h3 className="text-xl font-semibold mb-4">More Videos</h3>
            <ul className="space-y-4">
              {videos.map((video) => (
                <li
                  key={video.id}
                  className={`cursor-pointer p-2 rounded ${
                    activeVideo.id === video.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveVideo(video)}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

