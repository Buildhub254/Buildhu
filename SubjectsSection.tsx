import { motion } from 'framer-motion'
import { 
  Calculator, BookText, Atom, FlaskConical, Leaf, Globe, 
  Landmark, Briefcase, Languages, ArrowRight 
} from 'lucide-react'

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'math', lessons: 120, progress: 65 },
  { name: 'English', icon: BookText, color: 'english', lessons: 95, progress: 78 },
  { name: 'Physics', icon: Atom, color: 'physics', lessons: 88, progress: 45 },
  { name: 'Chemistry', icon: FlaskConical, color: 'chemistry', lessons: 92, progress: 52 },
  { name: 'Biology', icon: Leaf, color: 'biology', lessons: 105, progress: 80 },
  { name: 'Geography', icon: Globe, color: 'geography', lessons: 78, progress: 33 },
  { name: 'History', icon: Landmark, color: 'history', lessons: 85, progress: 60 },
  { name: 'Business Studies', icon: Briefcase, color: 'business', lessons: 72, progress: 25 },
  { name: 'Kiswahili', icon: Languages, color: 'kiswahili', lessons: 80, progress: 70 },
]

const colorClasses: Record<string, { bg: string; text: string; shadow: string; gradient: string }> = {
  math: { bg: 'bg-math/10', text: 'text-math', shadow: 'shadow-math/30', gradient: 'from-math to-violet-400' },
  english: { bg: 'bg-english/10', text: 'text-english', shadow: 'shadow-english/30', gradient: 'from-english to-blue-400' },
  physics: { bg: 'bg-physics/10', text: 'text-physics', shadow: 'shadow-physics/30', gradient: 'from-physics to-cyan-400' },
  chemistry: { bg: 'bg-chemistry/10', text: 'text-chemistry', shadow: 'shadow-chemistry/30', gradient: 'from-chemistry to-emerald-400' },
  biology: { bg: 'bg-biology/10', text: 'text-biology', shadow: 'shadow-biology/30', gradient: 'from-biology to-green-400' },
  geography: { bg: 'bg-geography/10', text: 'text-geography', shadow: 'shadow-geography/30', gradient: 'from-geography to-amber-400' },
  history: { bg: 'bg-history/10', text: 'text-history', shadow: 'shadow-history/30', gradient: 'from-history to-orange-400' },
  business: { bg: 'bg-business/10', text: 'text-business', shadow: 'shadow-business/30', gradient: 'from-business to-pink-400' },
  kiswahili: { bg: 'bg-kiswahili/10', text: 'text-kiswahili', shadow: 'shadow-kiswahili/30', gradient: 'from-kiswahili to-red-400' },
}

export default function SubjectsSection() {
  return (
    <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            9 Core Subjects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Choose Your Subject
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Master every subject with comprehensive notes, video lessons, and interactive quizzes
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const colors = colorClasses[subject.color]
            const Icon = subject.icon
            
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 overflow-hidden cursor-pointer"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Subject Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h3>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                    <span>{subject.lessons} lessons</span>
                    <span className="w-1 h-1 bg-foreground-muted rounded-full" />
                    <span>{subject.progress}% complete</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${subject.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                    />
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-3 ${colors.bg} ${colors.text} rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:text-white transition-all duration-300`}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
