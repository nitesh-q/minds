import React from "react";
import GridItem from "./GridItem";
import Gird1 from "../../images/new/blog/grid1.jpeg";

const CASE_STUDIES_DATA = [
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
  {
    type: "E-Commerce",
    image: Gird1,
    title: "Oxford bum bag gutted.",
    description:
      "Only a quid bobby brilliant bugger Jeffrey owt to do with me lurgy blimey.!",
  },
];

const CaseStudyGird = () => {
  return (
    <section className="Case_studies_area_two sec_pad">
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-12 Case_studies_grid_info">
            <div className="row">
              {CASE_STUDIES_DATA.map((data, index) => {
                return <GridItem {...{ ...data }} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudyGird;
