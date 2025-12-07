import { Download, FileText, User } from 'lucide-react';

// Resume component - download resume section
const Resume = () => {

  const handleDownload = () => {
    // Google Drive link
    const resumeLink = "https://drive.google.com/file/d/1lyZlnH1yEE24UzpexmjkzMfUIj-bMXx7/view?usp=drive_link";
    window.open(resumeLink, '_blank');
  };

  return (
    <section id="resume" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">
              Download Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience, skills, and achievements in a downloadable format.
          </p>
        </div>

        {/* Resume download section */}
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Resume
            </h3>
            
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Download my latest resume to learn more about my professional background, 
              technical skills, project experience, and educational qualifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-slate-300">
                {/* <User className="w-5 h-5 mr-2 text-blue-400" /> */}
                {/* <span>Updated: last modified 21 sep 2025</span> */}
              </div>
              <div className="flex items-center text-slate-300">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                <span>PDF Format</span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Resume
            </button>

            <p className="text-slate-500 text-sm mt-4">
              Click to view and download from Google Drive
            </p>
          </div>
        </div>

        {/* Additional info section */}
        {/* <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/30">
              <h4 className="text-lg font-semibold text-white mb-2">Professional Experience</h4>
              <p className="text-slate-400 text-sm">Detailed work history and project contributions</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/30">
              <h4 className="text-lg font-semibold text-white mb-2">Technical Skills</h4>
              <p className="text-slate-400 text-sm">Comprehensive list of programming languages and tools</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/30">
              <h4 className="text-lg font-semibold text-white mb-2">Education & Certifications</h4>
              <p className="text-slate-400 text-sm">Academic background and professional certifications</p>
            </div>
          </div>
        </div>        */}
    </section>
  );
};

export default Resume;
