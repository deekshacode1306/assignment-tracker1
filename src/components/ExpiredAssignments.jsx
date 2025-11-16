const expiredAssignments = [
  { id: 1, name: 'Week 1: Java Basics (Java)', date: '2023-10-15' },
  { id: 2, name: 'Week 1: Python Fundamentals (Python)', date: '2023-10-15' },
  { id: 3, name: 'Week 1: HTML & CSS Basics (WebTech)', date: '2023-10-15' },
  { id: 4, name: 'Week 1: Scrum Framework (Agile)', date: '2023-10-15' },
  { id: 5, name: 'Week 1: Machine Learning Basics (AIML)', date: '2023-10-15' },
];

import React from "react";

function ExpiredAssignments() {
  // 👉 Replace this with your real expired data
  //const expiredAssignments = [
    //{ id: 1, name: "Maths Assignment", date: "2025-01-12" },
   // { id: 2, name: "Computer Networks Report", date: "2025-01-08" },
    //{ id: 3, name: "E-Commerce Notes", date: "2025-01-05" },
  //];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className=" bg-red-200 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mx-auto max-w-5xl border border-red-200/40 animate-fade-in">

        {/* Heading */}
        <h2 className="text-4xl font-black mb-8 text-gray-800 text-center bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
          Expired Assignments
        </h2>

        {/* Count */}
        <p className="mb-8 text-xl text-gray-700 text-center font-semibold">
          Total expired assignments:{" "}
          <span className="text-red-600 font-black text-2xl">
            {expiredAssignments.length}
          </span>
        </p>

        {/* Assignment List */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {expiredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-gradient-to-r from-red-100 via-rose-100 to-pink-100 
              p-6 rounded-xl shadow-lg border-l-8 border-red-500 
              hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-105 
              transition-all duration-300"
            >
              <h3 className="font-bold text-gray-800 mb-2 text-center text-xl">
                {assignment.name}
              </h3>

              <p className="text-gray-700 text-center font-medium">
                Expired on:{" "}
                <span className="text-red-600 font-bold">{assignment.date}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ExpiredAssignments;
