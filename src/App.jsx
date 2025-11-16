import { useState } from 'react';
import SubjectCards from './components/SubjectCards';
import SubjectDetail from './components/SubjectDetail';
import ExpiredAssignments from './components/ExpiredAssignments';

function App() {
  const [view, setView] = useState('buttons'); // 'buttons', 'active', 'subject', 'expired'
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleActiveClick = () => {
    setView('active');
  };

  const handleExpiredClick = () => {
    setView('expired');
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setView('subject');
  };

  const handleBack = () => {
    setView('buttons');
  };

  return (
  
<div className="min-h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 via-violet-300/20 to-pink-300/20 animate-pulse"></div>
  <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-300/40 rounded-full blur-2xl animate-bounce"></div>
  <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-300/40 rounded-full blur-2xl animate-pulse"></div>
  <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-300/40 rounded-full blur-2xl animate-ping"></div>
  <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-red-300/40 rounded-full blur-2xl animate-bounce"></div>

      
      {view === 'buttons' ? (
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-black mb-12 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Assignment Tracker
          </h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <button 
              onClick={handleActiveClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold py-5 px-12 rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 text-xl border-2 border-white/30"
            >
              🚀 Active Assignments
            </button>
            <button 
              onClick={handleExpiredClick}
              className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-extrabold py-5 px-12 rounded-full shadow-2xl hover:shadow-rose-500/50 transform hover:scale-110 transition-all duration-300 text-xl border-2 border-white/30"
            >
              ⏰ Expired Assignments
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-7xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-white/50 relative z-10">
          {view === 'active' && (
            <div className="animate-fade-in text-center">
              <button 
                onClick={handleBack}
                className="mb-10 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
              >
                ← Back to Home
              </button>
              <SubjectCards onSubjectClick={handleSubjectClick} />
            </div>
          )}

          {view === 'subject' && selectedSubject && (
            <div className="animate-fade-in text-center">
              <button 
                onClick={handleBack}
                className="mb-10 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
              >
                ← Back to Subjects
              </button>
              <SubjectDetail subject={selectedSubject} />
            </div>
          )}

          {view === 'expired' && (
            <div className="animate-fade-in text-center">
              <button 
                onClick={handleBack}
                className="mb-10 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
              >
                ← Back to Home
              </button>
              <ExpiredAssignments />
            </div>
          )}
        </div>
      )}
  </div>
  );
}

export default App;