import { PlayerModel } from "../models/player-model";


const database: PlayerModel[] = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Ronaldo" },
    { id: 3, name: "Neymar" },
];

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerByIdRepository = async (id: number): Promise<PlayerModel | undefined> => {
    
    return database.find(player => player.id === id);
};