import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import SidebarPro from "./scenes/global/Sidebar";
import Dashboard from "./scenes//dashiboard/dashboard";
import FAQ from './scenes/dashiboard/dashboard';
import Form from './scenes/form';
import Geograpy from './scenes/geography';
import Calendar from './scenes/calendar';
import Invoices from './scenes/invoices';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Team from './scenes/team';



import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes , Route} from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarPro />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path ="/" element ={<Dashboard/>}></Route>
              {/* <Route path ="/team" element ={<Team/>}></Route> */}
              {/* <Route path ="/contacts" element ={<Contacts/>}></Route> */}
              {/* <Route path ="/invoices" element ={<Invoices/>}></Route> */}
              {/* <Route path ="/form" element ={<Form/>}></Route> */}
              {/* <Route path ="/bar" element ={<Bar/>}></Route> */}
              {/* <Route path ="/pie" element ={<Pie/>}></Route> */}
              {/* <Route path ="/line" element ={<Line/>}></Route> */}
              {/* <Route path ="/faq" element ={<FAQ/>}></Route> */}
              {/* <Route path ="/geograpy" element ={<Geograpy/>}></Route> */}
              {/* <Route path ="/calendar" element ={<Calendar/>}></Route> */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
