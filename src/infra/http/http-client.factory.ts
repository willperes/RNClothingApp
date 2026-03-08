import { AxiosHttpClientAdapter } from "../adapters/axios.adapter";

const BASE_URL = "http://localhost:3000/";

export const httpClientFactory = () => new AxiosHttpClientAdapter(BASE_URL);
