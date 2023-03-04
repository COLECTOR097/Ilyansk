import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {Home, NotFound} from "./pages";
import {Footer, Header} from "./components";

import './styles/main.scss'

const App: FC = () => {
  return (
      <div>
          <div className={'container'}>
              <Header />
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'*'} element={<NotFound />} />
              </Routes>
          </div>
          <Footer />
      </div>
  );
}

export default App;
