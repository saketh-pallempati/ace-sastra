import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import CircleMenu from 'components/CircleMenu';

export default function Cta() {
  return (
    <CtaWrapper>
        <CircleMenu />
    </CtaWrapper>
  );
}

const CtaWrapper = styled.div`
  padding: 5rem;
  background: rgb(var(--secondary));
`;
