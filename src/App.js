import React from 'react';
import "./App.css";
import Page0 from './page0';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import HomePage from './Home';
import { Route, Routes} from 'react-router-dom';

// This is the main component of the application.
function App() {
return (
<div>
<Routes>
{/* This route renders Page0 component for any path that doesn't match other defined routes. */}
    <Route path="/" element={<HomePage />} />
    <Route path="/*" element={<HomePage/>} />

    <Route path="/page0" element={<Page0 />} />

    {/* This route renders Page1 component for the "/page1" path. */}
    <Route path="/page1" element={<Page1 />} />

    {/* This route renders Page2 component for the "/page2" path. */}
    <Route path="/page2" Component ={Page2} />

    {/* This route renders Page3 component for the "/page3" path. */}
    <Route path="/page3" Component ={Page3} />

    {/* This route renders Page4 component for the "/page4" path. */}
    <Route path="/page4" Component={Page4} />
  </Routes>
</div>
);
}

// Exporting the App component as the default export.
export default App;