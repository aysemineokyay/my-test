import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";
import * as api from "../services/api";
import { mockReactNativeFirestore } from "firestore-jest-mock";

const users = [{ email: "aysemine@mail.com", password: "12345678" }];

mockReactNativeFirestore({
  database: {
    users: users,
  },
});

jest.mock("../services/api", () => ({
  userExist: jest.fn((email, password) => {
    return users.some(
      (user) => user.email === email && user.password === password
    );
  }),
}));

describe("LoginScreen Testi", () => {
  test("Butona tıklandığında handleLogin fonksiyonu çağrılmalıdır.", async () => {
    const mockNavigation = { navigate: jest.fn() };

    const { getByTestId, getByPlaceholderText } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    const loginButton = getByTestId("loginButton");

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Şifre");

    fireEvent.changeText(emailInput, "aysemine@mail.com");
    fireEvent.changeText(passwordInput, "12345678");

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(api.userExist).toHaveBeenCalledWith(
        "aysemine@mail.com",
        "12345678"
      );
    });

    await waitFor(() => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith("HomeScreen");
    });
  });
});
