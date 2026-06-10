import { Request, Response } from "express";
import * as service from "../services/players-service";
import * as httpRequest from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayers = async (request: Request, response: Response) => {
    const httpResponse = await service.getAllPlayerService();
    response
        .status(httpResponse.statusCode)
        .json(httpResponse.body);
}

export const getPlayerById = async (request: Request<{ id: string }>, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    response
        .status(httpResponse.statusCode)
        .json(httpResponse.body);
}

export const createPlayer = async (request: Request, response: Response) => {
    const body = request.body;
    const httpResponse = await service.createPlayerService(body);
    
    if(httpResponse){
        response
            .status(httpResponse.statusCode)
            .json(httpResponse.body);
    }
}

export const updatePlayer = async (request: Request<{ id: string }>, response: Response) => {
    const id = parseInt(request.params.id);
    const body: StatisticsModel = request.body;
    const httpResponse = await service.updatePlayerService(id, body);
    
    if(httpResponse){
        response
            .status(httpResponse.statusCode)
            .json(httpResponse.body);
    }

}

export const deletePlayer = async (request: Request<{ id: string }>, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deletePlayerService(id);
    response
        .status(httpResponse.statusCode)
        .json(httpResponse.body);
}



