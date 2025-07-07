
const About = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-[#2E4A87]">🏠 Back to Home</a>
          </nav>
          
          <h1 className="text-4xl font-serif font-bold text-[#2E4A87] mb-8">About Us</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Pursuing a doctorate involves far more than conducting research—it requires knowledge of how to master an 
            extensive project which often is loosely structured and has limited institutional guidance. While doctoral students 
            receive rigorous training in their specialized fields, they seldom receive preparation in project management principles 
            that are essential for success in long-term, complex research projects. This often leads to stagnation and frustration.
          </p>

          <p className="text-gray-700 mb-8">
            Our mission is to bridge this gap, helping students overcome obstacles and develop the skills to thrive throughout 
            their academic journey. We specialize in assisting doctoral students to develop strategic and organizational skills to 
            bring the dissertation to a successful completion.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-6">
            Our consultancy offers support in several key areas:
          </h2>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-[#2E4A87] mr-2">•</span>
              Project organization and time management.
            </li>
            <li className="flex items-start">
              <span className="text-[#2E4A87] mr-2">•</span>
              Development of productive work habits.
            </li>
            <li className="flex items-start">
              <span className="text-[#2E4A87] mr-2">•</span>
              Building effective advisor-student relationships.
            </li>
            <li className="flex items-start">
              <span className="text-[#2E4A87] mr-2">•</span>
              Proactive identification and avoidance of common obstacles that derail doctoral progress.
            </li>
            <li className="flex items-start">
              <span className="text-[#2E4A87] mr-2">•</span>
              Navigating your transition between doctoral studies and your career.
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            We invite you to explore this website to learn more about our approach and services. For direct inquiries, please 
            contact <a href="mailto:Reuven.Katz@gmail.com" className="text-[#2E4A87] hover:underline">Reuven.Katz@gmail.com</a>.
          </p>

          <p className="text-gray-700">
            I welcome the opportunity to discuss how we can work together to advance your doctoral success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
