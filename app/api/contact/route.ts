import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName: name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `Portfolio website <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio message from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
      <p><strong>Message:</strong></p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
        ${message}
      </div>
    </div>
  `,
      text: `From: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
