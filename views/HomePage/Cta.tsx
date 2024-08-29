import React from 'react';
import styled from 'styled-components';
import BoldList from 'components/BoldList.jsx';
export default function Cta() {
  return (
    <CtaWrapper>
      <BoldList />
    </CtaWrapper>
  );
}

const CtaWrapper = styled.div`
  padding: 5rem;
  background: rgb(var(--secondary));
`;
