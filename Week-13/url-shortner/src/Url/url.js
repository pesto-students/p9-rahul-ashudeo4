// import { Typography } from '@mui/material';



// export default function Url() {
//     const arr =  [1,2,3];
//     // const items = (<Item>Item 1</Item>)
//     return arr.map(val => <Typography>Item {val}</Typography>)
// }



import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data);
}


function SkeletonUrl({longUrl, shortUrl}){
    return (
        <Card sx={{ minWidth: 275, backgroundColor:"lightgray", marginTop:"12px" }}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {longUrl}
                </Typography>
                <Typography variant="h5" component="div">
                    {shortUrl}
                </Typography>
                <Button sx={{ mb: 1.5 }}  onClick={()=>setClipboard(shortUrl)}>
                    Copy
                </Button>
            </CardContent>
        </Card>
    );
}

export default function Url({urlList}) {
    return urlList.map(val => <SkeletonUrl key={val.shortUrl} longUrl={val.longUrl} shortUrl={val.shortUrl}/>)
}