import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    
    { id: 1, name: "Lionel Messi", club: "Inter Miami", nationality: "Argentina", position: "Forward", statistics: { overall: 90, pace: 82, shooting: 89, passing: 91, dribbling: 93, defending: 35, physical: 65 } },
    { id: 2, name: "Kylian Mbappé", club: "Real Madrid", nationality: "France", position: "Forward", statistics: { overall: 92, pace: 97, shooting: 90, passing: 81, dribbling: 92, defending: 38, physical: 79 } },
    { id: 3, name: "Erling Haaland", club: "Manchester City", nationality: "Norway", position: "Forward", statistics: { overall: 91, pace: 89, shooting: 94, passing: 70, dribbling: 81, defending: 45, physical: 92 } },
    { id: 4, name: "Vinícius Júnior", club: "Real Madrid", nationality: "Brazil", position: "Forward", statistics: { overall: 90, pace: 95, shooting: 84, passing: 80, dribbling: 92, defending: 32, physical: 73 } },
    { id: 5, name: "Kevin De Bruyne", club: "Manchester City", nationality: "Belgium", position: "Midfielder", statistics: { overall: 91, pace: 74, shooting: 86, passing: 94, dribbling: 87, defending: 65, physical: 78 } },
    { id: 6, name: "Jude Bellingham", club: "Real Madrid", nationality: "England", position: "Midfielder", statistics: { overall: 90, pace: 81, shooting: 85, passing: 83, dribbling: 88, defending: 78, physical: 84 } },
    { id: 7, name: "Rodri", club: "Manchester City", nationality: "Spain", position: "Midfielder", statistics: { overall: 91, pace: 68, shooting: 80, passing: 86, dribbling: 81, defending: 88, physical: 85 } },
    { id: 8, name: "Mohamed Salah", club: "Liverpool", nationality: "Egypt", position: "Forward", statistics: { overall: 89, pace: 90, shooting: 88, passing: 82, dribbling: 89, defending: 45, physical: 76 } },
    { id: 9, name: "Virgil van Dijk", club: "Liverpool", nationality: "Netherlands", position: "Defender", statistics: { overall: 89, pace: 78, shooting: 60, passing: 75, dribbling: 72, defending: 91, physical: 88 } },
    { id: 10, name: "Alisson Becker", club: "Liverpool", nationality: "Brazil", position: "Goalkeeper", statistics: { overall: 89, pace: 55, shooting: 20, passing: 85, dribbling: 40, defending: 50, physical: 82 } }  
];

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerByIdRepository = async (id: number): Promise<PlayerModel | undefined> => {
    
    return database.find(player => player.id === id);
};


export const insertPlayerRepository = async (player: PlayerModel) => {
    database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
};

export const updatePlayerRepository = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | undefined> => {
    const playerIndex = database.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
        
    }
    return database[playerIndex];
};
