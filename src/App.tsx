import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, BarChart3, Heart, Users, Briefcase, Home, Trophy, Lightbulb, Shield, Globe, Moon, Sun } from 'lucide-react';

const VALUES_DATA = [
  { id: 1, name: 'Family', description: 'Strong relationships with family members', icon: Home, category: 'Relationships' },
  { id: 2, name: 'Achievement', description: 'Accomplishing goals and succeeding', icon: Trophy, category: 'Success' },
  { id: 3, name: 'Creativity', description: 'Expressing imagination and originality', icon: Lightbulb, category: 'Self-Expression' },
  { id: 4, name: 'Security', description: 'Safety, stability, and predictability', icon: Shield, category: 'Stability' },
  { id: 5, name: 'Adventure', description: 'Excitement, novelty, and exploration', icon: Globe, category: 'Growth' },
  { id: 6, name: 'Helping Others', description: 'Making a positive impact on others\' lives', icon: Heart, category: 'Service' },
  { id: 7, name: 'Independence', description: 'Self-reliance and personal freedom', icon: Users, category: 'Autonomy' },
  { id: 8, name: 'Career Success', description: 'Professional growth and recognition', icon: Briefcase, category: 'Success' },
  { id: 9, name: 'Health', description: 'Physical and mental well-being', icon: Heart, category: 'Well-being' },
  { id: 10, name: 'Learning', description: 'Continuous growth and knowledge', icon: Lightbulb, category: 'Growth' },
  { id: 11, name: 'Community', description: 'Connection with local community', icon: Users, category: 'Relationships' },
  { id: 12, name: 'Spirituality', description: 'Connection with higher purpose', icon: Globe, category: 'Meaning' },
  { id: 13, name: 'Financial Security', description: 'Economic stability and comfort', icon: Shield, category: 'Stability' },
  { id: 14, name: 'Recognition', description: 'Being acknowledged and appreciated', icon: Trophy, category: 'Success' },
  { id: 15, name: 'Balance', description: 'Harmony between different life areas', icon: BarChart3, category: 'Well-being' }
];

