import renderer from 'react-test-renderer';
import { LaunchesMain } from "./launches-main";

let component;
let tree: any;

describe("LaunchesMain", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <LaunchesMain />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
