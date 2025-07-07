
import { useEffect } from 'react';

const Schedule = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            Schedule with Reuven
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your consultation session with Reuven to discuss your academic goals and challenges.
          </p>
        </div>

        {/* Session Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">What to Expect</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Initial assessment of your current situation and goals</li>
                <li>• Discussion of challenges and opportunities</li>
                <li>• Personalized strategy recommendations</li>
                <li>• Next steps and follow-up planning</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">Session Details</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Duration:</strong> 45 minutes</p>
                <p><strong>Format:</strong> Video call (Zoom/Teams)</p>
                <p><strong>Preparation:</strong> Please prepare a brief overview of your current situation and goals</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-[#2E4A87] mb-6 text-center">Schedule Your Session</h2>
            <p className="text-gray-600 text-center mb-6">Choose a convenient time for your consultation</p>
            
            {/* Calendly Embedded Widget */}
            <div className="calendly-inline-widget min-h-[650px] w-full" 
                 data-url="https://calendly.com/reuven-katz/one-on-one-with-reuven"
                 style={{ minWidth: '320px', height: '650px' }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
