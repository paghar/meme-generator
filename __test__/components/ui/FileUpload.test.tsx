import renderer from "react-test-renderer";
import FileUpload from "../../../src/components/ui/FileUpload";

describe(">>>> File Upload", () => {
  test("++++ Snapshot File Upload", () => {
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