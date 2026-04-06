import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const suggestions = [
    'Mathematics - Quadratic Equations',
    'Physics - Newton\'s Laws',
    'Chemistry - Periodic Table',
    'Biology - Cell Division',
    'English - Essay Writing',
  ]

  const filteredSuggestions = query 
    ? suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative">
          <motion.div
            className={`relative bg-white rounded-2xl shadow-xl transition-all duration-300 ${
              isFocused ? 'shadow-2xl shadow-primary/20 ring-2 ring-primary/20' : ''
            }`}
            animate={{ scale: isFocused ? 1.02 : 1 }}
          >
            <div className="flex items-center px-6 py-4">
              <Search className={`w-6 h-6 transition-colors ${
                isFocused ? 'text-primary' : 'text-foreground-muted'
              }`} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="Search subjects, chapters, notes, or quizzes…"
                className="flex-1 px-4 py-2 text-lg text-foreground placeholder-foreground-muted bg-transparent outline-none font-medium"
              />
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setQuery('')}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-foreground-muted" />
                </motion.button>
              )}
              <motion.button
                className="p-3 bg-gradient-to-r from-primary to-primary-light rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Suggestions Dropdown */}
          {isFocused && filteredSuggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden border border-border"
            >
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full px-6 py-3 text-left hover:bg-primary/5 transition-colors flex items-center gap-3"
                  onClick={() => setQuery(suggestion)}
                >
                  <Search className="w-4 h-4 text-foreground-muted" />
                  <span className="text-foreground">{suggestion}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Quick Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-4"
        >
          <span className="text-sm text-foreground-muted">Popular:</span>
          {['KCSE Past Papers', 'Form 4 Math', 'Physics Notes', 'Biology Quiz'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 text-sm bg-white rounded-full text-foreground-muted hover:text-primary hover:bg-primary/5 transition-colors shadow-sm"
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
