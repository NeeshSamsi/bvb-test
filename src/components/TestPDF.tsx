import React from "react";

const Test = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="py-10 text-center" id="pdf" ref={ref}>
      <h1 className="text-3xl text-gray-800">Hello React!</h1>
      <p className="text-gray-700">Testing PDF Export with TailwindCSS</p>
      {console.log(ref)}
    </div>
  );
});

export default Test;
