import * as HttpResponse from "../utils/HTTPHelper";
import * as repository from "../Repositories/clubsData"

export const getClubService = async () => {
const data = await repository.findAllClubs()

    const response = HttpResponse.ok(data)

    return response
}