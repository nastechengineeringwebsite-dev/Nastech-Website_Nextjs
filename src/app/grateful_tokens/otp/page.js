import React from "react";
import OtpPage from "../../components/OtpPage";
import Container from "../../components/Container";
import AnimatePage from "../../components/AnimatePage";
import axios from "axios";
import otpGenerator from "otp-generator";
import prisma from "@/app/lib/prisma";

const page = async ({ searchParams }) => {

  const {email} = await searchParams

  return (
    <Container>
      <AnimatePage>
        <OtpPage email={email} />
      </AnimatePage>
    </Container>
  );
};

export default page;
