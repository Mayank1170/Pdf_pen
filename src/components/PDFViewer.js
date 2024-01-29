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
    <div className="w-full flex flex-col justify-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="upload"
          type="file"
          accept="application/pdf/"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>View pdf</h2>
      <ColorStrip/>
      <div className="w-full">
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
