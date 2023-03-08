import renderer from "react-test-renderer";
import SelectBox from "../../../src/components/ui/SelectBox";

describe(">>>> SelectBox", () => {
  test("++++ Snapshot SelectBox", () => {
    const component = renderer.create(
      <SelectBox
        id="selectBox"
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