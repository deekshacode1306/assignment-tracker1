import { useState } from 'react';

const mockData = {
  Java: {
    students: ['Alice', 'Bob', 'Charlie'],
    assignments: [
      { id: 1, name: 'Week 1: Java Basics', deadline: '2023-10-15', completed: { Alice: false, Bob: true, Charlie: false } },
      { id: 2, name: 'Week 2: OOP Concepts', deadline: '2023-10-22', completed: { Alice: true, Bob: false, Charlie: true } },
      { id: 3, name: 'Week 3: Collections', deadline: '2023-10-29', completed: { Alice: false, Bob: false, Charlie: false } },
    ],
  },
  Python: {
    students: ['Alice', 'Bob', 'Charlie', 'Diana'],
    assignments: [
      { id: 1, name: 'Week 1: Python Fundamentals', deadline: '2023-10-15', completed: { Alice: true, Bob: true, Charlie: false, Diana: true } },
      { id: 2, name: 'Week 2: Data Structures', deadline: '2023-10-22', completed: { Alice: false, Bob: true, Charlie: true, Diana: false } },
    ],
  },
  WebTech: {
    students: ['Alice', 'Bob'],
    assignments: [
      { id: 1, name: 'Week 1: HTML & CSS Basics', deadline: '2023-10-15', completed: { Alice: true, Bob: false } },
      { id: 2, name: 'Week 2: JavaScript Intro', deadline: '2023-10-22', completed: { Alice: false, Bob: true } },
    ],
  },
  Agile: {
    students: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    assignments: [
      { id: 1, name: 'Week 1: Scrum Framework', deadline: '2023-10-15', completed: { Alice: true, Bob: false, Charlie: true, Diana: false, Eve: true } },
    ],
  },
  AIML: {
    students: ['Alice', 'Bob', 'Charlie'],
    assignments: [
      { id: 1, name: 'Week 1: Machine Learning Basics', deadline: '2023-10-15', completed: { Alice: false, Bob: true, Charlie: false } },
      { id: 2, name: 'Week 2: Neural Networks', deadline: '2023-10-22', completed: { Alice: true, Bob: false, Charlie: true } },
    ],
  },
};

function SubjectDetail({ subject }) {
  const [data, setData] = useState(mockData[subject.name]);

  const handleCompletionChange = (assignmentId, student, isCompleted) => {
    setData(prevData => ({
      ...prevData,
      assignments: prevData.assignments.map(assignment =>
        assignment.id === assignmentId
          ? { ...assignment, completed: { ...assignment.completed, [student]: isCompleted } }
          : assignment
      ),
    }));
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-2xl p-8 mx-auto max-w-7xl border-2 border-gray-200/50">
      <h2 className="text-4xl font-black mb-8 text-gray-800 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {subject.name} Assignments
      </h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse mx-auto rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
              <th className="py-5 px-8 text-left font-bold text-lg">Assignment</th>
              <th className="py-5 px-8 text-left font-bold text-lg">Deadline</th>
              {data.students.map(student => (
                <th key={student} className="py-5 px-8 text-center font-bold text-lg">{student}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.assignments.map((assignment, index) => (
              <tr key={assignment.id} className={`hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="py-5 px-8 border-b border-gray-200 font-semibold text-gray-800">{assignment.name}</td>
                <td className="py-5 px-8 border-b border-gray-200 text-gray-600 font-medium">{assignment.deadline}</td>
                {data.students.map(student => (
                  <td key={student} className="py-5 px-8 border-b border-gray-200 text-center">
                    <select
                      value={assignment.completed[student] ? 'completed' : 'not completed'}
                      onChange={(e) => handleCompletionChange(assignment.id, student, e.target.value === 'completed')}
                      className="border-2 border-gray-300 rounded-xl px-4 py-3 bg-white hover:border-purple-400 focus:border-purple-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <option value="not completed">❌ Not Completed</option>
                      <option value="completed">✅ Completed</option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubjectDetail;