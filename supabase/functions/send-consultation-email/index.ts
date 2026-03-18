import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  leadershipRole: string;
  challenge: string;
  contactMethod: string;
  bestTime: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: ConsultationRequest = await req.json();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send admin notification email
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Clear Vision Consulting <notifications@clearvisionleader.com>",
        to: ["cvadmin@clearvisionleader.com"],
        subject: "New Leadership Clarity Consultation Request",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f59e0b; color: #0f172a; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #0f172a; display: block; margin-bottom: 5px; }
                .value { color: #475569; }
                .challenge-box { background-color: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Consultation Request</h2>
                </div>
                <div class="content">
                  <p>A new Leadership Clarity Consultation request has been submitted:</p>

                  <div class="field">
                    <span class="label">Full Name:</span>
                    <span class="value">${data.fullName}</span>
                  </div>

                  <div class="field">
                    <span class="label">Email Address:</span>
                    <span class="value">${data.email}</span>
                  </div>

                  <div class="field">
                    <span class="label">Phone Number:</span>
                    <span class="value">${data.phone}</span>
                  </div>

                  <div class="field">
                    <span class="label">Organization / Business Name:</span>
                    <span class="value">${data.organization}</span>
                  </div>

                  <div class="field">
                    <span class="label">Leadership Role:</span>
                    <span class="value">${data.leadershipRole}</span>
                  </div>

                  <div class="field">
                    <span class="label">Preferred Contact Method:</span>
                    <span class="value">${data.contactMethod}</span>
                  </div>

                  <div class="field">
                    <span class="label">Best Time to Connect:</span>
                    <span class="value">${data.bestTime}</span>
                  </div>

                  <div class="field">
                    <span class="label">Leadership Challenge:</span>
                    <div class="challenge-box">
                      ${data.challenge.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!adminEmailResponse.ok) {
      const error = await adminEmailResponse.text();
      console.error("Failed to send admin email:", error);
      throw new Error(`Failed to send admin notification: ${error}`);
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Clear Vision Consulting <notifications@clearvisionleader.com>",
        to: [data.email],
        subject: "Thank You for Your Leadership Clarity Consultation Request",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f59e0b; color: #0f172a; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
                .checkmark { font-size: 48px; color: #10b981; }
                .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; font-weight: bold; color: #0f172a; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="checkmark">✓</div>
                  <h2 style="margin: 10px 0 0 0;">Request Received</h2>
                </div>
                <div class="content">
                  <h3 style="color: #0f172a; margin-top: 0;">Thank you for requesting a Leadership Clarity Consultation.</h3>

                  <p>Your request has been received and our team will follow up shortly to schedule your consultation.</p>

                  <p>We look forward to helping you gain clarity and strengthen your leadership.</p>

                  <div class="signature">
                    — Dr. Kennita Williams<br/>
                    Clear Vision Consulting®
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!userEmailResponse.ok) {
      const error = await userEmailResponse.text();
      console.error("Failed to send user confirmation email:", error);
      // Don't throw error here - admin email was sent successfully
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully"
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
