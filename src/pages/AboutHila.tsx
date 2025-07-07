
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutHila = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            About Hila
          </h1>
          <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic Coach & Consultant for Doctoral Students and PhDs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Photo */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg aspect-[3/4] flex items-center justify-center">
              <span className="text-gray-500">Professional Photo Placeholder</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Content about Hila will be added here. Please provide the text you'd like to include for Hila's biography, 
                background, expertise, and approach to doctoral student coaching.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                Contact Hila
              </Button>
              <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3">
                <Link to="/schedule">
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHila;
