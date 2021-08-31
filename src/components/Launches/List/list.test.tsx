import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { LaunchesContext, initialData } from "../context";
import { LaunchesList } from "./index";
import { mockLaunchData, threeLaunchItems } from './mock-launches-data';

configure({ adapter: new Adapter() });

const initialContextData = { ...initialData };

let component;
let tree: any;
let wrapper: any;

describe("LaunchesList", () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      component = renderer.create(
        <LaunchesContext.Provider value={initialData}>
          <LaunchesList />
        </LaunchesContext.Provider>,

      );
      tree = component.toJSON();
    });

    it("should match the snapshot", () => {
      expect(tree).toMatchSnapshot();
    });

    describe('And there is no launch items available', () => {
      beforeEach(() => {
        wrapper = mount(
          <LaunchesContext.Provider value={{ ...initialContextData, launches: [] }}>
            <LaunchesList />
          </LaunchesContext.Provider>
        )
      });

      it("should render no items on the list", async () => {
        expect(wrapper.find('li').length).toEqual(0);
      });
    });

    describe('And there is only one launch item available', () => {
      beforeEach(() => {
        wrapper = mount(
          <LaunchesContext.Provider value={{ ...initialContextData, launches: [mockLaunchData] }}>
            <LaunchesList />
          </LaunchesContext.Provider>
        )
      });

      it("should render only one item on the list", async () => {
        expect(wrapper.find('li').length).toEqual(1);
      });
    });

    describe('And there are three launch items available', () => {
      beforeEach(() => {
        wrapper = mount(
          <LaunchesContext.Provider value={{ ...initialContextData, launches: threeLaunchItems }}>
            <LaunchesList />
          </LaunchesContext.Provider>
        )
      });

      it("should render three items on the list", async () => {
        expect(wrapper.find('li').length).toEqual(3);
      });
    });
  });
});
