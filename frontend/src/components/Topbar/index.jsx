import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  BarContainer,
  Rank,
  LevelContainer,
  UserInfoContainer,
  LogoutIcon,
  LogoutButton,
} from './styles';

export default function SideNavbar() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');

    history.push('/login');
  };

  return (
    <Container>
      <BarContainer>
        <Rank />
        <LevelContainer>
          <h1>LEVEL 34</h1>
          <h4>Ruby IV</h4>
        </LevelContainer>
        <UserInfoContainer>
          <p>{localStorage.getItem('username') || 'MARKGOD'}</p>
          <LogoutButton onClick={() => handleLogout()}>
            <LogoutIcon />
          </LogoutButton>
        </UserInfoContainer>
      </BarContainer>
    </Container>
  );
}
