import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { startLogout } from '../../actions/auth';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {

	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();

	const wrapper = shallow(<Header startLogout={() => {}} />);
	// expect(toJson(wrapper)).toMatchSnapshot();
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(
		<Header startLogout={startLogout} />
	).find('button').simulate('click');

	expect(startLogout).toHaveBeenCalled();
});
