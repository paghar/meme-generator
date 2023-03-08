import renderer from "react-test-renderer";
import FileUpload from "../../../src/components/ui/FileUpload";

describe(">>>> Button", () => {
  test("++++ Snapshot Button", () => {
    const component = renderer.create(
      <FileUpload  
        btnText="File Upload"
        handleChange={jest.fn()}                     
      />             
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};