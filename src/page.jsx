import Image from "next/image";
// import PdfViewer from "./components/PDFViewer";
import ColorStrip from "./components/ColorStrip";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center ">
      {/* <PdfViewer/> */}
      <ColorStrip/>
    </main>
  );
}
