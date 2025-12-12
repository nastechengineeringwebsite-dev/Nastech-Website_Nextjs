import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Product_Card from "./Product_Card";

const Technical_Trainning_Content = () => {
  return (
    <Container>
      <Title
        className={"lg:mt-10 mt-32"}
        title={"NAS Tech Technical Training  Program"}
        primaryTitle={true}
      ></Title>
      <Flex className={"flex flex-wrap justify-center gap-x-10 gap-y-16 mb-40"}>
        <Product_Card
          courseDuration={"4 Months"}
          courseFee={"20,000 BDT"}
          cardImage={"Technical Solutions/solidworks_industrial_beginnar_to_intermediate.jpg"}
          heading={"SOLIDWORKS Industrial: Beginner to Intermediate"}
          pageLink={"nas_technical_trainning/solidworks_industrial_beginner_to_intermediate"}
          shortDis={
            "This course is designed for engineers and designers who are new to SOLIDWORKS or have basic experience. Participants will learn core modeling techniques, assembly creation, and 2D/3D drawing essentials, building a strong foundation in industrial design. By the end of the course, learners will be able to create accurate, production-ready models and understand best practices for efficient design workflows."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/solidworks_industrial_advanced_learning.jpg"}
          heading={"SOLIDWORKS Industrial:Advanced Learning "}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "This advanced program is for professionals looking to enhance their SOLIDWORKS skills and tackle more complex design challenges. The course covers surface modeling, advanced assemblies, simulation basics, and design optimization, enabling participants to create sophisticated models and perform preliminary engineering analysis. It bridges the gap between intermediate skills and professional-level design proficiency."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/solidworks_industrial_professional.jpg"}
          heading={"SOLIDWORKS Industrial: Professional"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Our professional-level course is tailored for engineers seeking expert mastery in SOLIDWORKS Industrial applications. It focuses on full-scale product design, integrated CAE analysis, advanced assembly management, and preparation for Design for Manufacturing (DFM). Participants gain hands-on experience in tackling real-world industrial projects, equipping them to deliver high-quality, manufacturable designs with efficiency and precision."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/solidworks_industrial_expert.jpg"}
          heading={"SOLIDWORKS Industrial: Expert"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Master the most complex design challenges. Our expert-level course moves beyond standard modeling to cover advanced surfacing, complex assembly design, and simulation. Learn to solve real-world industrial problems and prepare for professional certification. This training is your definitive step from skilled user to technical leader in product design."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/cam_and_cnc_beginner_to_industrial.jpg"}
          heading={"CAM and CNC: Beginner to Intermediate"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Start your journey from digital design to physical reality. This course provides a hands-on foundation in Computer-Aided Manufacturing (CAM) and Computer Numerical Control (CNC). Learn the essential skills to prepare designs for milling, routing, and fabrication. Build confidence with practical, project-based learning in a small-group setting."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/cam_and_cnc_professional.jpg"}
          heading={"CAM and CNC: Professional"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Optimize your workflow for precision and production. Our professional-level training focuses on advanced CAM and CNC techniques, including multi-axis machining, tool path optimization, and material-specific strategies. Gain the skills to increase efficiency, reduce waste, and produce complex, high-quality components. Elevate your practice with industrial-grade expertise."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/cam_and_cnc_advance.jpg"}
          heading={"Beginner to Intermediate Advance Learning+ Beginner to Intermediate CAM"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Start your fabrication journey with our comprehensive Beginner to Intermediate CAM course. Learn the essential skills to take your digital designs to physical reality. Through hands-on, project-based learning, you will gain a strong foundation in Computer-Aided Manufacturing, building the confidence to operate machinery and create tangible projects."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/professional_all.jpg"}
          heading={"Professional All"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Achieve total expertise with our all-inclusive Professional All training. This comprehensive program combines advanced design, analysis, and manufacturing techniques to optimize your entire workflow. Perfect for professionals aiming to lead complex projects, you will gain the skills to maximize efficiency and produce high-quality, industrial-grade components across a variety of disciplines."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"Technical Solutions/engineering_design_analysis_beginnar.jpg"}
          heading={"Engineering Design Analysis and Simulation: Beginner"}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Gain the foundational skills to test your ideas before you build them. Our beginner course in Engineering Design Analysis and Simulation teaches you how to analyze and predict the performance of your designs. Learn to identify potential flaws and optimize your concepts using industry-standard tools, preparing you for more advanced engineering challenges."
          }
        />
        {/* <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"3d Printing.jpg"}
          heading={"Engineering Design Analysis and Simulation: Intermediate  "}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"3d Printing.jpg"}
          heading={"Engineering Design Analysis and Simulation: Advanced  "}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"3d Printing.jpg"}
          heading={"Microcontroller and PCB: Beginner   "}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit."
          }
        />
        <Product_Card
          courseDuration={"1 year"}
          courseFee={"10,000 BDT"}
          cardImage={"3d Printing.jpg"}
          heading={"Microcontroller and PCB: Intermediate "}
          pageLink={"360 Engineering Solutions"}
          shortDis={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit."
          }
        /> */}
      </Flex>
    </Container>
  );
};

export default Technical_Trainning_Content;