const SURVEY_QUESTIONS = [
  {
    id: 1,
    question: "When making important life decisions, which factor influences you most?",
    options: [
      { text: "What will make my family proud", values: ['Family'] },
      { text: "What will advance my career", values: ['Career Success', 'Achievement'] },
      { text: "What feels most authentic to me", values: ['Independence', 'Creativity'] },
      { text: "What will help the most people", values: ['Helping Others', 'Community'] }
    ]
  },
  {
    id: 2,
    question: "What would you consider your ideal weekend?",
    options: [
      { text: "Spending quality time with loved ones", values: ['Family', 'Community'] },
      { text: "Working on a personal project or hobby", values: ['Creativity', 'Learning'] },
      { text: "Trying something new and exciting", values: ['Adventure', 'Learning'] },
      { text: "Relaxing and recharging at home", values: ['Balance', 'Health'] }
    ]
  },
  {
    id: 3,
    question: "When you think about your legacy, what matters most?",
    options: [
      { text: "The impact I made on others' lives", values: ['Helping Others', 'Community'] },
      { text: "The creative work I produced", values: ['Creativity', 'Achievement'] },
      { text: "The strong relationships I built", values: ['Family', 'Community'] },
      { text: "The knowledge and wisdom I gained", values: ['Learning', 'Spirituality'] }
    ]
  },
  {
    id: 4,
    question: "What motivates you most in your daily life?",
    options: [
      { text: "Building financial stability", values: ['Financial Security', 'Security'] },
      { text: "Pursuing personal growth", values: ['Learning', 'Health'] },
      { text: "Achieving recognition for my work", values: ['Recognition', 'Career Success'] },
      { text: "Maintaining freedom and flexibility", values: ['Independence', 'Balance'] }
    ]
  },
  {
    id: 5,
    question: "When facing a major challenge, your first instinct is to:",
    options: [
      { text: "Seek advice from trusted friends/family", values: ['Family', 'Community'] },
      { text: "Research and learn everything about it", values: ['Learning', 'Security'] },
      { text: "Trust your intuition and take action", values: ['Independence', 'Adventure'] },
      { text: "Find ways to help others facing similar challenges", values: ['Helping Others', 'Community'] }
    ]
  },
  {
    id: 6,
    question: "What brings you the most satisfaction?",
    options: [
      { text: "Completing a challenging project successfully", values: ['Achievement', 'Career Success'] },
      { text: "Seeing others succeed because of your help", values: ['Helping Others', 'Community'] },
      { text: "Creating something unique and meaningful", values: ['Creativity', 'Spirituality'] },
      { text: "Maintaining harmony in your relationships", values: ['Family', 'Balance'] }
    ]
  },
  {
    id: 7,
    question: "How do you prefer to spend your free time?",
    options: [
      { text: "Exploring new places or activities", values: ['Adventure', 'Learning'] },
      { text: "Volunteering or helping in your community", values: ['Helping Others', 'Community'] },
      { text: "Working on personal skills or hobbies", values: ['Creativity', 'Learning'] },
      { text: "Enjoying peaceful moments with close ones", values: ['Family', 'Balance'] }
    ]
  },
  {
    id: 8,
    question: "What type of work environment do you thrive in?",
    options: [
      { text: "Collaborative team settings", values: ['Community', 'Family'] },
      { text: "Independent, flexible workspace", values: ['Independence', 'Balance'] },
      { text: "High-energy, competitive atmosphere", values: ['Achievement', 'Career Success'] },
      { text: "Creative, innovative environment", values: ['Creativity', 'Learning'] }
    ]
  },
  {
    id: 9,
    question: "When you have extra money, you're most likely to:",
    options: [
      { text: "Save it for future security", values: ['Financial Security', 'Security'] },
      { text: "Spend it on experiences with loved ones", values: ['Family', 'Adventure'] },
      { text: "Invest in learning or self-improvement", values: ['Learning', 'Health'] },
      { text: "Donate to causes you care about", values: ['Helping Others', 'Spirituality'] }
    ]
  },
  {
    id: 10,
    question: "What role do you naturally take in group situations?",
    options: [
      { text: "The leader who organizes and motivates", values: ['Achievement', 'Recognition'] },
      { text: "The supporter who helps others succeed", values: ['Helping Others', 'Community'] },
      { text: "The creative contributor with new ideas", values: ['Creativity', 'Independence'] },
      { text: "The mediator who maintains harmony", values: ['Balance', 'Family'] }
    ]
  },
  {
    id: 11,
    question: "How do you handle stress?",
    options: [
      { text: "Talk it through with family or friends", values: ['Family', 'Community'] },
      { text: "Take time alone to recharge", values: ['Independence', 'Health'] },
      { text: "Channel it into productive work", values: ['Achievement', 'Career Success'] },
      { text: "Practice mindfulness or spiritual activities", values: ['Spirituality', 'Balance'] }
    ]
  },
  {
    id: 12,
    question: "What kind of recognition means the most to you?",
    options: [
      { text: "Public acknowledgment of achievements", values: ['Recognition', 'Career Success'] },
      { text: "Gratitude from people you've helped", values: ['Helping Others', 'Community'] },
      { text: "Respect for your independence and choices", values: ['Independence', 'Security'] },
      { text: "Appreciation for your creative contributions", values: ['Creativity', 'Achievement'] }
    ]
  },
  {
    id: 13,
    question: "In relationships, you value most:",
    options: [
      { text: "Deep emotional connection and trust", values: ['Family', 'Spirituality'] },
      { text: "Mutual respect for independence", values: ['Independence', 'Balance'] },
      { text: "Shared ambitions and goals", values: ['Achievement', 'Career Success'] },
      { text: "Fun adventures and new experiences", values: ['Adventure', 'Learning'] }
    ]
  },
  {
    id: 14,
    question: "What's your approach to learning new things?",
    options: [
      { text: "Structured courses and formal education", values: ['Learning', 'Security'] },
      { text: "Hands-on experimentation and trial", values: ['Adventure', 'Creativity'] },
      { text: "Learning from mentors and community", values: ['Community', 'Family'] },
      { text: "Self-directed research and reading", values: ['Independence', 'Learning'] }
    ]
  },
  {
    id: 15,
    question: "When planning for the future, you prioritize:",
    options: [
      { text: "Financial stability and security", values: ['Financial Security', 'Security'] },
      { text: "Career advancement and success", values: ['Career Success', 'Achievement'] },
      { text: "Personal growth and self-discovery", values: ['Learning', 'Spirituality'] },
      { text: "Strong relationships and family", values: ['Family', 'Community'] }
    ]
  },
  {
    id: 16,
    question: "What gives your life the most meaning?",
    options: [
      { text: "Making a positive difference in the world", values: ['Helping Others', 'Spirituality'] },
      { text: "Achieving personal and professional goals", values: ['Achievement', 'Career Success'] },
      { text: "Creating and expressing yourself", values: ['Creativity', 'Independence'] },
      { text: "Building lasting relationships", values: ['Family', 'Community'] }
    ]
  },
  {
    id: 17,
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Collaborate with others to find solutions", values: ['Community', 'Family'] },
      { text: "Think independently and trust your judgment", values: ['Independence', 'Security'] },
      { text: "Research thoroughly before deciding", values: ['Learning', 'Security'] },
      { text: "Try creative or unconventional approaches", values: ['Creativity', 'Adventure'] }
    ]
  },
  {
    id: 18,
    question: "What's most important in your living situation?",
    options: [
      { text: "Safety and security of the neighborhood", values: ['Security', 'Family'] },
      { text: "Proximity to work and career opportunities", values: ['Career Success', 'Achievement'] },
      { text: "Access to cultural and learning opportunities", values: ['Learning', 'Creativity'] },
      { text: "Freedom to personalize and make it your own", values: ['Independence', 'Creativity'] }
    ]
  },
  {
    id: 19,
    question: "When you're proud of an accomplishment, you:",
    options: [
      { text: "Share it with close family and friends", values: ['Family', 'Community'] },
      { text: "Enjoy the personal satisfaction privately", values: ['Independence', 'Balance'] },
      { text: "Use it as motivation for the next challenge", values: ['Achievement', 'Career Success'] },
      { text: "Reflect on what you learned from the experience", values: ['Learning', 'Spirituality'] }
    ]
  },
  {
    id: 20,
    question: "If you could change one thing about the world, it would be:",
    options: [
      { text: "More opportunities for everyone to succeed", values: ['Helping Others', 'Community'] },
      { text: "Greater respect for individual freedom", values: ['Independence', 'Security'] },
      { text: "More emphasis on creativity and innovation", values: ['Creativity', 'Learning'] },
      { text: "Stronger connections between people", values: ['Family', 'Spirituality'] }
    ]
  }
];

