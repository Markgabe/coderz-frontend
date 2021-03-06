import React from 'react';

import { Home } from '@styled-icons/fluentui-system-regular';
import { Sword } from '@styled-icons/remix-line';
import { Trophy } from '@styled-icons/ionicons-outline';
import { Gear } from '@styled-icons/evil';
import { User } from '@styled-icons/fa-regular';
import { ChevronDoubleRight } from '@styled-icons/heroicons-outline';

import Pages from '../../utils/Pages';

import { Container, Logo, Separator, IconGroup, ExpandButton } from './styles';
import Icon from '../Icon';

export default function SideNavbar({ active }) {
  return (
    <Container>
      <Logo>C</Logo>
      <Separator />
      <IconGroup>
        <Icon to='/' active={active === Pages.HOME} svg={Home} />
        <Icon to='/challenge' active={active === Pages.CHALLENGE} svg={Sword} />
        <Icon to='/rank' active={active === Pages.RANK} svg={Trophy} />
        <Icon to='#' active={active === Pages.CONFIG} svg={Gear} />
        <Icon to='#' active={active === Pages.USER} svg={User} />
      </IconGroup>
      <ExpandButton>
        <Icon svg={ChevronDoubleRight} to='#' />
      </ExpandButton>
    </Container>
  );
}
