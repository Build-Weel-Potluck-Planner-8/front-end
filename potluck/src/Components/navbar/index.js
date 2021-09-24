import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import { Logo } from '../logo';
import { ClientNavLinks } from './ClientNavLinks';
import { LoginButton } from './LoginButton'
import { LogoutButton} from './LogoutButton'
import { DeviceSize } from "../responsive";
import { MobileClientNavLinks } from './MobileClientNavLinks';

const NavBarContainer = styled.div`
    width: 98%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
`;

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export default function NavBar(props) {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isClient = localStorage.getItem('role') === 'client' ? true : false;
    const isLoggedOut = !isClient ? true: false;

    return <NavBarContainer>
        <LeftSection>
            {isLoggedOut && <Logo />}
            {!isLoggedOut && !isMobile && <Logo />}
            {!isLoggedOut && isMobile && isClient && <MobileClientNavLinks/>}
        </LeftSection>
        <MiddleSection>
            {!isLoggedOut && isMobile && <Logo />}
            {!isLoggedOut && !isMobile && isClient && <ClientNavLinks/>}

        </MiddleSection>
        <RightSection>
        {isLoggedOut && <LoginButton />}
        {!isMobile && !isLoggedOut && <LogoutButton />}
        {isMobile && !isLoggedOut && <button>Search</button>}
      </RightSection>
    </NavBarContainer>
}