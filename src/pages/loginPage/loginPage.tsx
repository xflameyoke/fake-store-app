import React from 'react';
import { Auth } from '../../components/';

const LoginPage = (props: {
  onShowHeader: React.MouseEventHandler<HTMLElement>,
}) => <Auth onLogin={props.onShowHeader} />;

export default LoginPage;
