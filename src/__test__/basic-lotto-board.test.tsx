import { BasicLottoBoard } from "../basic-lotto-board";

describe("BasicLottoBoard game component", () => {
  it("should render a default board", () => {
    const containerDefaultBoard = (): JSX.Element => <BasicLottoBoard />;
    expect(containerDefaultBoard).toMatchSnapshot();
  });
});
