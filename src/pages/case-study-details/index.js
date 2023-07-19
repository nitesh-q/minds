import React from "react";
import Layout from "../../components/Layout";
import {
  CaseStudyDetails,
  DarkBanner,
  Services,
  TryAction,
} from "../../components";

// const CUSTOMER_STORIES = [
//   {
//     image: Icons.Leader.default,
//     title: "Interchange fees",
//     description:
//       "Oxford I don't want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I'm telling lurgy we.!",
//     url: ".#",
//   },
//   {
//     image: Icons.Meetup.default,
//     title: "Our Corporate",
//     description:
//       "Oxford I don't want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I'm telling lurgy we.!",
//     url: ".#",
//   },
//   {
//     image: Icons.Chat.default,
//     title: "European Regulation",
//     description:
//       "Oxford I don't want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I'm telling lurgy we.!",
//     url: ".#",
//   },
// ];
const CaseStudyDetail = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <DarkBanner
          Ptitle="Case Study"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        />
        <CaseStudyDetails />
        {/* <EventFeature
          title={"Read more Customer Stories"}
          desc={
            "He lost his bottle squiffy bog bleeding hunky-dory wind up morish tomfoolery spend a penny hanky panky, lemon squeezy vagabond.!"
          }
          config={CUSTOMER_STORIES}
        /> */}
        {/* <EventAbout /> */}
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default CaseStudyDetail;
