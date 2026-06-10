import * as HttpResponse from "../utils/http-helper";
import * as ClubsRepository from "../repositories/clubs-repository";

export const getClubsService = async () => {

    const data = await ClubsRepository.findAllClubs();

    const response = await HttpResponse.ok({message: "Clubs service is working!", data: data});

    return response;
};