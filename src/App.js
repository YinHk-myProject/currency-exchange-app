import React from 'react';
import Main from './Main';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FooterSection from './component/FooterSection';
import NavBar from './component/NavBar';

function App() {
  return (
    <LocalizationProvider dateAdapter={ AdapterDateFns }>
      <NavBar />
      <Main />
      <FooterSection />
    </LocalizationProvider>
  );
}

export default App;