export default function ValuesSurvey() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [valueScores, setValueScores] = useState<Record<string, number>>({});
  const [topValues, setTopValues] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    // Update value scores
    const newScores = { ...valueScores };
    selectedOption.values.forEach(value => {
      newScores[value] = (newScores[value] || 0) + 1;
    });
    setValueScores(newScores);

    if (currentQuestion < SURVEY_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newScores);
    }
  };

  const calculateResults = (scores: Record<string, number>) => {
    const sortedValues = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([valueName, score]) => {
        const valueData = VALUES_DATA.find(v => v.name === valueName);
        return {
          ...valueData,
          score,
          percentage: Math.round((score / SURVEY_QUESTIONS.length) * 100)
        };
      });
    
    setTopValues(sortedValues);
    setCurrentScreen('results');
  };

  const resetSurvey = () => {
    setCurrentScreen('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setValueScores({});
    setTopValues([]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 p-3 rounded-full transition-all duration-300 z-10 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white text-gray-600 hover:bg-gray-100'
      } shadow-lg`}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  const WelcomeScreen = () => (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <ThemeToggle />
      <div className={`max-w-2xl w-full rounded-2xl shadow-xl p-8 text-center transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white'
      }`}>
        <div className="mb-8">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isDarkMode 
              ? 'bg-indigo-900/50' 
              : 'bg-indigo-100'
          }`}>
            <Heart className={`w-10 h-10 ${
              isDarkMode 
                ? 'text-indigo-400' 
                : 'text-indigo-600'
            }`} />
          </div>
          <h1 className={`text-3xl font-bold mb-4 ${
            isDarkMode 
              ? 'text-white' 
              : 'text-gray-800'
          }`}>Personal Values Discovery</h1>
          <p className={`text-lg leading-relaxed ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            Understanding your core values is essential for making decisions that align with who you truly are. 
            This survey will help you identify what matters most to you in life.
          </p>
        </div>
        
        <div className={`rounded-lg p-6 mb-8 ${
          isDarkMode 
            ? 'bg-blue-900/30 border border-blue-800/50' 
            : 'bg-blue-50'
        }`}>
          <h3 className={`font-semibold mb-2 ${
            isDarkMode 
              ? 'text-blue-300' 
              : 'text-blue-800'
          }`}>What to expect:</h3>
          <ul className={`space-y-1 ${
            isDarkMode 
              ? 'text-blue-200' 
              : 'text-blue-700'
          }`}>
            <li>• 20 thoughtful questions about your preferences</li>
            <li>• Takes approximately 8-10 minutes to complete</li>
            <li>• Personalized results showing your top 5 values</li>
          </ul>
        </div>

        <button
          onClick={() => setCurrentScreen('survey')}
          className={`font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center gap-2 mx-auto ${
            isDarkMode 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          Begin Survey <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const SurveyScreen = () => {
    const question = SURVEY_QUESTIONS[currentQuestion];
    const progress = ((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100;

    return (
      <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}>
        <ThemeToggle />
        <div className={`max-w-3xl w-full rounded-2xl shadow-xl p-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white'
        }`}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-medium ${
                isDarkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
              }`}>
                Question {currentQuestion + 1} of {SURVEY_QUESTIONS.length}
              </span>
              <span className={`text-sm font-medium ${
                isDarkMode 
                  ? 'text-indigo-400' 
                  : 'text-indigo-600'
              }`}>
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className={`w-full rounded-full h-2 mb-6 ${
              isDarkMode 
                ? 'bg-gray-700' 
                : 'bg-gray-200'
            }`}>
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-indigo-500' 
                    : 'bg-indigo-600'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode 
                ? 'text-white' 
                : 'text-gray-800'
            }`}>{question.question}</h2>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isDarkMode 
                      ? 'border border-gray-600 hover:border-indigo-500 hover:bg-gray-700/50' 
                      : 'border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <span className={`font-medium ${
                    isDarkMode 
                      ? 'text-gray-100' 
                      : 'text-gray-800'
                  }`}>{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className={`flex items-center gap-2 transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous Question
            </button>
          )}
        </div>
      </div>
    );
  };

  const ResultsScreen = () => (
    <div className={`min-h-screen p-4 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <ThemeToggle />
      <div className="max-w-4xl mx-auto">
        <div className={`rounded-2xl shadow-xl p-8 mb-6 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white'
        }`}>
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode 
                ? 'bg-green-900/50' 
                : 'bg-green-100'
            }`}>
              <BarChart3 className={`w-10 h-10 ${
                isDarkMode 
                  ? 'text-green-400' 
                  : 'text-green-600'
              }`} />
            </div>
            <h1 className={`text-3xl font-bold mb-4 ${
              isDarkMode 
                ? 'text-white' 
                : 'text-gray-800'
            }`}>Your Top Values</h1>
            <p className={`text-lg ${
              isDarkMode 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Based on your responses, here are the values that matter most to you:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.id} className={`rounded-xl p-6 border transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-600 border-gray-600' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index === 0 ? (isDarkMode ? 'bg-yellow-900/50' : 'bg-yellow-100') : 
                        index === 1 ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-100') : 
                        index === 2 ? (isDarkMode ? 'bg-orange-900/50' : 'bg-orange-100') : 
                        (isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100')
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          index === 0 ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600') : 
                          index === 1 ? (isDarkMode ? 'text-gray-400' : 'text-gray-600') : 
                          index === 2 ? (isDarkMode ? 'text-orange-400' : 'text-orange-600') : 
                          (isDarkMode ? 'text-blue-400' : 'text-blue-600')
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-bold ${
                          isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>#{index + 1} {value.name}</h3>
                        {index === 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode 
                              ? 'bg-yellow-900/50 text-yellow-300' 
                              : 'bg-yellow-200 text-yellow-800'
                          }`}>Top Value</span>
                        )}
                      </div>
                      <p className={`text-sm mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{value.description}</p>
                      <div className="flex items-center gap-2">
                        <div className={`flex-1 rounded-full h-2 ${
                          isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <div 
                            className={`h-2 rounded-full ${
                              index === 0 ? (isDarkMode ? 'bg-yellow-400' : 'bg-yellow-500') : 
                              index === 1 ? (isDarkMode ? 'bg-gray-400' : 'bg-gray-500') : 
                              index === 2 ? (isDarkMode ? 'bg-orange-400' : 'bg-orange-500') : 
                              (isDarkMode ? 'bg-blue-400' : 'bg-blue-500')
                            }`}
                            style={{ width: `${(value.score / Math.max(...topValues.map(v => v.score))) * 100}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{value.score}/{SURVEY_QUESTIONS.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`rounded-2xl shadow-xl p-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Understanding Your Results</h2>
          <div className={`mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p>
              Your top value, <strong>{topValues[0]?.name}</strong>, appeared in {topValues[0]?.score} out of {SURVEY_QUESTIONS.length} of your responses. 
              This suggests it plays a significant role in your decision-making and life satisfaction.
            </p>
            <p className="mt-4">
              Consider how you can better align your daily choices, career decisions, and relationships with these core values 
              to live a more fulfilling and authentic life.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetSurvey}
              className={`font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              Take Survey Again
            </button>
            <button
              onClick={() => window.print()}
              className={`font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              Save Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'survey' && <SurveyScreen />}
      {currentScreen === 'results' && <ResultsScreen />}
    </div>
  );
}