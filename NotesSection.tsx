import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FileText, ChevronLeft, ChevronRight, Bookmark, Clock, Star } from 'lucide-react'

const notes = [
  { title: 'Quadratic Equations Simplified', subject: 'Mathematics', readTime: '5 min', rating: 4.9, color: 'math' },
  { title: 'Newton\'s Laws of Motion', subject: 'Physics', readTime: '8 min', rating: 4.8, color: 'physics' },
  { title: 'Cell Division: Mitosis & Meiosis', subject: 'Biology', readTime: '10 min', rating: 4.9, color: 'biology' },
  { title: 'Periodic Table Trends', subject: 'Chemistry', readTime: '7 min', rating: 4.7, color: 'chemistry' },
  { title: 'Essay Writing Techniques', subject: 'English', readTime: '6 min', rating: 4.8, color: 'english' },
  { title: 'World War II Summary', subject: 'History', readTime: '12 min', rating: 4.6, color: 'history' },
  { title: 'Biashara na Ujasiriamali', subject: 'Kiswahili', readTime: '8 min', rating: 4.5, color: 'kiswahili' },
  { title: 'Climate and Weather Patterns', subject: 'Geography', readTime: '9 min', rating: 4.7, color: 'geography' },
]

const colorMap: Record<string, string> = {
  math: 'bg-math text-white',
  physics: 'bg-physics text-white',
  biology: 'bg-biology text-white',
  chemistry: 'bg-chemistry text-white',
  english: 'bg-english text-white',
  history: 'bg-history text-white',
  kiswahili: 'bg-kiswahili text-white',
  geography: 'bg-geography text-white',
  business: 'bg-business text-white',
}

export default function NotesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="notes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-alt">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              Quick Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Top Notes & Summaries
            </h2>
            <p className="text-foreground-muted mt-2">Simplified notes for quick revision</p>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <motion.button
              onClick={() => scroll('left')}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </motion.div>

        {/* Scrollable Notes */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Card Header */}
              <div className={`${colorMap[note.color]} p-4 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex items-center justify-between">
                  <FileText className="w-8 h-8" />
                  <motion.button
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Bookmark className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-sm opacity-90 mt-2">{note.subject}</p>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {note.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-foreground-muted">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{note.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span>{note.rating}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-4 py-2 bg-gray-50 text-foreground rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
                  whileTap={{ scale: 0.98 }}
                >
                  Read Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
