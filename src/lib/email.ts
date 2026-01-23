import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

interface ApplicationEmailParams {
  applicantEmail: string;
  applicantName: string;
  phone: string;
  jobTitle: string;
  yearsOfExperience: string;
  availableStartDate: string;
  coverLetter: string;
  howDidYouHear: string;
  resumeBuffer: Buffer;
  resumeFileName: string;
}

export async function sendApplicationEmail(params: ApplicationEmailParams) {
  const {
    applicantEmail,
    applicantName,
    phone,
    jobTitle,
    yearsOfExperience,
    availableStartDate,
    coverLetter,
    howDidYouHear,
    resumeBuffer,
    resumeFileName,
  } = params;

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #C4663E; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Job Application</h1>
      </div>

      <div style="padding: 30px; background: #FDF8F3;">
        <h2 style="color: #2B2B2B; border-bottom: 2px solid #C9A962; padding-bottom: 10px;">
          Application for: ${jobTitle}
        </h2>

        <h3 style="color: #C4663E;">Applicant Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${applicantName}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${applicantEmail}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Years of Experience:</strong></td><td>${yearsOfExperience}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Available Start Date:</strong></td><td>${availableStartDate}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>How they heard about us:</strong></td><td>${howDidYouHear}</td></tr>
        </table>

        ${coverLetter ? `
          <h3 style="color: #C4663E; margin-top: 20px;">Cover Letter</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
            ${coverLetter}
          </div>
        ` : ''}

        <p style="margin-top: 30px; color: #4A4A4A; font-size: 14px;">
          Resume attached: ${resumeFileName}
        </p>
      </div>

      <div style="background: #2B2B2B; padding: 15px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Comfort Chefs Hospitality Limited
        </p>
      </div>
    </div>
  `;

  const resend = getResendClient();
  await resend.emails.send({
    from: 'Comfort Chefs <onboarding@resend.dev>',
    to: [process.env.CONTACT_EMAIL || 'delivered@resend.dev'],
    replyTo: applicantEmail,
    subject: `Job Application: ${jobTitle} - ${applicantName}`,
    html: emailHtml,
    attachments: [
      {
        filename: resumeFileName,
        content: resumeBuffer,
      },
    ],
  });
}

interface QuoteEmailParams {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  guests?: string;
  date?: string;
  message?: string;
}

export async function sendQuoteEmail(params: QuoteEmailParams) {
  const { name, email, phone, eventType, guests, date, message } = params;

  const eventTypeLabels: Record<string, string> = {
    corporate: 'Corporate Event',
    wedding: 'Wedding',
    birthday: 'Birthday Party',
    private: 'Private Dinner',
    canteen: 'Canteen Management',
    other: 'Other',
  };

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #2D4A3E; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Quote Request</h1>
      </div>

      <div style="padding: 30px; background: #FDF8F3;">
        <h2 style="color: #2B2B2B; border-bottom: 2px solid #C9A962; padding-bottom: 10px;">
          Event Inquiry
        </h2>

        <h3 style="color: #C4663E;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
        </table>

        ${eventType || guests || date ? `
          <h3 style="color: #C4663E; margin-top: 20px;">Event Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${eventType ? `<tr><td style="padding: 8px 0;"><strong>Event Type:</strong></td><td>${eventTypeLabels[eventType] || eventType}</td></tr>` : ''}
            ${guests ? `<tr><td style="padding: 8px 0;"><strong>Expected Guests:</strong></td><td>${guests}</td></tr>` : ''}
            ${date ? `<tr><td style="padding: 8px 0;"><strong>Event Date:</strong></td><td>${date}</td></tr>` : ''}
          </table>
        ` : ''}

        ${message ? `
          <h3 style="color: #C4663E; margin-top: 20px;">Additional Details</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
            ${message}
          </div>
        ` : ''}
      </div>

      <div style="background: #2B2B2B; padding: 15px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Comfort Chefs Hospitality Limited
        </p>
      </div>
    </div>
  `;

  const resend = getResendClient();
  await resend.emails.send({
    from: 'Comfort Chefs <onboarding@resend.dev>',
    to: [process.env.CONTACT_EMAIL || 'delivered@resend.dev'],
    replyTo: email,
    subject: `Quote Request: ${eventTypeLabels[eventType || ''] || 'General Inquiry'} - ${name}`,
    html: emailHtml,
  });
}
