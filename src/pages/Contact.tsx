import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E4A87] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your doctoral journey? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#2E4A87]">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="field">Field of Study</Label>
                <Input id="field" placeholder="e.g., Computer Science, Psychology, etc." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stage">Current Stage</Label>
                <select id="stage" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select your current stage</option>
                  <option value="early-phd">Early PhD (1st-2nd year)</option>
                  <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                  <option value="late-phd">Late PhD (5th+ year)</option>
                  <option value="writing">Writing dissertation</option>
                  <option value="recent-grad">Recent PhD graduate</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">How can we help you?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your specific challenges or goals..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#2E4A87]">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:Reuven.Katz@gmail.com" className="text-[#2E4A87] hover:underline">
                      Reuven.Katz@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#2E4A87]">Schedule a Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ready to start your consultation? Schedule a meeting directly through our calendar system.
                </p>
                <Button asChild className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                  <Link to="/schedule">
                    Schedule Meeting
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600 text-sm">
                  We typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
