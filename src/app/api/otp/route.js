
import prisma from "@/app/lib/prisma";
import otpGenerator from "otp-generator";
import { Resend } from 'resend';
import { OtpEmail } from "../../../emails/OtpEmail";
import crypto from "crypto"



const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, { params }) {
    try {
      const { email } = await req.json();
        
     const code = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const otpExists = await prisma.otp.findUnique({
        where: {
          email: email,
        },
      });
      let otp = null
      if (otpExists) {
        otp = await prisma.otp.update({
          where: {
            email: email,
          },
          data: {
            otpCode: Number(code),
            
          },
        })
      }
      else{
        
        otp = await prisma.otp.create({
          data: {
            email: email,
            otpCode: Number(code),
            resetLink: crypto.randomBytes(32).toString("hex"),
          },
        })
      }

      if (otp){
        
        const { data, error } = await resend.emails.send({
          from: 'GratefulTokens@website.nastechengineeringbd.com',
          to: email,
          subject: 'OTP Code for Password Change',
        
        react: <OtpEmail otp={otp.otpCode} />,
        });
      }
      return new Response(
        JSON.stringify({ message: "Otp created successfully", otp: otp }),
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Otp creation failed" }), {
        status: 500,
      });
    }
  }