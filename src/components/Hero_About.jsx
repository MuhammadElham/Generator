import React from "react";

const Hero_About = () => {
  return (
    <div
      className="relative text-white h-auto flex flex-col py-24 bg-cover bg-right sm:bg-center -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]"
      style={{
        backgroundImage: `url("https://generatorcorner.com/wp-content/uploads/2018/11/call-to-action-bg.jpg")`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative top-[60px] z-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <h1 className="text-3xl sm:py-3 md:text-4xl lg:text-5xl leading-relaxed font-medium">Leading Provider of Power Generation Solutions</h1>
      </div>
    </div>
  );
};

export default Hero_About;
