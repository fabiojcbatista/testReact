import { render, screen } from "@testing-library/react"
import App from '../../App/App'

describe('Test React', ()=> {

test('True is truthy', ()=>{
 expect(true).toBe(true);
})


test('False is falsy', ()=>{
 expect(false).toBe(false);
})

test('render Link', ()=> {
 render(< App/>);
 const linkElement = screen.getByRole('link',{name: /learn react/i});
 expect(linkElement).toBeInTheDocument();
})

test('render', ()=> {
 render(< App/>);
 const linkElement = screen.getByText(/learn react/i);
 expect(linkElement).toBeInTheDocument();
})
});