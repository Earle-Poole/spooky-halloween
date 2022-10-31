import {
  findAllByText,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import MemoryGameBoard from "../components/MemoryGameBoard";

const mockSetGameIsStarted = jest.fn();

describe("MemoryGameBoard", () => {
  it("render without error", () => {
    const { baseElement } = render(
      <MemoryGameBoard setGameIsStarted={mockSetGameIsStarted} />
    );
    expect(baseElement).toBeInTheDocument();
  });
  it("starts by rendering 16 cards", () => {
    const { getAllByText } = render(
      <MemoryGameBoard setGameIsStarted={mockSetGameIsStarted} />
    );

    const cards = getAllByText("?");
    expect(cards).toHaveLength(16);
  });
  it("shows image of clicked card", async () => {
    const { getAllByText, findAllByText } = render(
      <MemoryGameBoard setGameIsStarted={mockSetGameIsStarted} />
    );

    const cards = getAllByText("?");
    fireEvent(cards[0], new MouseEvent("click", { bubbles: true }));
    const newListOfCards = await findAllByText("?");

    expect(newListOfCards).toHaveLength(15);
  });
  it("tests a round of matching", async () => {
    const { getAllByText, findAllByText } = render(
      <MemoryGameBoard setGameIsStarted={mockSetGameIsStarted} />
    );

    const cards = getAllByText("?");
    const cardOneOption = cards[0].getAttribute("data-option");
    const cardTwoOption = cards[1].getAttribute("data-option");
    fireEvent(cards[0], new MouseEvent("click", { bubbles: true }));
    fireEvent(cards[1], new MouseEvent("click", { bubbles: true }));

    
    await waitFor(
        async () => {
          const newListOfCards = await findAllByText("?");
        if (cardOneOption === cardTwoOption) {
          expect(newListOfCards).toHaveLength(14);
        } else {
          expect(newListOfCards).toHaveLength(16);
        }
      },
      { timeout: 510 }
    );
  });
});
