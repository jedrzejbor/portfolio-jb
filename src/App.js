import React from 'react';
import HamburgerMenu from './components/atoms/HamburgerMenu/HamburgerMenu';
import GlobalStyle from './theme/GlobalStyle';
import Head from './views/Head';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <h1>PORTFOLIO</h1>
      <HamburgerMenu> </HamburgerMenu>
      <Head/>
    </div>
  );
}

export default App;
