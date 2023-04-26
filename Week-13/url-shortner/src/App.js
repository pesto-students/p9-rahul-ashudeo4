import './App.css';
import Typography from '@mui/material/Typography';


import Input from './Input/input';
import List from './List/list';
import { useState } from 'react';


function App() {
  const [urlList, setUrlList]= useState([]);
    return (
      <div className="App">
        <Typography variant="h1" component="h2">
          URL SHORTNER
        </Typography>
        <Input setUrlList={setUrlList} urlList={urlList}/>
        <List urlList={urlList}/>
      </div>
    );
  }

export default App;
