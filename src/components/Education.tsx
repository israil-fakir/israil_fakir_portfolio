import { Award, Calendar, GraduationCap, Trophy } from 'lucide-react';

// Education component - shows your academic background
const Education = () => {

  const education = [
    {
      degree: "Under Graduation",
      field: "Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      period: "2022 - Early in 2026",
      // gpa: "CGPA: 3.30",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science",
      institution: "Narsingdi Public College",
      period: "2019 - 2020",
      // gpa: "GPA: 4.33",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const achievements = [
    "Red Hat System Administration Certificate",
    "Basic Ethical Hacking Course Certificate",
    "AI+ Prompt Engineer Level 1"
  ];

  const activities = [
    "HackTheAI 2025 Finalist (powered by SmythOS) – Top 50 out of 242 teams",
    "Blood Donation",
    "Class Representative (CR)",
    "Social Works",
    "Club Activities",
    "Volunteering"
  ];

  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {/* <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> */}
            <span className="text-blue-400"> 
              Education & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16"></div>
        </div>

        {/* Main content - two columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-blue-400 mr-3">{edu.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <p className="text-blue-400 font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-slate-400 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      {/* <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                        {edu.gpa}
                      </span> */}
                    </div>
                  </div>
                  <p className="text-slate-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="space-y-8">
            {/* Achievements */}
            {/* <div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-blue-400" />
                Achievements
              </h3>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* Extracurricular Activities */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Extracurricular Activities
              </h3>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start text-slate-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;