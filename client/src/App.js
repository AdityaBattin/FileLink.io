import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// outlet HOC component
import Layout from './components/shared/Layout';
// unshared LOC components 
import EntryPage from './components/EntryPage';
import DownloadPage from './components/DownloadPage';
import UploadPage from './components/UploadPage';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<EntryPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/download/:uuid" element={<DownloadPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/*" element={<noPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
