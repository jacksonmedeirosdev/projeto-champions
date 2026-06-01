import express,  {Request, Response} from"express";



const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Criando API com EXPRESS!");
});



app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
});