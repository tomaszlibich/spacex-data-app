import renderer from 'react-test-renderer';
import { LaunchesContainer } from "./launches-container";

let component;
let tree: any;

describe("LaunchesContainer", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <LaunchesContainer />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
