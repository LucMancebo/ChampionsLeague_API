import { HttpResponse } from "../Models/httpResponseModel";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = async (any: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      Message: "sucessful"
    },
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};



