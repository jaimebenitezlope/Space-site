import Nav from '../nav/Nav';
import { StyledHeader } from './header.styles';

const Header = () => {
	return (
        
		<StyledHeader>
			<img src='/public/assets/shared/logo.svg' alt='' />
            <Nav/>   
		</StyledHeader>
	);
};

export default Header;