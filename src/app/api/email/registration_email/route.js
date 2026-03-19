

import { Resend } from 'resend';
import { RegistrationEmail } from '../../../../emails/RegistrationEmail';


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'GratefulTokens@website.nastechengineeringbd.com',
      to: body.email,
      subject: 'Registration Successful!',
    
    react: <RegistrationEmail userFirstname={body.name} />,
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