import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
export const OrderSuccessEmail = ({ userFirstname, orderId}) => (
    <Html>
    <Head />
    <Preview>Order Successful!</Preview>

    <Body
      style={{
        backgroundColor: "#EFF1FF",
        fontFamily: "Poppins, Arial, sans-serif",
        padding: "20px",
      }}
    >
      <Container
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        
        <Img
          src="https://res.cloudinary.com/dwgtixarr/image/upload/v1773939225/Nas_Tech_Logo_lb0liu.png"
          width="130"
          alt="NAS Tech Engineering Logo"
          style={{ display: "block", margin: "0 auto 10px auto"}}
        />

       
        <Img
          src="https://res.cloudinary.com/dwgtixarr/image/upload/v1773939218/Logo_Rounded_pwuiit.png"
          width="170"
          alt="Grateful Tokens Logo"
          style={{ display: "block", margin: "0 auto 20px auto"}}
        />

        
        <Text
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#131495",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Order Successful!
        </Text>

       
        <Text
          style={{
            fontSize: "16px",
            color: "#1F1F1F",
          }}
        >
          Hi {userFirstname},
        </Text>

        {/* Message */}
        <Text
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "#1F1F1F",
          }}
        >
          Thank you for ordering from <b>Grateful Tokens</b>. Your order has been successfully placed.
        </Text>

        <Text
          style={{
            fontSize: "18px",
            lineHeight: "26px",
            color: "#1F1F1F",
          }}
        >
          Your Order ID is <b>#{orderId}</b>
        </Text>

        <Text
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "#1F1F1F",
          }}
        >
          You will receive a confirmation email once the payment is verified.
        </Text>
       
        <Text
          style={{
            fontSize: "15px",
            color: "#18296E",
          }}
        >
          If you have any questions, feel free to <Link href="https://www.nastechengineeringbd.com/contact">contact us</Link> anytime.
        </Text>


        <Hr style={{ borderColor: "#18296E", margin: "30px 0" }} />

        <Text
          style={{
            fontSize: "12px",
            color: "#1F1F1F",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Nas Tech Engineering. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

