// import domToPdf from "react-dom-to-pdf";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Test from "./components/TestPDF";

function App() {
  // const element = document.getElementById("pdf");
  // const options = {
  //   filename: "myPDF.pdf",
  // };

  const componentRef = useRef(null);

  const downloadPdf = useReactToPrint({
    content: () => componentRef.current,
  });

  // const downloadPdf = () => {
  //   domToPdf(element, options);
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <Test ref={componentRef} />
      <button className="bg-gray-400 text-black rounded-md py-2 px-4" onClick={downloadPdf}>
        Download as PDF
      </button>
    </div>
  );
}

export default App;
