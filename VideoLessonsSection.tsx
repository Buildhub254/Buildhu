import { motion } from 'framer-motion'
import { Play, Clock, Eye, ThumbsUp } from 'lucide-react'

const videos = [
  { title: 'Introduction to Calculus', subject: 'Mathematics', duration: '15:32', views: '12K', likes: 890, thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop', color: 'math' },
  { title: 'Understanding Photosynthesis', subject: 'Biology', duration: '12:45', views: '8.5K', likes: 654, thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=225&fit=crop', color: 'biology' },
  { title: 'Chemical Bonding Explained', subject: 'Chemistry', duration: '18:20', views: '10K', likes: 723, thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=225&fit=crop', color: 'chemistry' },
  { title: 'Electricity & Magnetism', subject: 'Physics', duration: '20:15', views: '15K', likes: 1.2, thumbnail: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=400&h=225&fit=crop', color: 'physics' },
  { title: 'Creative Writing Tips', subject: 'English', duration: '10:30', views: '6K', likes: 445, thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=225&fit=crop', color: 'english' },
  { title: 'African Independence Movements', subject: 'History', duration: '22:00', views: '7.2K', likes: 512, thumbnail: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=400&h=225&fit=crop', color: 'history' },
]

const colorMap: Record<string, string> = {
  math: 'bg-math',
  physics: 'bg-physics',
  biology: 'bg-biology',
  chemistry: 'bg-chemistry',
  english: 'bg-english',
  history: 'bg-history',
}

export default function VideoLessonsSection() {
  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-error/10 text-error rounded-full text-sm font-semibold mb-4">
            <Play className="w-4 h-4 inline mr-1" />
            Video Lessons
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Popular Video Lessons
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Learn from expert teachers with engaging video explanations
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </motion.div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded">
                  {video.duration}
                </div>
                {/* Subject Badge */}
                <div className={`absolute top-2 left-2 px-3 py-1 ${colorMap[video.color]} text-white text-xs font-semibold rounded-full`}>
                  {video.subject}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-foreground-muted">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {video.likes}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Videos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
