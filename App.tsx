
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchBar from './components/SearchBar'
import SubjectsSection from './components/SubjectsSection'
import NotesSection from './components/NotesSection'
import VideoLessonsSection from './components/VideoLessonsSection'
import PastPapersSection from './components/PastPapersSection'
import DashboardPreview from './components/DashboardPreview'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SearchBar />
        <SubjectsSection />
        <NotesSection />
        <VideoLessonsSection />
        <PastPapersSection />
        <DashboardPreview />
        <SuccessStories />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}

export default App
