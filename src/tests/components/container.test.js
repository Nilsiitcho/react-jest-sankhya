import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Counter from "../../components/counter";

test("Renderiza contador com o valor inicial de Zero", () =>{
   const {getByText} = render(<Counter/>)
   const counterElement = getByText(/0/i);
   expect(counterElement).toBeInTheDocument();
});

test("Renderiza contador corretamente", () => {
   const {asFragment} = render(<Counter />)
   expect(asFragment()).toMatchSnapshot();
})