import { Button, Container } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
import CircularProgress from '@material-ui/core/CircularProgress';

const AlertModal = ({ color, title = '' }) => {
	return (
		<Container className="justify-content-center align-items-center d-flex flex-column bg-white pb-5 w-50">
			<Row className="justify-content-center mt-5 mb-3 bg-white">
				<h4 style={{ color: color }}>{title}</h4>
			</Row>
		</Container>
	);
};
export default AlertModal;
