import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className='box-layout'>
		<div className='box-layout__box'>
			<h1 className='box-layout__title'>Expelliarmus</h1>
			<p>A handy (even life-saving) spell for removing an object from an enemy's grasp</p>
			<button className='myButton' onClick={startLogin}>Login with Google</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);