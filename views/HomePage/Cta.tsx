import React from 'react';
import styled from 'styled-components';
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
