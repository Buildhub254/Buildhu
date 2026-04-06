import { motion } from 'framer-motion'
import { FileDown, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react'

const papers = [
  { title: 'KCSE 2023 Mathematics', type: 'Past Paper', questions: 30, completed: true, score: 85 },
  { title: 'Physics Mock Exam', type: 'Practice Quiz', questions: 25, completed: false, score: null },
  { title: 'KCSE 2022 Chemistry', type: 'Past Paper', questions: 35, completed: true, score: 72 },
  { title: 'Biology Chapter Test', type: 'Practice Quiz', questions: 20, completed: false, score: null },
  { title: 'KCSE 2023 English', type: 'Past Paper', questions: 40, completed: true, score: 90 },
  { title: 'History Revision Quiz', type: 'Practice Quiz', questions: 15, completed: true, score: 78 },
]

export default function PastPapersSection() {
  return (
    <section id="past-papers" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-success/10 text-success rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4 inline mr-1" />
            Test Yourself
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Past Papers & Quizzes
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Practice with real KCSE papers and interactive quizzes to boost your exam readiness
          </p>
        </motion.div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 group cursor-pointer"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    paper.type === 'Past Paper' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <FileDown className="w-6 h-6" />
                  </div>
                  {paper.completed && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>

                {/* Type Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  paper.type === 'Past Paper'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {paper.type}
                </span>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-foreground-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {paper.questions} questions
                  </span>
                  {paper.score && (
                    <span className="flex items-center gap-1 text-success font-semibold">
                      <Award className="w-4 h-4" />
                      {paper.score}%
                    </span>
                  )}
                </div>

                {/* Progress Bar (for completed) */}
                {paper.completed && paper.score && (
                  <div className="mb-4">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${paper.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full ${
                          paper.score >= 80 ? 'bg-success' : paper.score >= 60 ? 'bg-warning' : 'bg-error'
                        }`}
                      />
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    paper.completed
                      ? 'bg-gray-100 text-foreground hover:bg-primary hover:text-white'
                      : 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg hover:shadow-xl'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {paper.completed ? 'Review Answers' : 'Start Quiz'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.button
            className="px-8 py-3 bg-white text-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border border-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Browse All Papers
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
