import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface TestQuestionProps {
  question: string
  questionNumber: number
  onAnswer: (answer: boolean) => void
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, questionNumber, onAnswer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg mb-4">
          {questionNumber}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {question}
        </h3>
        <p className="text-gray-600">
          Answer honestly based on how you typically feel or behave
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <button
          onClick={() => onAnswer(true)}
          className="flex-1 flex items-center justify-center px-6 py-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 hover:border-green-300 rounded-xl transition-all duration-200 group"
        >
          <CheckCircle className="h-6 w-6 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-green-700">Yes</span>
        </button>

        <button
          onClick={() => onAnswer(false)}
          className="flex-1 flex items-center justify-center px-6 py-4 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-300 rounded-xl transition-all duration-200 group"
        >
          <XCircle className="h-6 w-6 text-red-600 mr-3 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-red-700">No</span>
        </button>
      </div>
    </div>
  )
}

export default TestQuestion
