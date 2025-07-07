
import { Card, CardContent } from '@/components/ui/card';

const IndividualConsulting = () => {
  const services = [
    "Receiving support from a caring, experienced, and objective mentors",
    "Structuring your research and setting realistic, achievable goals",
    "Choosing the right advisor or improving communication with your current one",
    "Developing effective time management and daily routines",
    "Conducting a focused and productive literature review",
    "Strengthening relationships with peers, family, and friends",
    "Finding a healthy balance between work and rest",
    "Identifying and addressing potential crises before they escalate",
    "Maintaining steady progress on your thesis or dissertation",
    "If your major is in science or engineering, talk to Reuven. If your major is in humanities, Hila is the better choice",
    "And much more..."
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            Individual Consulting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized one-on-one consulting sessions designed to address your specific academic and research needs.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <div className="space-y-6 text-gray-700">
              <p>
                Pursuing a PhD is a rewarding but often overwhelming journey. If you're feeling stressed, stuck, or uncertain, you're 
                not alone—and you don't have to go through it by yourself. Our coaching services are designed to bring clarity, 
                structure, and renewed confidence into your academic life.
              </p>

              <p>
                Doctoral studies come with a unique set of challenges: managing independent research, writing a dissertation, 
                meeting expectations to publish, and maintaining motivation over the long term. Many students also grapple with 
                isolation, financial pressures, and personal struggles that can intensify stress. For international students, these 
                challenges are often compounded by cultural adjustment and being far from home.
              </p>

              <p>
                If you're having difficulty making progress, we are here to help you regain momentum and move forward with purpose.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How Can We Support You Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#2E4A87] mb-8 text-center">
            How Can We Support You
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Through personalized consulting, I help PhD students with:
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#2E4A87] mr-3 mt-1 flex-shrink-0">•</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <Card className="bg-gray-50">
          <CardContent className="p-8 text-center">
            <p className="text-gray-700">
              Both Hila and Reuven are former international student and mentors to many international graduate students. We 
              understand the unique hurdles you may be facing. If you're struggling to advance in your research or feeling isolated, 
              We invite you to reach out. Let's work together to turn challenges into achievable steps toward success.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndividualConsulting;
