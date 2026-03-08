import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { HttpError } from "../http";
import { HttpClient, HttpRequest, HttpResponse } from "../http/http-client";

export class AxiosHttpClientAdapter implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  private _formatResponse(response: AxiosResponse): HttpResponse {
    return {
      statusCode: response.status,
      data: response.data,
    };
  }

  private _formatError(error: AxiosError): HttpError {
    const statusCode = error.response?.status ?? 500;
    return new HttpError(statusCode, error.response?.data);
  }

  async request(request: HttpRequest): Promise<HttpResponse> {
    return this.axiosInstance
      .request({
        url: request.url,
        method: request.method,
        data: request.body,
        headers: request.headers,
        auth: request.auth,
      })
      .then(this._formatResponse)
      .catch((error: AxiosError) => {
        throw this._formatError(error);
      });
  }
}
