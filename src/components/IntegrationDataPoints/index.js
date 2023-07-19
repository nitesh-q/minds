import React from "react";
import Title from "../Common/Title";
import DataItems from "./DataItems";

const IntegartionDataPoints = () => {
  return (
    <section className="software_service_area sec_pad">
      <div className="container">
        <Title
          title="Data Points."
          titleP=""
          sClass="sec_title text-center mb_70"
        />
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="tab-content software_service_tab_content">
              <div className="tab-pane fade show active">
                <div className="row">
                  <DataItems
                    ticon="ti-user"
                    text="Average Order Value"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <DataItems
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Billing Address"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <DataItems
                    ticon="ti-face-smile"
                    text="Cancellation Reason"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <DataItems
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Checkout Status"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntegartionDataPoints;
