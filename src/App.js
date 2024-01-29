import ColorStrip from "./components/ColorStrip";
import PdfViewer from "./components/PDFViewer";
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PdfViewer/>
      <ColorStrip/>
    </main>
  );
}

export default App;
