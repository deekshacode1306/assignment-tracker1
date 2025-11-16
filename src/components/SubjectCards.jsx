const subjects = [
  { id: 1, name: 'Java', color: 'from-orange-400 via-red-500 to-pink-500', icon: '☕', glow: 'hover:shadow-orange-500/50' },
  { id: 2, name: 'Python', color: 'from-blue-400 via-cyan-500 to-teal-500', icon: '🐍', glow: 'hover:shadow-cyan-500/50' },
  { id: 3, name: 'WebTech', color: 'from-green-400 via-emerald-500 to-teal-500', icon: '🌐', glow: 'hover:shadow-emerald-500/50' },
  { id: 4, name: 'Agile', color: 'from-purple-400 via-violet-500 to-pink-500', icon: '🚀', glow: 'hover:shadow-violet-500/50' },
  { id: 5, name: 'AIML', color: 'from-indigo-400 via-purple-500 to-pink-500', icon: '🤖', glow: 'hover:shadow-purple-500/50' },
];

function SubjectCards({ onSubjectClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
      {subjects.map((subject) => (
        <div 
          key={subject.id}
          onClick={() => onSubjectClick(subject)}
          className={`bg-gradient-to-br ${subject.color} p-8 rounded-2xl shadow-2xl cursor-pointer ${subject.glow} transform hover:scale-110 hover:rotate-1 transition-all duration-500 border-2 border-white/30 w-full max-w-sm text-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          <div className="text-6xl mb-6 flex justify-center relative z-10 animate-bounce">{subject.icon}</div>
          <h2 className="text-3xl font-extrabold mb-3 text-white relative z-10 drop-shadow-lg">{subject.name}</h2>
          <p className="text-white/90 relative z-10 font-medium">Click to explore assignments</p>
        </div>
      ))}
    </div>
  );
}

export default SubjectCards;