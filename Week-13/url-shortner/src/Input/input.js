import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState} from 'react';

export default function Input({setUrlList,urlList}){
    const [input, setInput] = useState("")
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const fetchShortUrl = async ()=>{
        if (isValidURL(input)) {
            const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
            const data = await (await fetch(url, { method: "POST" })).json();
            const { full_short_link, original_link } = data.result;
            const newUrlList = [...urlList];
            newUrlList.push({ longUrl: original_link, shortUrl: full_short_link });
            setUrlList(newUrlList);
        } else {
            window.alert("Please enter a valid Url")
        }
        
    }

    function isValidURL(str) {
        if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
            return true;
        } else {
            return false;
        }
    }
   
    return (
        <Stack sx={{ width: "200px"}}>
            <TextField id="standard-basic" label="Url shortner" value={input} variant="standard" onChange={(e) => onChange(e) }/>
            <Button variant="contained" onClick={fetchShortUrl}>Short it</Button>
        </Stack>
    )
}