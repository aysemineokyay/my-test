// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { getProducts } from "../services/api";
export const API_URL = "http://localhost";
export const PORT = "3001";

export const getMockBaseUrl = () => {
  return `${API_URL}:${PORT}`;
};
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  http.get(`${getMockBaseUrl()}/products`, async () => {
    const products = await getProducts();
    return HttpResponse.json(products, { status: 200 });
  }),
];
