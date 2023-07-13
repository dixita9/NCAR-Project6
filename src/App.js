import React from 'react';
import "./App.css";
import Page0 from './page0';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/*" element={<Page0 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" Component ={Page2} />
        <Route path="/page3" Component ={Page3} />
        <Route path = "/page4" Component={Page4} />
      </Routes>
    </div>
  );
}

export default App;
