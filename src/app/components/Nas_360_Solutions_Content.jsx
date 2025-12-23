import React from 'react'
import Container from './Container'
import Title from './Title'
import Flex from './Flex'
import Product_Card from './Product_Card'

const Nas_360_Solutions_Content = () => {
  return (
    <Container>
      <Title className={"lg:mt-10 mt-32"} title={"NAS Tech 360 Solutions"} primaryTitle = {true}></Title>
      <Flex className={"flex flex-wrap justify-center gap-x-10 gap-y-16 mb-40"}>
        <Product_Card
          cardImage={"360 Engineering Solutions/Product Design And Prototype/product_design_to_prototype.jpg"}
          heading={"Product Concept to Prototyping Design"}
          pageLink={"nas_360_engineering_solutions/product_concept_to_prototype_design"}
          shortDis={"From initial concept to functional prototype, we provide hands-on design and prototyping solutions using CAD/CAM and CNC technologies, enabling faster, high-quality product development."}
          
        />
        <Product_Card
          
          cardImage={"360 Engineering Solutions/2d to 3d drawing/2d_to_3d_drawing.jpg"}
          heading={"2D and 3D drawing"}
          pageLink={"nas_360_engineering_solutions/2d_to_3d_design"}
          shortDis={"NAS Tech Engineering provides precise 2D and 3D drawing services for engineering and manufacturing. Our 2D drawings ensure clear technical communication, while 3D models enable visualization, simulation, and virtual testing. Using industry-standard tools, we deliver accurate, production-ready designs that meet international standards, accelerate prototyping, and streamline NAS Tech Engineering, we offer advanced 3D printing services to rapidly turn designs the transition from concept to manufacturing"}
          
        />
        <Product_Card
          
          cardImage={"360 Engineering Solutions/3d Printing/3d_printing.jpg"}
          heading={"3D Printing Service"}
          pageLink={"nas_360_engineering_solutions/3d_printing"}
          shortDis={"For physical prototypes or functional parts NAS Tech Engineering provides 3D printing services. Using cutting-edge additive manufacturing technologies, we produce high-precision, cost-effective models that help validate designs, test functionality, and accelerate product development. Our 3D printing capabilities support a wide range of materials and complex geometries, enabling innovative solutions across industries."}
          
        />
        <Product_Card
          
          cardImage={"360 Engineering Solutions/3d Scanning/3d_scanning.jpg"}
          heading={"3D Scanning Service"}
          pageLink={"nas_360_engineering_solutions/3d_scanning"}
          shortDis={"Our 3D scanning services enable accurate reverse engineering, quality inspection, and digital modeling of existing components. By capturing precise geometries and dimensions, we convert physical objects into detailed 3D digital models suitable for CAD, simulation, and modification. This technology enhances efficiency, reduces errors, and supports faster product iteration and design optimization."}
          
        />
        <Product_Card
          
          cardImage={"360 Engineering Solutions/Mold Design And Analysis/mold_design_and_analysis.jpg"}
          heading={"Mold Design , Analysis and Manufacturing "}
          pageLink={"nas_360_engineering_solutions/mold_design_and_analysis"}
          shortDis={"Our 3D scanning services enable accurate reverse engineering, quality inspection, and digital modeling of existing components. By capturing precise geometries and dimensions, we convert physical objects into detailed 3D digital models suitable for CAD, simulation, and modification. This technology enhances efficiency, reduces errors, and supports faster product iteration and design optimization."}
          
        />
        
      </Flex>
    </Container>
  )
}

export default Nas_360_Solutions_Content