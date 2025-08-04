import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
):Promise<PodcastTransferModel> => {
    
    //Define a interface (contrato) de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }; 

    //Buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //Verifica se tem conteúdo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    } 

    return responseFormat;
}