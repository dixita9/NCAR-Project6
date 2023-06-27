import React from 'react';
import "./App.css";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Page1 />} />
        <Route path="/page2" Component ={Page2} />
        <Route path="/page3" Component ={Page3} />
      </Routes>
    </div>
  );
}

export default App;
