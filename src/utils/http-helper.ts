import { HttpResponse } from "../models/httpResponde-model";


export const ok = async (data: any): Promise<HttpResponse> => ({
    statusCode: 200,
    body: data,
});

export const noContent = async (): Promise<HttpResponse> => ({
    statusCode: 204,
    body: null,
});

export const badRequest = async (message: string): Promise<HttpResponse> => ({
    statusCode: 400,
    body: { error: message },
});


export const created = async (message: string): Promise<HttpResponse> => ({
    statusCode: 201,
    body: { message: message },
});