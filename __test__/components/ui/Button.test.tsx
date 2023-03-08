import renderer from "react-test-renderer";
import Button from "../../../src/components/ui/Button";

const component = renderer.create(
  <Button
    id="Button"
    type="submit"
    onClick={jest.fn()}                
  > 
    PROCEED TO CHECKOUT
  </Button>            
);

describe(">>>> Button", () => {
  test("++++ Snapshot Button", () => {   
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {   
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});

export {};