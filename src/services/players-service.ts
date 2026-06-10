import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayersRepository from "../repositories/player-repository";
import * as httpRequest  from "../utils/http-helper";


export const getAllPlayerService= async () => {
    const data = await PlayersRepository.findAllPlayersRepository();
    let httpResponse = null;
 
    if(data){
        httpResponse = await httpRequest.ok(data);
    }else{
        httpResponse = await httpRequest.noContent();
    }
    return httpResponse;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayersRepository.findPlayerByIdRepository(id);
    let httpResponse = null;
    if(data){
        httpResponse = await httpRequest.ok(data);
    }else{
        httpResponse = await httpRequest.noContent();
    }   
    return httpResponse;
};

export const createPlayerService = async (player: PlayerModel | undefined) => {

     let httpResponse = null;
    //verifica se está vazio
    if(Object.keys(player || {}).length !== 0){
        //aqui iria a lógica para criar um novo jogador
        await PlayersRepository.insertPlayerRepository(player as PlayerModel);
        httpResponse = await httpRequest.created("Jogador criado com sucesso.");
    }else{
        httpResponse = await httpRequest.badRequest("Jogador inválido ou dados incompletos.");
    } 
    return httpResponse;
}
export const deletePlayerService = async (id: number) => {
    let httpResponse = null;
    const isDeleted = await PlayersRepository.deleteOnePlayer(id);
    if(isDeleted){
    httpResponse = await httpRequest.ok({message: "Deletado com sucesso."});
    }else{
        httpResponse = await httpRequest.badRequest("Não existe jogador com o ID informado.");
    }
    return httpResponse;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {

    const data = await PlayersRepository.updatePlayerRepository(id, statistics);
    const response = data ? await httpRequest.ok(data) : await httpRequest.badRequest("Não existe jogador com o ID informado.");
    return response;
}


