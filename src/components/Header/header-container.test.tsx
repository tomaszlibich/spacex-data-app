import renderer from 'react-test-renderer';
import { HeaderContainer } from "./header-container";

let component;
let tree: any;

describe("HeaderContainer", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <HeaderContainer />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
