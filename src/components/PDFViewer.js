import React, { useState, ChangeEvent, FormEvent } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ColorStrip from "./ColorStrip";

function PdfViewer() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];

  const handleChange = (e) => {
    let selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target?.result ?? null);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("Please select a pdf file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setPdfFile(null);
    }
  };

  const newplugin = defaultLayoutPlugin();

  return (
    <div className="h-[98vh] w-full flex flex-col justify-between bg-gray-500">
      <form className="w-full flex flex-row justify-around" onSubmit={(e) => handleSubmit(e)}>
        <input
          name="upload"
          type="file"
          accept="application/pdf/"
          onChange={handleChange}
        />
        <button type="submit" className="text-white bg-slate-800 px-4 py-2 rounded-xl">Submit</button>
      </form>
      <ColorStrip/>
      <div className="flex justify-between w-full overflow-scroll">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {viewPdf && (
            <>
              <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
            </>
          )}
          {!viewPdf && <>No Pdf</>}
        </Worker>
      </div>
    </div>
  );
}

export default PdfViewer;
