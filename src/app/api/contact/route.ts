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
      from: process.env.FROM_EMAIL || 'Ishwaryam Physiotherapy <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'ishwaryavsk28@gmail.com',
      subject: `🛎️ New Recovery Request — ${name}`,
      html: `
        <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E0ECEC; border-radius: 24px; overflow: hidden; background-color: #F7F9F8;">
          <div style="background-color: #0A6E6E; padding: 48px 32px; text-align: center;">
            <div style="display: inline-block; padding: 12px 24px; background: rgba(200, 151, 58, 0.2); border: 1px solid #C8973A; border-radius: 99px; margin-bottom: 24px;">
              <span style="color: #FBDD9D; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">Ishwaryam Clinical Notification</span>
            </div>
            <h1 style="color: #FFFFFF; margin: 0; font-family: 'Garamond', serif; font-size: 32px; font-weight: 400; line-height: 1.2;">
              New Clinical <br/><span style="color: #C8973A; font-style: italic;">Appointment Booking</span>
            </h1>
          </div>
          
          <div style="padding: 40px; background-color: #FFFFFF; border-radius: 24px 24px 0 0; margin-top: -24px; position: relative; z-index: 10;">
            <p style="color: #4A6060; font-size: 14px; margin-top: 0; margin-bottom: 32px; line-height: 1.6;">
              Dr. Ishwarya, a new patient has requested an assessment session via the Ishwaryam Physiotherapy platform.
            </p>
            
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
              <tr>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 12px 0 0 12px; border: 1px solid #E0ECEC; border-right: none; color: #8AA5A5; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Patient Identity</td>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 0 12px 12px 0; border: 1px solid #E0ECEC; border-left: none; color: #0F1A1A; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 12px 0 0 12px; border: 1px solid #E0ECEC; border-right: none; color: #8AA5A5; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Direct Contact</td>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 0 12px 12px 0; border: 1px solid #E0ECEC; border-left: none; color: #0A6E6E; font-size: 15px; font-weight: 700;">
                  <a href="tel:${phone}" style="color: #0A6E6E; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 12px 0 0 12px; border: 1px solid #E0ECEC; border-right: none; color: #8AA5A5; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Visit Pathway</td>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 0 12px 12px 0; border: 1px solid #E0ECEC; border-left: none; color: #0F1A1A; font-size: 15px; font-weight: 600;">${complaint}</td>
              </tr>
              <tr>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 12px 0 0 12px; border: 1px solid #E0ECEC; border-right: none; color: #8AA5A5; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Preferred Date</td>
                <td style="padding: 16px; background-color: #F7F9F8; border-radius: 0 12px 12px 0; border: 1px solid #E0ECEC; border-left: none; color: #0F1A1A; font-size: 15px; font-weight: 600;">${date}</td>
              </tr>
            </table>
            
            <div style="margin-top: 32px; padding: 24px; border: 1px dashed #E0ECEC; border-radius: 12px;">
              <p style="margin: 0 0 8px 0; color: #8AA5A5; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Clinical Notes</p>
              <p style="margin: 0; color: #4A6060; font-size: 14px; line-height: 1.6;">${message || 'The patient did not provide additional history.'}</p>
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; padding: 18px 40px; background-color: #0A6E6E; color: #FFFFFF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; border-radius: 8px; box-shadow: 0 10px 20px rgba(10, 110, 110, 0.15);">
                Call Patient Now
              </a>
            </div>
          </div>
          
          <div style="background-color: #F7F9F8; padding: 32px; text-align: center; border-top: 1px solid #E0ECEC;">
            <p style="color: #8AA5A5; font-size: 11px; margin: 0 0 8px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Ishwaryam Physiotherapy Speciality Clinic</p>
            <p style="color: #B2C5C5; font-size: 10px; margin: 0;">Clinical Authority Platform — Reclaiming Mobility</p>
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
