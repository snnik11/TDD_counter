import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without error', () => {
 const wrapper = shallow(<App/>)
//console.log(wrapper.debug())
//expect(wrapper.exists()).toBe(true)
const appComponent = wrapper.find("[data-test='component-app']")
expect(appComponent.length).toBe(1); //find only 1 element here
});

test("renders increment button",() =>{
 const wrapper =shallow(<App/>)
 const button = wrapper.find("[data-test='component-icrement-button]")
 expect(button.length).toBe(1)
})

test("render counter diplay", () => {
  const wrapper = shallow(<App/>)
  const counterDisplay = wrapper.find("[data-test='component-counter-display']")
  expect(counterDisplay.length).toBe(1)
})

test("counter starts at 0", ()=>{
  const wrapper = shallow(<App/>)
  const counterStarter = wrapper.find("[data-test='component-counter-starter']")
  expect(counterStarter.length).toBe(1)
})

test("click button to increment counter", () =>{
  const wrapper = shallow(<App/>)
  const countOnClick = wrapper.find("[data-test='component-count-onClick");
  expect(countOnClick.length).toBe(1)
})