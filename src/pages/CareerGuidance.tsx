
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CareerGuidance = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            Career Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic career development and transition planning for academic professionals seeking to advance their careers.
          </p>
        </div>

        {/* Service Description */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <p className="text-gray-700 mb-6">
              This specialized service is tailored for doctoral candidates who anticipate defending their thesis within the next six 
              months, as well as recent PhD graduates who are actively exploring their professional opportunities and career 
              trajectories.
            </p>

            <p className="text-gray-700 mb-6">
              Throughout my professional journey, I have cultivated extensive experience across diverse sectors and roles. My 
              career has encompassed positions as a research engineer and R&D director in industry, co-founding a technology 
              startup, conducting advanced research as a scientist at the University of Michigan, and serving as a faculty member at 
              the Technion. This multifaceted background provides me with comprehensive insights into the varied career pathways 
              available to PhD holders across different professional landscapes.
            </p>

            <p className="text-gray-700 mb-6">
              While I work with individuals from all academic disciplines, my expertise is particularly well-suited for PhDs in 
              Engineering, Sciences, and Architecture. I am committed to sharing my experience and providing guidance to help 
              you identify career opportunities that align with your unique strengths, personal values, and professional aspirations.
            </p>

            <p className="text-gray-700 mb-6">
              Through our collaborative process, we will examine critical questions that shape career decisions, including whether 
              academia represents the optimal path for your goals or simply the most familiar option. We will explore the strategic 
              value of pursuing postdoctoral positions, investigate opportunities for researchers within high-technology industries, 
              and assess how PhDs are valued and utilized in the private sector.
            </p>

            <p className="text-gray-700">
              Our discussions will address concerns about being overqualified for industry positions versus leveraging advanced 
              education as a competitive advantage. We will examine career possibilities in public service and education, evaluate 
              the merit of obtaining teaching certifications as professional insurance, and assess your entrepreneurial potential 
              along with associated rewards and risks. Additionally, we will analyze pathways that offer enhanced financial stability 
              or greater personal autonomy, among numerous other important considerations.
            </p>
          </CardContent>
        </Card>

        {/* Two Column Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Career Transition Strategy */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#2E4A87]">
                Career Transition Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2E4A87] mr-2">•</span>
                  Academic to industry transition planning
                </li>
                <li className="flex items-start">
                  <span className="text-[#2E4A87] mr-2">•</span>
                  Career path exploration and evaluation
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Professional Development */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#2E4A87]">
                Professional Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2E4A87] mr-2">•</span>
                  Leadership and management skill building
                </li>
                <li className="flex items-start">
                  <span className="text-[#2E4A87] mr-2">•</span>
                  Communication and presentation training
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Note */}
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 italic text-center">
              Note: Some of the following services will be supplied by other experts. For example, Social media and online presence.
            </p>
          </CardContent>
        </Card>

        {/* Final Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            These career decisions carry significant long-term implications for your professional and personal fulfillment. My role 
            is to facilitate clarity regarding your options—both within and beyond academic institutions—and to support you in 
            making confident, well-informed choices. My objective is to help you identify what genuinely inspires and motivates 
            you professionally, and to provide strategic guidance that positions you for success in your chosen direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
