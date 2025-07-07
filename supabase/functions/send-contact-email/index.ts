
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  field: string;
  stage: string;
  message: string;
  contactType: 'reuven' | 'hila';
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Contact email function called');
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log('Form data received:', { ...formData, email: '[REDACTED]' });

    const { name, email, field, stage, message, contactType } = formData;

    // Send notification email to Reuven
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["reuven.katz@gmail.com"],
      subject: `New Contact Form Submission - ${contactType === 'reuven' ? 'Reuven' : 'Hila'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Contact Type:</strong> ${contactType === 'reuven' ? 'Reuven' : 'Hila'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Field of Study:</strong> ${field}</p>
        <p><strong>Current Stage:</strong> ${stage}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send email' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
