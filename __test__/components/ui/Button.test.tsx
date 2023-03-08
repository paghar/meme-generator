import renderer from "react-test-renderer";
import SelectBox from "../../../src/components/ui/SelectBox";

describe(">>>> Button", () => {
  test("++++ Snapshot Button", () => {
    const component = renderer.create(
      <SelectBox
        id="Button"
        items={[]}
        selectedValue=""
        onChange={jest.fn()}                
      />             
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};