import styled from 'styled-components';
import BoldList from 'components/BoldList.jsx';
import { media } from 'utils/media';

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

  ${media('<=tablet')} {
    padding: 4rem 2rem;
  }
`;