import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';

export default function Input({updateOnChange}) {
    const [input, setInput] = useState("")
    const onChange =(e)=>{
        setInput(e.target.value)
    }
  return (
    <Stack
      component="div"
      style={{"alignItems":"center"}}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="standard-basic" label="Todo" variant="standard" onChange={(e)=>onChange(e)} />
      <Button variant="contained" onClick={()=>updateOnChange(input)}>Add Todo</Button>

    </Stack>
  );
}