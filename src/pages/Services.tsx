
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const individualConsultingServices = [
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-girassol font-bold text-[#2E4A87] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for doctoral students and PhD graduates at every stage of their academic journey.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="individual" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="individual" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Individual Consulting
              </TabsTrigger>
              <TabsTrigger 
                value="career" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Career Guidance
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Individual Consulting Tab Content */}
          <TabsContent value="individual" className="space-y-8">
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
                Through personalized consulting, we help PhD students with:
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                {individualConsultingServices.map((service, index) => (
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
                <p className="text-gray-700 mb-6">
                  Both Hila and Reuven are former international students and mentors to many international graduate students. We 
                  understand the unique hurdles you may be facing. If you're struggling to advance in your research or feeling isolated, 
                  we invite you to reach out. Let's work together to turn challenges into achievable steps toward success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3">
                    <Link to="/contact">
                      Schedule a Meeting
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Career Guidance Tab Content */}
          <TabsContent value="career" className="space-y-8">
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
                <p className="text-sm text-gray-600 italic text-center mb-6">
                  Note: Some of the following services will be supplied by other experts. For example, Social media and online presence.
                </p>
                <p className="text-lg text-gray-700 text-center">
                  These career decisions carry significant long-term implications for your professional and personal fulfillment. My role 
                  is to facilitate clarity regarding your options—both within and beyond academic institutions—and to support you in 
                  making confident, well-informed choices. My objective is to help you identify what genuinely inspires and motivates 
                  you professionally, and to provide strategic guidance that positions you for success in your chosen direction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button asChild className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3">
                    <Link to="/contact">
                      Schedule a Meeting
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
