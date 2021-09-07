import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

//Enzyme testing
Enzyme.configure({adapter: new EnzymeAdapter()});

/** Factory function to create a ShallowWrapper for App component 
 * returns {ShallowWrapper}
*/
const setup = () => shallow(<App/>); //dry (Dont repeat yourself) refactor to make the code less redudnt

const findByTestAtt = (wrapper, val) => 
 wrapper.find(`[data-test= '${val}']`)

test('renders without error', () => {
 const wrapper = setup();
//console.log(wrapper.debug() //expect(wrapper.exists()).toBe(true)
const appComponent = wrapper.find("[data-test='component-app']")
expect(appComponent.length).toBe(1); //find only 1 element here //assertion
});

test("renders increment button",() =>{
 const wrapper = setup();
 const incrementButton = wrapper.find("[data-test='increment-button']")
 expect(incrementButton.length).toBe(1)
})

test("render counter diplay", () => {
  const wrapper = setup();

  //find button
  const counterDisplay =  wrapper.find("[data-test='counter-display']")
 // findByTestAtt(wrapper, "counter-display")
    expect(counterDisplay.length).toBe(1)

  
})

test("counter starts at 0", ()=>{
  const wrapper = setup();
  const count =
  wrapper.find("[data-test='count']").text()
 // findByTestAtt(wrapper,"component-app");
  expect(count).toBe('0')
})

test("click button to increment counter display", () =>{
  const wrapper = setup()
  //find button
  const countOnClick = wrapper.find("[data-test='increment-button']");
//  expect(countOnClick.length).toBe(1)

    //click button
countOnClick.simulate("click")

    //find the display and test that number has been incremented
    const count = wrapper.find("[data-test='count']").text();
    expect(count).toBe("1")
})