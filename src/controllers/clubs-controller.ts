import * as service from "../services/clubs-service";
import { Request, Response } from "express";


export const getClubs = async (request: Request, response: Response ) => {
    const httpResponse = await service.getClubsService();

    response.status(httpResponse.statusCode).json(httpResponse.body);
}