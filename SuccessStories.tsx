import { motion } from 'framer-motion'
import { Star, Quote, Award } from 'lucide-react'

const stories = [
  {
    name: 'Sarah Wanjiku',
    image: '/images/student1.jpg',
    grade: 'A',
    quote: 'StudyHub helped me improve my grades from C+ to A! The video lessons are amazing.',
    subject: 'Mathematics',
    school: 'Kenya High School'
  },
  {
    name: 'James Ochieng',
    image: '/images/student2.jpg',
    grade: 'A-',
    quote: 'The past papers and quizzes prepared me perfectly for KCSE. I scored 78 points!',
    subject: 'Sciences',
    school: 'Alliance Boys'
  },
  {
    name: 'Faith Muthoni',
    image: '/images/student3.jpg',
    grade: 'A',
    quote: 'The AI tutor answered all my questions 24/7. It\'s like having a personal teacher!',
    subject: 'Biology',
    school: 'Loreto Limuru'
  },
]

export default function SuccessStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-alt">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-warning/10 text-warning rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4 inline mr-1" />
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Students Who Excelled
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Join thousands of students who improved their grades with StudyHub
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Grade Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-warning to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{story.grade}</span>
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{story.name}</h3>
                  <p className="text-sm text-white/80">{story.school}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground-muted italic pl-6">
                    "{story.quote}"
                  </p>
                </div>

                {/* Subject Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {story.subject}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground-muted mb-4">Ready to write your success story?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/30 hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join StudyHub Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
