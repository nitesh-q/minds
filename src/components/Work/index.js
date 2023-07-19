import React, { useEffect, useState } from "react";
import Title from "../Common/Title";

const Work = ({ config }) => {
  const [progressIndex, setProgressIndex] = useState(-1);
  const [doneIndexes, setDoneIndexes] = useState([]);

  //---update the progress of cricular progress svg----
  const updateProgressIndex = () => {
    setProgressIndex((p) => {
      if (p >= config.length) {
        return -1;
      }
      return p + 1;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      updateProgressIndex();
    }, 2000);
  }, [false]);

  useEffect(() => {
    if (progressIndex > -1) {
      setTimeout(() => {
        updateProgressIndex();
        setDoneIndexes((p) => {
          return [...p, progressIndex];
        });
      }, 2000);
    }
  }, [progressIndex]);
  useEffect(() => {
    if (progressIndex === config.length) {
      setTimeout(() => {
        setProgressIndex(-1);
        setDoneIndexes([]);
        updateProgressIndex();
      }, 3000);
    }
  }, [doneIndexes]);

  return (
    <section className="support_work_area sec_pad pb_145">
      <div className="container container-xl">
        <Title
          sClass="sec_title text-center mb_70"
          title="How its work"
          tClass="t_color3"
          titleP=""
        />
        <div className="work_content ">
          <div className="workflow_dot_line "></div>
          <div className="row">
            {config.map((i, index) => {
              let _className = "default";
              let SpinnerClass = "spinner_container";
              if (progressIndex === index) _className = "progress";
              if (doneIndexes.includes(index)) _className = "ready";
              if (_className === "default")
                SpinnerClass = "default_spinner_container";
              if (_className === "ready") SpinnerClass = "spinner_container_";
              return (
                <div className="col-lg-4">
                  <div className="work_item">
                    <div className={SpinnerClass}>
                      <svg
                        className={_className}
                        id="check"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 100 100"
                        xmlSpace="preserve"
                      >
                        <circle
                          className="circle"
                          cx="50"
                          cy="50"
                          r="46"
                          fill="transparent"
                        />
                        <polyline
                          className="tick"
                          points="25,55 45,70 75,33"
                          fill="transparent"
                        />
                        <polyline
                          className="minus"
                          points="25,55 75,55 8"
                          fill="transparent"
                        />
                      </svg>
                    </div>

                    <h5>{i.title}</h5>
                    <p>{i.subTitle} </p>
                    <ul className="list-unstyled p_list">
                      <li>{i.desc}</li>
                    </ul>
                    <div className="d-flex justify-content-center py-4">
                      {i.img.map((item, index) => {
                        return <img src={item} key={index} alt=""/>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
