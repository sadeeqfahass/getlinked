import React from "react";

function Idea() {
  return (
    <>
      <section className="big-idea">
        <div className="img-con">
          <img className="big-idea" src="bigidea.png" alt="" />
          <img className="arrow" src="arrow.png" alt="" />
          <img className="star" src="starpu.png" alt="" />
          <p>
            The Big <br /> Idea!
          </p>
        </div>
        <div className="text-con">
          <img className="star " src="starpu.png" alt="" />
          <h1 className="heading">
            Introduction to getlinked <br /> <span> tech Hackathon 1.0 </span>
          </h1>
          <p className="content">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Idea;
