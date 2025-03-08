import express, {Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) =>{
    res.send("Hello world. Il s'agit de mon premier API en Esspress.js" );
});

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})

