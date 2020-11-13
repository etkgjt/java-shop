import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Row } from 'reactstrap';
import { AlertModal, IndicatorModal, MyModal } from '../components';
import { verifyEmail } from '../redux/actions/userAction';
function useQuery() {
	return new URLSearchParams(useLocation().search);
}
const VeriryEmail = () => {
	const history = useHistory();
	let query = useQuery();
	const email = query.get('email');

	useEffect(() => {
		if (email) {
			verify();
		}
	}, [email]);
	const verify = async () => {
		try {
			MyModal.show(() => {}, <IndicatorModal title="Verifing..." />);
			console.log('email', email);
			const res = await verifyEmail(JSON.stringify({ email: email }));
			console.log('Verifi email success', res);
			MyModal.hide(() => {});
			MyModal.show(() => {},
			<AlertModal title="Verify email success !" color="#458AFF" />);
		} catch (err) {
			MyModal.hide(() => {});
			MyModal.show(() => {},
			<AlertModal title="Verify email failed !" color="#F12849" />);
			setTimeout(() => MyModal.hide(() => history.replace('/')), 1000);
			console.log('verify Email err', err);
		}
	};
	return (
		<Container fluid className="pb-5">
			<Row className="title-container mt-5">
				<p class="page-title">Verify</p>
			</Row>
		</Container>
	);
};
export default VeriryEmail;
