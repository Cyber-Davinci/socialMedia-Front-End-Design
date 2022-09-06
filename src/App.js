import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

import {Box, createTheme, Stack, ThemeProvider} from '@mui/material';
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const lightTheme = createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={lightTheme}>
      <Box color={'text.primary'}>
        <Navbar/>

        <Stack direction={'row'} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>

        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
