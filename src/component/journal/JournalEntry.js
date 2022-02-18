import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",

          backgroundImage:
            "url(https://images.r.cruisecritic.com/features/2016/06/tropic-hero.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Nuevo day</p>
        <p className="journal__entry-content">
          Occaecat laborum elit amet anim ipsum non veniam consequat. Ullamco
          nulla do ea aliquip culpa. Fugiat nisi officia officia cillum aliquip
          pariatur ipsum et ex incididunt.
        </p>
      </div>
    </div>
  );
};

export default JournalEntry;
