
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Dr. Katz, I started my PhD thinking it would be straightforward – research, plan, publish, done! Reality hit hard when I discovered how complex everything really is, from administrative hurdles to challenging advisor relationships. I'm juggling two major studies, and you showed me how to work on both simultaneously while factoring in personal life (like having a baby!). Now I can see the big picture while still managing daily tasks effectively. The best part? Your planning approach gave me something I desperately needed – peace of mind and confidence. When unexpected life events come up recently, instead of panicking, I could calmly reorganize using the framework we created together. I even learned how to better involve my advisor in the process. Thank you for transforming my PhD experience from overwhelming chaos into manageable progress!",
      author: "Helen",
      position: "Department of Psychology"
    },
    {
      id: 2,
      rating: 5,
      text: "Hello Reuven, Like many PhD students, I often felt like I was stuck in my own time on the right track. But today, instead of feeling overwhelmed by the massive task of writing a dissertation, I learned to break down my research into smaller, manageable projects with realistic timelines. The organizational techniques I gained help me stay focused day-to-day. What I loved most is that you gave me specific advice on staying operational and communicating more effectively with my advisor. The individual meetings were incredibly valuable and tailored to my exact needs. Now, I am motivated and excited to create my project plans – that enthusiasm has stayed with me ever since!",
      author: "Bridgit",
      position: "PhD in English Literature"
    },
    {
      id: 3,
      rating: 5,
      text: "Hi Reuven, Thank you for your effective consulting. My advisors were impressed when I showed them my new research plan. Now I update it each semester, track what worked (and what didn't), and discuss any changes with them. I've even shared my knowledge with my lab mates, and they're really interested in applying these techniques too. Thanks for such a practical and encouraging experience!",
      author: "Moses",
      position: "PhD candidate in Computer Science"
    },
    {
      id: 4,
      rating: 5,
      text: "Hello Reuven, The career transition support was exceptional. I successfully moved from academia to consulting with confidence and clarity about my professional direction. I use my skills and get outstanding feedback. Thanks",
      author: "Anonymous",
      position: "Former PhD Candidate"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients say about their experience working with our PhD experts. Their 
            success stories demonstrate the impact of our personalized consulting approach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#2E4A87]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2E4A87] hover:bg-[#1e3a6f] text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-[#2E4A87] text-[#2E4A87] hover:bg-[#2E4A87] hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
