import { motion } from 'framer-motion'
import { BookOpen, Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    'Subjects': ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'All Subjects'],
    'Resources': ['Video Lessons', 'Notes & Summaries', 'Past Papers', 'Quizzes', 'AI Tutor'],
    'Company': ['About Us', 'Careers', 'Blog', 'Contact', 'Help Center'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display">
                <span className="text-primary-light">Study</span>
                <span className="text-secondary">Hub</span>
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Kenya's #1 learning platform for Grade 10 students. Study smarter, pass faster, succeed every day.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { icon: MessageCircle, href: '#', color: 'hover:bg-green-600' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Us</p>
                <p className="text-sm">hello@studyhub.co.ke</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="text-sm">+254 700 123 456</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans Highlight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg">Unlock Premium Features</h4>
              <p className="text-gray-400 text-sm">Get unlimited access to all subjects, videos, and AI tutoring</p>
            </div>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Plans
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 StudyHub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-error fill-error" /> for Kenyan students
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
