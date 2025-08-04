import { IncomingMessage, ServerResponse } from "http";
import { servicesListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const defaultContent = {'Content-type': ContentType.JSON};

export const getListEpisodes = async (
    request:IncomingMessage, 
    response:ServerResponse) => {
    const content: PodcastTransferModel = await servicesListEpisodes();

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body))
    response.end();
};

export const getFilterEpisodes = async (
    request:IncomingMessage, 
    response:ServerResponse
) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));
    response.end();
}

