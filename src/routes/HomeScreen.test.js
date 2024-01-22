import { mockReactNativeFirestore } from "firestore-jest-mock";
import * as api from "../services/api";
import { waitFor } from "@testing-library/react-native";

mockReactNativeFirestore({
  database: {
    products: [
      { name: "Papatya", price: 50 },
      { name: "Lavanta", password: 100 },
    ],
  },
});

jest.mock("../services/api", () => ({
  getProducts: jest.fn().mockResolvedValueOnce([
    { name: "Papatya", price: 50 },
    { name: "Lavanta", price: 100 },
  ]),
}));

test("Ürünler arasında papatya bulunuyor mu?", async () => {
  const products = await api.getProducts();

  expect(products.map((product) => product.name)).toEqual(
    expect.arrayContaining(["Papatya"])
  );
});
