import styled from 'styled-components';
import Page from 'components/Page';
import Testimonials from 'views/HomePage/Testimonials';

export default function EventsPage() {
  return (
    <Page title="Events" description="Discover our exciting events, each designed to inspire, educate, and engage">      <Wrapper>
        <Testimonials />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;