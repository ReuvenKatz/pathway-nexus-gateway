
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-girassol font-bold text-[#2E4A87] mb-6">
              PHD GATEWAY CONSULTING
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Professional guidance from experienced experts Reuven and Hila. Advancing careers 
              and doctoral research with individual consulting services.
            </p>
            
            {/* Yellow Illustration */}
            <div className="mb-12">
              <img
                src="/lovable-uploads/79617020-94dd-435f-89b0-a5e1eb5fec83.png"
                alt="PhD Graduate Illustration"
                className="mx-auto max-w-sm h-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3 text-lg">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3 text-lg">
                <Link to="/contact">
                  Get Started Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Reuven Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">
                  Meet Reuven Katz, PhD, MBA
                </h3>
                <p className="text-gray-600 mb-6">
                  Experienced PhD consultant specializing in research management and academic career development 
                  mainly in science and engineering.
                </p>
                <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hila Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-[#2E4A87] mb-4">
                  Meet Hila Katz, EdD
                </h3>
                <p className="text-gray-600 mb-6">
                  Expert consultant with extensive experience in students' guidance in humanities.
                </p>
                <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
