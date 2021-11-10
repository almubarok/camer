import { render, fireEvent, act, screen } from "@testing-library/react";
import App from "./App";

const mockDataPokemons = {
  results: [{ name: "ayam" }, { name: "ayam" }],
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockDataPokemons),
  });
});

// jest.mock("./hooks/useGetPokemon", () => ({
//   __esModule: true,
//   default: (url) => mockDataPokemons,
// }));

test("component have header", async () => {
  const { getByTestId } = render(<App />);

  const headerEl = getByTestId("header");

  expect(headerEl).toBeInTheDocument();
});

test("component have counter", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");

  expect(counterEl).toBeInTheDocument();
  expect(counterEl.textContent).toEqual("0");
});

test("component have input", async () => {
  const { getByTestId } = render(<App />);

  const inputEl = getByTestId("input");

  expect(inputEl).toBeInTheDocument();
  expect(inputEl.value).toEqual("1");
});

test("component have button increment", async () => {
  const { getByTestId } = render(<App />);

  const btnIncEl = getByTestId("btnIncrement");

  expect(btnIncEl).toBeInTheDocument();
  expect(btnIncEl.textContent).toEqual("+");
});

test("component have button decrement", async () => {
  const { getByTestId } = render(<App />);

  const btnDecEl = getByTestId("btnDecrement");

  expect(btnDecEl).toBeInTheDocument();
  expect(btnDecEl.textContent).toEqual("-");
});

test("change value amount counter", async () => {
  const { getByTestId } = render(<App />);

  const inputEl = getByTestId("input");

  // e.target.value
  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  expect(inputEl.value).toEqual("5");
});

test("click button decrement", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");
  const btnDecEl = getByTestId("btnDecrement");

  fireEvent.click(btnDecEl);

  expect(counterEl.textContent).toEqual("-1");
});

test("click button increment", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");
  const btnIncEl = getByTestId("btnIncrement");

  fireEvent.click(btnIncEl);

  expect(counterEl.textContent).toEqual("1");
});

test("change amount then click increment", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");
  const btnIncEl = getByTestId("btnIncrement");
  const inputEl = getByTestId("input");

  expect(counterEl.textContent).toEqual("0");
  expect(inputEl.value).toEqual("1");

  fireEvent.click(btnIncEl);

  expect(counterEl.textContent).toEqual("1");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(btnIncEl);

  expect(counterEl.textContent).toEqual("6");
});

test("change input with string", async () => {
  const { getByTestId } = render(<App />);

  const inputEl = getByTestId("input");

  expect(inputEl).toHaveAttribute("type", "number");
});

test("when counter < 0 counter have red color", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");
  const btnDecEl = getByTestId("btnDecrement");

  fireEvent.click(btnDecEl);

  expect(counterEl.textContent).toEqual("-1");
  expect(counterEl.style).toHaveProperty("color", "red");
});

test("when counter >= 100 counter have green color", async () => {
  const { getByTestId } = render(<App />);

  const counterEl = getByTestId("counter");
  const btnIncEl = getByTestId("btnIncrement");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 100,
    },
  });

  fireEvent.click(btnIncEl);

  expect(counterEl.textContent).toEqual("100");
  expect(counterEl.style).toHaveProperty("color", "green");
});

test("get by text", () => {
  const { getByText } = render(<App />);

  const header = getByText(/My Counter/);

  expect(header).toBeInTheDocument();
});

test("pokemon list have 2 elements", async () => {
  await act(async () => render(<App />));

  const pokemons = await screen.findAllByTestId("pokemon");
  expect(pokemons.length).toEqual(2);
});

// jest
// dom
// mock
