import renderer from "react-test-renderer";
import SelectBox from "../../../src/components/ui/SelectBox";
import {sizeItems} from "../../../src/data/constants/constants";

describe(">>>> SelectBox", () => {
  test("++++ Snapshot SelectBox", () => {
    const component = renderer.create(
      <SelectBox
        id="selectBox"
        items={sizeItems}
        selectedValue=""
        onChange={jest.fn()}                
      />             
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};