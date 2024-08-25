import styled from 'styled-components';
import Page from 'components/Page';
import Features from 'views/HomePage/Features';

export default function ClustersPage() {
  return (
    <Page title="Clusters" description="Explore our diverse clusters, each led by dedicated individuals.">
      <Wrapper>
        <Features />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;