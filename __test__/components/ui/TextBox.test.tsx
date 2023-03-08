import renderer from "react-test-renderer";
import TextBox from "../../../src/components/ui/TextBox";

const component = renderer.create(
  <TextBox
    id="txt1"
    value={"test"}
    type="text"
    placeholder="Insert a number"               
    onChange={jest.fn()}                
  />             
);

describe(">>>> TextBox", () => {
  test("++++ Snapshot TextBox", () => {    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {   
    const instance = component.root;
    const button = instance.findByType("input");
    button.props.onChange();
    expect(button.props.children).toBe(undefined);
  });
});

export {};