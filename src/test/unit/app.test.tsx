import { render, screen } from "@testing-library/react"
import App from './../../App'


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