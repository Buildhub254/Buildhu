import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi there! 👋 I\'m your AI Study Assistant. Ask me anything about your subjects!' }
  ])

  const handleSend = () => {
    if (!message.trim()) return
    
    setMessages(prev => [...prev, { from: 'user', text: message }])
    setMessage('')
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        from: 'ai', 
        text: 'Great question! I\'d be happy to help you understand that topic better. Let me explain...' 
      }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'hidden' : 'flex'} items-center gap-3 px-5 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-3xl transition-all`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <span className="font-semibold hidden sm:inline">Ask AI Tutor</span>
        <motion.span
          className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">AI Study Assistant</h3>
                    <div className="flex items-center gap-1 text-sm text-white/80">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      Online - Ready to help
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background-alt">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.from === 'user'
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white rounded-br-md'
                      : 'bg-white text-foreground shadow-md rounded-bl-md'
                  }`}>
                    {msg.from === 'ai' && (
                      <div className="flex items-center gap-1 text-xs text-primary mb-1">
                        <Sparkles className="w-3 h-3" />
                        AI Tutor
                      </div>
                    )}
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-border">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-background-alt rounded-xl text-foreground placeholder-foreground-muted outline-none focus:ring-2 focus:ring-primary/20"
                />
                <motion.button
                  onClick={handleSend}
                  className="p-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-foreground-muted text-center mt-2">
                Powered by AI • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
