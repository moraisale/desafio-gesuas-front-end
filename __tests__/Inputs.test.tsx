// Home.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom/extend-expect"; // add this import

describe("Home Page", () => {
  test("renders Home component", () => {
    render(<Home />);
    expect(screen.getByText("Cadastro")).toBeInTheDocument(); // fix the error
  });

  test("fills and submits the form", () => {
    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText("Digite o nome"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("dd/mm/aaaa"), {
      target: { value: "01/01/2000" },
    });
    fireEvent.change(screen.getByLabelText("Sexo biológico"), {
      target: { value: "Masculino" },
    });
    fireEvent.click(screen.getByLabelText("Mulher cisgênero"));
    fireEvent.change(screen.getByLabelText("Cor/raça"), {
      target: { value: "Branca" },
    });
    fireEvent.click(screen.getByLabelText("Sim"));
    fireEvent.change(screen.getByPlaceholderText("0000000000"), {
      target: { value: "123456789" },
    });

    fireEvent.click(screen.getByText("Cadastrar"));
  });
});
