

import { Resend } from 'resend';
import { OrderSuccessEmail } from '../../../../emails/OrderSuccessEmail';
import { NewOrderNotiEmail } from '../../../../emails/NewOrderNotiEmail';



const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'GratefulTokens@website.nastechengineeringbd.com',
      to: body.email,
      subject: 'Order Successful!',
    
    react: <OrderSuccessEmail userFirstname={body.name} orderId={body.orderId} />,
    });

    if (error) {
        console.log(error)
      return Response.json({ error }, { status: 500 });
    }

    const { owenerEmail , error2 } = await resend.emails.send({
        from: 'GratefulTokens@website.nastechengineeringbd.com',
        to: "nastechengineering.website@gmail.com",
        subject: 'New Order!',
      
      react: <NewOrderNotiEmail orderId={body.orderId} date={body.date} />,
      });

      if (error2) {
        console.log(error2)
      return Response.json({ error2 }, { status: 500 });
    }

    console.log("Email send")
    return Response.json(data);
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}