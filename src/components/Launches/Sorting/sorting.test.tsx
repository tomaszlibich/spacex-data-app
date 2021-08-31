import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { LaunchesContext, initialData } from "../context";
import { LaunchesSorting } from "./index";

configure({ adapter: new Adapter() });

const setSortingSpy = jest.fn();
const initialContextData = { ...initialData, setSorting: setSortingSpy };

let component;
let tree: any;
let wrapper: any;

describe("LaunchesSorting", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <LaunchesSorting />,
      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });

    describe('And no sorting has been applied', () => {
      beforeEach(() => {
        wrapper = mount(
          <LaunchesContext.Provider value={{ ...initialContextData }}>
            <LaunchesSorting />
          </LaunchesContext.Provider>
        )
      });

      it("should render only one item on the list", async () => {
        expect(setSortingSpy).not.toHaveBeenCalled();
      });

      describe('And sorting by NAME has been applied', () => {
        beforeEach(() => {
          wrapper = mount(
            <LaunchesContext.Provider value={{ ...initialContextData }}>
              <LaunchesSorting />
            </LaunchesContext.Provider>
          )

          wrapper.find('button:first-child').simulate('click');
        });

        it("should set the correct sorting for the list", async () => {
          expect(setSortingSpy).toHaveBeenCalledWith('name');
        });
      });

      describe('And sorting by DATE has been applied', () => {
        beforeEach(() => {
          wrapper = mount(
            <LaunchesContext.Provider value={{ ...initialContextData }}>
              <LaunchesSorting />
            </LaunchesContext.Provider>
          )

          wrapper.find('button:last-child').simulate('click');
        });

        it("should set the correct sorting for the list", async () => {
          expect(setSortingSpy).toHaveBeenCalledWith('date');
        });
      });
    });
  });
});
