import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request:http.IncomingMessage, response:http.ServerResponse) => {

        // QueryString - Cadeia de Consulta, parte de uma URL que contém informações adicionais enviadas ao servidor
        const baseURL = request.url?.split("?")[0];

        //Listar Podcasts
        if(request.method === HttpMethod.GET && baseURL === Routes.LIST) {
            await getListEpisodes(request, response);
        }
        //Filtrar Episódios
        if(request.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }
};