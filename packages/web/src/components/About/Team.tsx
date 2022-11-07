import TeamSlider from "components/Generics/Team";
import React from "react";

export interface TeamProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  members: any[];
}

const Team = (props: TeamProps) => {
  return (
    <section className="section-box">
      <div className="container mt-110">
        <div className="row">
          <div className="col-lg-9 col-sm-8">
            <h3 className="text-heading-1 mb-10">{props.title}</h3>
            <p className="text-body-lead-large color-gray-600">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-80">
        <TeamSlider {...props} />
      </div>
    </section>
  );
};

export default Team;
