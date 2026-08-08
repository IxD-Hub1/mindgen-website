import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Destructure ALL the new fields
    const { 
      'enquiry-type': enquiryType,
      'first-name': firstName, 
      'last-name': lastName, 
      'biz-email': email, 
      'phone-number': phone,
      'company-name': companyName, 
      'country-city': location,
      'company-size': companySize,
      'service-interest': serviceInterest,
      'budget-range': budget,
      'timeline': timeline,
      marketingOptIn 
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
      secure: true, 
      auth: {
        user: process.env.EMAIL_SERVER_USER, 
        pass: process.env.EMAIL_SERVER_PASSWORD, 
      },
    });

    // Updated internal lead notification
    const teamNotificationOptions = {
      from: `"MindGen Web Engine" <ravikiranjadhav10@gmail.com>`,
      to: 'weixdhub@gmail.com', // Keep your actual email here!
      subject: `🚨 New Lead [${enquiryType}]: ${companyName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #111;">
          <h2>New Website Inquiry: ${enquiryType}</h2>
          <hr />
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Location:</strong> ${location || 'Not provided'}</p>
          
          <br/>
          <h3>Company & Project Details</h3>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Size:</strong> ${companySize || 'Not specified'}</p>
          <p><strong>Service Interest:</strong> ${serviceInterest || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          
          <br/>
          <p><strong>Marketing Opt-In:</strong> ${marketingOptIn ? '🟢 Yes' : '🔴 No'}</p>
        </div>
      `,
    };

    const customerThankYouOptions = {
      from: `"MindGen" <ravikiranjadhav10@gmail.com>`, 
      to: email, 
      subject: `Thank you for contacting MindGen`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; color: #182547; line-height: 1.6;">
          <h2 style="font-size: 1.5rem; font-weight: 700;">Hello ${firstName},</h2>
          <p>Thank you for reaching out to MindGen. We have successfully received your inquiry regarding <strong>${companyName}</strong>.</p>
          <p>A member of our AI strategy and transformation team will review your business brief and get in touch shortly to schedule a discovery call.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>The MindGen Team</strong></p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(teamNotificationOptions),
      transporter.sendMail(customerThankYouOptions)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Mail delivery routing pipeline failed:', error);
    return NextResponse.json({ error: 'Failed to process lead delivery tasks' }, { status: 500 });
  }
}