import * as PlayersRepository from "../repositories/player-repository";
import { noContent, ok } from "../utils/http-helper";


export const getPlayeService= async () => {

    const data = await PlayersRepository.findAllPlayersRepository();


    let httpResponse = null;
    
    
    
    if(data){
        httpResponse = await ok(data);
    }else{
        httpResponse = await noContent();
    }

    return httpResponse;
};