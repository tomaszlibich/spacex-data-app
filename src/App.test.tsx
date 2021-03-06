import renderer from 'react-test-renderer';
import App from "./App";

let component;
let tree: any;

describe("App", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <App />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
