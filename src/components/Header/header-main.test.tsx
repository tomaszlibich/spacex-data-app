import renderer from 'react-test-renderer';
import { HeaderMain } from "./header-main";

let component;
let tree: any;

describe("HeaderMain", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <HeaderMain />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
