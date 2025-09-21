
// Skills component - shows your technical abilities
const Skills = () => {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "Python", "PHP", "Go"]
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "TailwindCSS", "React", "JavaScript"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "GitHub", "Vercel", "VS Code", "PyCharm", "Figma", "Canva", "LaTeX", "XAMPP"]
    },
    {
      title: "Core Concepts",
      skills: ["Algorithm", "Data Structure", "OOP", "System Design", "Ethical Hacking"]
    }
  ];

  const languages = [
    { name: "English", level: "Intermediate" },
    { name: "Bangla", level: "Fluent" }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-blue-600/20 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages card */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-300">{lang.name}</span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;