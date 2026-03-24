

import { Resend } from 'resend';
import OtpEmail from '../../../../emails/OtpEmail';


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'GratefulTokens@website.nastechengineeringbd.com',
      to: body.email,
      subject: 'OTP Code for Password Change',
    
    react: <OtpEmail otp={body.otp} />,
    });

    if (error) {
        console.log(error)
      return Response.json({ error }, { status: 500 });
    }
    console.log("Email send")
    return Response.json(data);
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}