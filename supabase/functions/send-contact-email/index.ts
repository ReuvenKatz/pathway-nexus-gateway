
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
  contactPerson: 'reuven' | 'hila';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("=== CONTACT FORM SUBMISSION START ===");
    console.log("Received contact form submission:", JSON.stringify(formData, null, 2));

    const { name, email, field, stage, message, contactPerson } = formData;

    // Validate required fields
    if (!name || !email || !field || !stage || !message || !contactPerson) {
      console.error("Missing required fields:", { name: !!name, email: !!email, field: !!field, stage: !!stage, message: !!message, contactPerson: !!contactPerson });
      throw new Error("All fields are required");
    }

    console.log("=== SENDING NOTIFICATION EMAIL ===");
    
    // Send notification email to you using your email as from address (lowercase)
    const notificationResponse = await resend.emails.send({
      from: "reuven.katz@gmail.com", // Using lowercase
      to: ["reuven.katz@gmail.com"], // Using lowercase
      subject: `🔔 New Contact Form: ${contactPerson === 'reuven' ? 'Reuven' : 'Hila'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E4A87; border-bottom: 2px solid #2E4A87; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #2E4A87;">Contact Person:</strong> ${contactPerson === 'reuven' ? 'Reuven' : 'Hila'}</p>
            <p><strong style="color: #2E4A87;">Name:</strong> ${name}</p>
            <p><strong style="color: #2E4A87;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #2E4A87;">Field of Study:</strong> ${field}</p>
            <p><strong style="color: #2E4A87;">Current Stage:</strong> ${stage}</p>
          </div>
          
          <div style="background-color: #fff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #2E4A87; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
            <p>This email was sent from the contact form on your PhD Success Consulting website.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log("Notification email response:", JSON.stringify(notificationResponse, null, 2));

    if (notificationResponse.error) {
      console.error("NOTIFICATION EMAIL ERROR:", notificationResponse.error);
      throw new Error(`Failed to send notification email: ${notificationResponse.error.message}`);
    }

    console.log("✅ Notification email sent successfully! ID:", notificationResponse.data?.id);

    console.log("=== SENDING CONFIRMATION EMAIL ===");

    // Send confirmation email to the user using your email as from address (lowercase)
    const confirmationResponse = await resend.emails.send({
      from: "reuven.katz@gmail.com", // Using lowercase
      to: [email],
      subject: "Thank you for contacting PhD Success Consulting!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E4A87;">Thank you for reaching out, ${name}!</h2>
          
          <p>We have received your message and ${contactPerson === 'reuven' ? 'Reuven' : 'Hila'} will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2E4A87; margin-top: 0;">Your message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <p>We typically respond within 24-48 hours during business days.</p>
          
          <div style="margin-top: 30px;">
            <p>Best regards,<br>
            <strong>PhD Success Consulting Team</strong></p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email response:", JSON.stringify(confirmationResponse, null, 2));

    if (confirmationResponse.error) {
      console.error("CONFIRMATION EMAIL ERROR:", confirmationResponse.error);
      // Don't throw here - notification email is more important
      console.log("⚠️ Confirmation email failed, but notification succeeded");
    } else {
      console.log("✅ Confirmation email sent successfully! ID:", confirmationResponse.data?.id);
    }

    console.log("=== CONTACT FORM SUBMISSION COMPLETE ===");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully",
        notificationId: notificationResponse.data?.id,
        confirmationId: confirmationResponse.data?.id,
        timestamp: new Date().toISOString()
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("=== CONTACT FORM ERROR ===");
    console.error("Error details:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
