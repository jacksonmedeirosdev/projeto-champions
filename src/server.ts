import express,  {Request, Response} from"express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Criando API com EXPRESS!");
});



app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
});