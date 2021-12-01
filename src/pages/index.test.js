import { render, act, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Index from "./index";
import { QueryGetTodolist } from "./index";

const mocks = [
  {
    request: {
      query: QueryGetTodolist,
      variables: {},
    },
    result: {
      data: {
        todolist: [
          {
            id: 1,
            title: "coba test",
          },
        ],
      },
    },
  },
];

test("renders without error", async () => {
  await act(async () =>
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>
    )
  );

  const text = await screen.findByText("coba test");
  expect(text).toBeInTheDocument();
});
