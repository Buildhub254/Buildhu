import { motion } from 'framer-motion'
import { Flame, Trophy, BookMarked, Target, TrendingUp, Zap, Star, Calendar } from 'lucide-react'

export default function DashboardPreview() {
  const stats = [
    { icon: Flame, label: 'Day Streak', value: '5', color: 'text-secondary', bg: 'bg-secondary/10' },
    { icon: Trophy, label: 'Quizzes Passed', value: '12', color: 'text-warning', bg: 'bg-warning/10' },
    { icon: BookMarked, label: 'Notes Saved', value: '28', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: Target, label: 'Goals Met', value: '8', color: 'text-success', bg: 'bg-success/10' },
  ]

  const subjects = [
    { name: 'Biology', progress: 80, color: 'bg-biology' },
    { name: 'Mathematics', progress: 65, color: 'bg-math' },
    { name: 'Physics', progress: 45, color: 'bg-physics' },
    { name: 'Chemistry', progress: 52, color: 'bg-chemistry' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Track Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Your Learning Dashboard
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Stay motivated with gamified progress tracking and achievement badges
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/50"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">JK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Welcome back, John!</h3>
                  <p className="text-white/80 text-sm">Keep up the great work! 🔥</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Level 12</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${stat.bg} rounded-2xl p-4 text-center cursor-pointer transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-foreground-muted">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Progress Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Subject Progress */}
              <div className="bg-background-alt rounded-2xl p-5">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Subject Progress
                </h4>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={subject.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{subject.name}</span>
                        <span className="text-sm text-foreground-muted">{subject.progress}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${subject.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full ${subject.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Activity */}
              <div className="bg-background-alt rounded-2xl p-5">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  This Week's Activity
                </h4>
                <div className="flex items-end justify-between h-32 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                    const heights = [60, 80, 45, 90, 70, 30, 50]
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${heights[index]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`w-full rounded-t-lg ${
                            index === 3 ? 'bg-gradient-to-t from-primary to-primary-light' : 'bg-primary/30'
                          }`}
                        />
                        <span className="text-xs text-foreground-muted">{day}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6 bg-gradient-to-r from-warning/10 to-secondary/10 rounded-2xl p-5">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                Recent Achievements
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Quiz Master', icon: '🏆' },
                  { name: '5-Day Streak', icon: '🔥' },
                  { name: 'Biology Pro', icon: '🧬' },
                  { name: 'Fast Learner', icon: '⚡' },
                  { name: 'Note Taker', icon: '📝' },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md cursor-pointer"
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-sm font-semibold text-foreground">{badge.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
