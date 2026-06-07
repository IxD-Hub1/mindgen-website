import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 'biz-email': email, 'first-name': firstName, 'last-name': lastName, 'company-name': companyName, marketingOptIn } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
      secure: true, 
      auth: {
        user: process.env.EMAIL_SERVER_USER, 
        pass: process.env.EMAIL_SERVER_PASSWORD, 
      },
    });

    const teamNotificationOptions = {
      from: `"MindGen Web Engine" <${process.env.EMAIL_SERVER_USER}>`,
      to: 'weixdhub@gmail.com', // Change this to your actual team inbox
      subject: `🚨 New Web Lead: ${companyName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #111;">
          <h2>You have received a new business inquiry</h2>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Business Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Marketing/Newsletter Opt-In:</strong> ${marketingOptIn ? '🟢 Yes, subscribe to outreach materials' : '🔴 No'}</p>
        </div>
      `,
    };

    const customerThankYouOptions = {
      from: `"MindGen" <info@mindgen.com>`, // Change this to your verified sending address
      to: email, 
      subject: `Thank you for contacting MindGen`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; color: #182547; line-height: 1.6;">
          <h2 style="font-size: 1.5rem; font-weight: 700;">Hello ${firstName},</h2>
          <p>Thank you for reaching out to MindGen. We have successfully received your inquiry regarding <strong>${companyName}</strong>.</p>
          <p>A member of our experience innovation and platform engineering team will review your business objectives and get in touch with you within 24 business hours.</p>
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