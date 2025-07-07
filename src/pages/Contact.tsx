
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Contact = () => {
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your doctoral journey? We're here to help you succeed.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reuven" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="reuven" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Contact Reuven
              </TabsTrigger>
              <TabsTrigger 
                value="hila" 
                className="text-sm font-medium py-2 px-4 rounded-md transition-all data-[state=active]:bg-[#2E4A87] data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Contact Hila
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reuven" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#2E4A87]">Get In Touch with Reuven</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="reuven-name">Full Name</Label>
                    <Input id="reuven-name" placeholder="Your full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reuven-email">Email Address</Label>
                    <Input id="reuven-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reuven-field">Field of Study</Label>
                    <Input id="reuven-field" placeholder="e.g., Computer Science, Psychology, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reuven-stage">Current Stage</Label>
                    <select id="reuven-stage" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select your current stage</option>
                      <option value="early-phd">Early PhD (1st-2nd year)</option>
                      <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                      <option value="late-phd">Late PhD (5th+ year)</option>
                      <option value="writing">Writing dissertation</option>
                      <option value="recent-grad">Recent PhD graduate</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reuven-message">How can Reuven help you?</Label>
                    <Textarea 
                      id="reuven-message" 
                      placeholder="Tell us about your specific challenges or goals..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                    Send Message to Reuven
                  </Button>
                </CardContent>
              </Card>

              {/* Calendly and Contact Info */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#2E4A87]">Schedule with Reuven</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Book a consultation session directly with Reuven.
                    </p>
                    {/* Calendly Embedded Widget */}
                    <div className="calendly-inline-widget min-h-[400px] w-full" 
                         data-url="https://calendly.com/reuven-katz/one-on-one-with-reuven"
                         style={{ minWidth: '320px', height: '400px' }}>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#2E4A87]">Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Reuven</h4>
                      <p className="text-gray-600">
                        <a href="mailto:Reuven.Katz@gmail.com" className="text-[#2E4A87] hover:underline">
                          Reuven.Katz@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hila" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form for Hila */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#2E4A87]">Get In Touch with Hila</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="hila-name">Full Name</Label>
                    <Input id="hila-name" placeholder="Your full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hila-email">Email Address</Label>
                    <Input id="hila-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hila-field">Field of Study</Label>
                    <Input id="hila-field" placeholder="e.g., Computer Science, Psychology, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hila-stage">Current Stage</Label>
                    <select id="hila-stage" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select your current stage</option>
                      <option value="early-phd">Early PhD (1st-2nd year)</option>
                      <option value="mid-phd">Mid PhD (3rd-4th year)</option>
                      <option value="late-phd">Late PhD (5th+ year)</option>
                      <option value="writing">Writing dissertation</option>
                      <option value="recent-grad">Recent PhD graduate</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hila-message">How can Hila help you?</Label>
                    <Textarea 
                      id="hila-message" 
                      placeholder="Tell us about your specific challenges or goals..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-[#2E4A87] hover:bg-[#1e3a6f] text-white">
                    Send Message to Hila
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder for Hila's Calendly */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-[#2E4A87]">Schedule with Hila</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Scheduling with Hila will be available soon. For now, please use the contact form to reach out.
                    </p>
                    {/* Placeholder iframe for future Calendly integration */}
                    <div className="min-h-[400px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <p className="text-gray-500 mb-2">Calendly integration coming soon</p>
                        <p className="text-sm text-gray-400">This space will display Hila's scheduling calendar</p>
                      </div>
                    </div>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;
