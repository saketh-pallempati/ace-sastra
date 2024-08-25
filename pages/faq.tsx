import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';

export default function EventsPage() {
    return (
        <Page title="FAQ" description="Find answers to the most frequently asked questions about us.">
            <Wrapper>
                <FaqSection />
            </Wrapper>
        </Page>
    );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;