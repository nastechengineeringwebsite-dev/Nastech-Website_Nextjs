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
  
  export const RegistrationEmail = ({ userFirstname }) => (
    <Html>
      <Head />
      <Preview>Welcome to Grateful Tokens!</Preview>
  
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
            Welcome to Grateful Tokens!
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
            Thank you for registering with <b>Grateful Tokens</b>. We are excitied to have you as our customer.
          </Text>
  
          <Text
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#1F1F1F",
            }}
          >
            You can now explore our products, and start placing
            orders.
          </Text>
  
          
          <Section style={{ textAlign: "center", margin: "30px 0" }}>
            <Button
              href="https://www.nastechengineeringbd.com/grateful_tokens"
              style={{
                backgroundColor: "#FFA51D",
                color: "#1F1F1F",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Grateful Tokens
            </Button>
          </Section>
  
          
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