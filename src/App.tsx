import React, { useState } from 'react'
import { Heart, Brain, Users, Sparkles, ArrowRight, RotateCcw, ExternalLink } from 'lucide-react'
import TestQuestion from './components/TestQuestion'
import ResultsDisplay from './components/ResultsDisplay'
import { questions } from './data/questions'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setIsStarted(false)
  }

  const startTest = () => {
    setIsStarted(true)
  }

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              {/* Branding Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">The Power of Self-Mastery with Dr. Yian Goh QY</h2>
                <p className="text-lg text-gray-600 italic">~ The Lifework of Self</p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative bg-white rounded-full p-6 shadow-xl">
                    <Heart className="h-16 w-16 text-purple-600" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Are You an <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Empath</span>?
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover your empathic abilities with our comprehensive 20-question assessment. 
                Learn if you're "too sensitive" or if you possess the remarkable gift of empathy.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scientific Assessment</h3>
                  <p className="text-gray-600">Based on established psychological research on empathy and sensitivity</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Results</h3>
                  <p className="text-gray-600">Detailed analysis of your empathic tendencies and sensitivity levels</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Insights</h3>
                  <p className="text-gray-600">Understanding your unique empathic profile and what it means</p>
                </div>
              </div>

              <button
                onClick={startTest}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Take the Test Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <p className="text-sm text-gray-500 mt-4">Takes about 5 minutes • 20 questions</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Empathy</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empaths are highly sensitive individuals who can feel and absorb the emotions of others. 
                This test helps you understand your empathic abilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Person in peaceful meditation"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional Sensitivity</h3>
                    <p className="text-gray-600">Do you feel overwhelmed by others' emotions or crowded spaces?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intuitive Understanding</h3>
                    <p className="text-gray-600">Can you sense what others are feeling without them telling you?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 rounded-lg p-3">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Awareness</h3>
                    <p className="text-gray-600">Do you prefer small groups and need alone time to recharge?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Created by Dr. Yian Goh QY</h3>
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
          </div>
        </footer>
      </div>
    )
  }

  if (showResults) {
    return (
      <ResultsDisplay 
        score={answers.filter(answer => answer).length}
        onReset={resetTest}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Empath Assessment</h2>
              <p className="text-sm text-gray-600">Dr. Yian Goh QY</p>
            </div>
            <button
              onClick={resetTest}
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Question */}
        <TestQuestion
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  )
}

export default App
