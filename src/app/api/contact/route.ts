import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend lazily or check for API key to avoid build errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

export async function POST(req: Request) {
  try {
    const resend = getResend();
    if (!resend) {
      console.error("Resend API key is missing");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    const { name, phone, complaint, date, message } = await req.json();
    
    // Validation
    if (!name || !phone || !complaint || !date) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@ishwaryamphysio.com',
      to: process.env.TO_EMAIL || 'ishwaryamphysio@gmail.com',
      subject: `New Appointment Request — ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E0ECEC; border-radius: 16px; overflow: hidden;">
          <div style="background-color: #0A6E6E; padding: 32px; text-align: center;">
            <h2 style="color: #FFFFFF; margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 28px;">New Appointment Request</h2>
            <p style="color: #C8973A; margin: 8px 0 0 0; font-weight: bold; letter-spacing: 1px; font-size: 12px; text-transform: uppercase;">Ishwaryam Physiotherapy Clinic</p>
          </div>
          <div style="padding: 32px; background-color: #FFFFFF;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #4A6060; font-size: 14px; width: 150px;"><strong>Patient Name</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #0F1A1A; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #4A6060; font-size: 14px;"><strong>Phone Number</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #0F1A1A; font-size: 14px;">
                  <a href="tel:${phone}" style="color: #0A6E6E; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #4A6060; font-size: 14px;"><strong>Complaint</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #0F1A1A; font-size: 14px;">${complaint}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #4A6060; font-size: 14px;"><strong>Visit Date</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E0ECEC; color: #0F1A1A; font-size: 14px;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #4A6060; font-size: 14px; vertical-align: top;"><strong>Message</strong></td>
                <td style="padding: 12px 0; color: #0F1A1A; font-size: 14px; line-height: 1.5;">${message || 'No additional details provided.'}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #F7F9F8; padding: 20px; text-align: center; border-top: 1px solid #E0ECEC;">
            <p style="color: #8AA5A5; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
              Sent from Ishwaryam Physiotherapy Website
            </p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
