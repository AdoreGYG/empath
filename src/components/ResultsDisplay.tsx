import React from 'react'
import { Heart, Brain, Users, Sparkles, RotateCcw, Share2, ExternalLink } from 'lucide-react'

interface ResultsDisplayProps {
  score: number
  onReset: () => void
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ score, onReset }) => {
  const getResultData = (score: number) => {
    if (score <= 5) {
      return {
        level: "Partially Empathic",
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
        icon: Brain,
        title: "You have some empathic tendencies",
        description: "You show signs of empathy but may not be overwhelmed by others' emotions. You likely have good emotional boundaries and can relate to others while maintaining your own emotional stability.",
        traits: [
          "Good emotional boundaries",
          "Selective empathy",
          "Balanced sensitivity",
          "Stable emotional state"
        ]
      }
    } else if (score <= 10) {
      return {
        level: "Moderate Empath",
        color: "from-green-500 to-emerald-500",
        bgColor: "from-green-50 to-emerald-50",
        icon: Users,
        title: "You have moderate empathic tendencies",
        description: "You possess a healthy level of empathy that allows you to connect with others while still maintaining your own emotional well-being. You're sensitive to others' feelings but not overwhelmed by them.",
        traits: [
          "Strong emotional intelligence",
          "Good social awareness",
          "Balanced empathy",
          "Healthy boundaries"
        ]
      }
    } else if (score <= 15) {
      return {
        level: "Strong Empath",
        color: "from-purple-500 to-violet-500",
        bgColor: "from-purple-50 to-violet-50",
        icon: Heart,
        title: "You have strong empathic tendencies",
        description: "You are highly sensitive to the emotions and energy of others. You likely feel deeply and may sometimes become overwhelmed in crowded or emotionally charged environments. Your empathy is a gift that helps you connect deeply with others.",
        traits: [
          "High emotional sensitivity",
          "Deep emotional connections",
          "Strong intuition",
          "Need for alone time"
        ]
      }
    } else {
      return {
        level: "Full Empath",
        color: "from-pink-500 to-rose-500",
        bgColor: "from-pink-50 to-rose-50",
        icon: Sparkles,
        title: "You are a full-blown empath",
        description: "You are extremely sensitive to the emotions, energy, and even physical sensations of others. You likely feel overwhelmed in crowds, need significant alone time to recharge, and may absorb others' emotions as if they were your own. This is both a gift and a challenge that requires careful self-care.",
        traits: [
          "Extreme emotional sensitivity",
          "Absorb others' emotions",
          "Highly intuitive",
          "Need for solitude and nature"
        ]
      }
    }
  }

  const result = getResultData(score)
  const IconComponent = result.icon

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Empath Test Results',
        text: `I just took an empath test and scored ${score}/20 - I'm a ${result.level}!`,
        url: window.location.href
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I just took an empath test and scored ${score}/20 - I'm a ${result.level}! Take the test: ${window.location.href}`
      navigator.clipboard.writeText(text)
      alert('Results copied to clipboard!')
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${result.bgColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Branding Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-1">The Power of Self-Mastery with Dr. Yian Goh QY</h2>
          <p className="text-gray-600 italic">~ The Lifework of Self</p>
        </div>

        {/* Results Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${result.color} rounded-full blur-lg opacity-30 animate-pulse`}></div>
              <div className="relative bg-white rounded-full p-6 shadow-xl">
                <IconComponent className="h-16 w-16 text-transparent bg-gradient-to-r bg-clip-text" style={{
                  backgroundImage: `linear-gradient(to right, ${result.color.split(' ')[1]}, ${result.color.split(' ')[3]})`
                }} />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Results
          </h1>
          <p className="text-xl text-gray-600">
            You answered "Yes" to {score} out of 20 questions
          </p>
        </div>

        {/* Score Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${result.color} text-white rounded-full font-bold text-3xl mb-4`}>
              {score}
            </div>
            <h2 className={`text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-2`}>
              {result.level}
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              {result.title}
            </p>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Traits */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {result.traits.map((trait, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 bg-gradient-to-r ${result.color} rounded-full`}></div>
                <span className="text-gray-700 font-medium">{trait}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onReset}
              className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Take Test Again
            </button>
            
            <button
              onClick={shareResults}
              className={`flex items-center justify-center px-6 py-3 bg-gradient-to-r ${result.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share Results
            </button>
          </div>
        </div>

        {/* Understanding Your Results */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Understanding Your Empathic Level
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">1-5</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Partially Empathic</h4>
              <p className="text-sm text-gray-600">Some empathic tendencies with good boundaries</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-green-50">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">6-10</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Moderate Empath</h4>
              <p className="text-sm text-gray-600">Balanced empathy with healthy sensitivity</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-purple-50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">11-15</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Strong Empath</h4>
              <p className="text-sm text-gray-600">High sensitivity requiring self-care</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-pink-50">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">16-20</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Empath</h4>
              <p className="text-sm text-gray-600">Extreme sensitivity needing careful management</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Created by Dr. Yian Goh QY</h3>
            <p className="text-gray-400 mb-6">Copyright © 2025 by Dr. Yian Goh QY</p>
            
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.katherinegoh.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                www.katherinegoh.com
              </a>
              <a 
                href="https://www.adoregaia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                www.adoregaia.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ResultsDisplay
