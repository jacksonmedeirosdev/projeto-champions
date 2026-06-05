import { Request, Response } from "express";
import { getPlayeService } from "../services/players-service";


export const getPlayers = async (request: Request, response: Response) => {
    const httpResponse = await getPlayeService();


    response
        .status(httpResponse.statusCode)
        .json(httpResponse.body);
}