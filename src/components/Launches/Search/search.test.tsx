import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { LaunchesContext, initialData } from "../context";
import { LaunchesSearch } from "./index";

configure({ adapter: new Adapter() });

const setSearchSpy = jest.fn();
const initialContextData = { ...initialData, setSearch: setSearchSpy };

let component;
let tree: any;
let wrapper: any;

describe("LaunchesSearch", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <LaunchesSearch />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });

    describe('And no search phrase has been provided', () => {
      beforeEach(() => {
        wrapper = mount(
          <LaunchesContext.Provider value={{ ...initialContextData }}>
            <LaunchesSearch />
          </LaunchesContext.Provider>
        )
      });

      it("should render only one item on the list", async () => {
        expect(wrapper.find('input').value).not.toBeDefined();
      });

      describe('And search phrase has been provided', () => {
        beforeEach(() => {
          wrapper = mount(
            <LaunchesContext.Provider value={{ ...initialContextData }}>
              <LaunchesSearch />
            </LaunchesContext.Provider>
          )

          wrapper.find('input').simulate('change', { target: { name: "search", value: "xyz" } })
        });

        it("should update the context with search phrase", async () => {
          expect(setSearchSpy).toHaveBeenCalledWith('xyz');
        });
      });
    });
  });
});
