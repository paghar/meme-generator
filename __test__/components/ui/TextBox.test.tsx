import renderer from "react-test-renderer";
import TextBox from "../../../src/components/ui/TextBox";

describe(">>>> TextBox", () => {
  test("++++ Snapshot TextBox", () => {
    const component = renderer.create(
      <TextBox
        id="txt1"
        value={23}
        type="text"
        placeholder="Insert a number"               
        onChange={jest.fn()}                
      />             
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};