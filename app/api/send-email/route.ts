// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// interface EmailRequestBody {
//   to: string;
//   subject: string;
//   text: string;
// }

// export async function POST(request: Request) {
//   console.log('Email API called');

//   try {
//     const { to, subject, text }: EmailRequestBody = await request.json();
//     console.log('Request data:', { to, subject });

//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       console.error('Missing email configuration');
//       return NextResponse.json(
//         { error: 'Email configuration is missing' },
//         { status: 500 }
//       );
//     }

//     // Create a test account if you're using ethereal.email for testing
//     // const testAccount = await nodemailer.createTestAccount();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     console.log('Sending email...');
//     const info = await transporter.sendMail({
//       from: `"ITCart Contact Form" <${process.env.EMAIL_USER}>`,
//       to,
//       subject,
//       text: text.replace(/^\s+/gm, ''), // Remove leading whitespace from each line
//     });

//     console.log('Message sent: %s', info.messageId);
//     return NextResponse.json({
//       success: true,
//       message: 'Email sent successfully',
//       messageId: info.messageId
//     });
//   } catch (error: any) {
//     console.error('Detailed error sending email:', {
//       message: error.message,
//       stack: error.stack,
//       code: error.code,
//       response: error.response
//     });
//     return NextResponse.json(
//       {
//         success: false,
//         error: 'Failed to send email',
//         details: error.message
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer, { SentMessageInfo } from 'nodemailer';

interface EmailRequestBody {
  to: string;
  subject: string;
  text: string;
}

export async function POST(request: Request) {
  console.log('Email API called');

  try {
    const { to, subject, text }: EmailRequestBody = await request.json();
    console.log('Request data:', { to, subject });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Sending email...');
    const info: SentMessageInfo = await transporter.sendMail({
      from: `"ITCart Contact Form" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: text.replace(/^\s+/gm, ''), // remove leading whitespace
    });

    console.log('Message sent:', info.messageId);
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Detailed error sending email:', {
        message: error.message,
        stack: error.stack,
      });
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email',
          details: error.message,
        },
        { status: 500 }
      );
    }

    // fallback for unknown error types
    console.error('Unknown error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unknown error occurred',
      },
      { status: 500 }
    );
  }
}
