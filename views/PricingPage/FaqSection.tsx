import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion title="Who can join the Association of Computing Engineers (ACE)?">
        ACE is open to 2nd or 3rd year student enrolled in the School of Computing at SASTRA University. Whether you&apos;re B.Tech in
        computer science, information technology, or any department of SoC, you&apos;re welcome to join us!
      </Accordion>
      <Accordion title="How can I become a member of ACE?">
        To become a member of ACE, attend our recruitments and sign up for the interested cluster. Members from all sub-clusters gain access
        to all club activities and resources. Feel free to reach out to us if you’re interested.
      </Accordion>
      <Accordion title="What types of events does ACE organize?">
        ACE hosts a variety of events throughout the academic year, including workshops, hackathons, guest lectures, networking sessions,
        and social gatherings. We strive to offer something for everyone, catering to different interests and skill levels in computing.
      </Accordion>
      <Accordion title="Do I need to have prior experience in computing to join ACE?">
        Not at all! ACE welcomes members from all levels of expertise, from beginners to advanced users. Our events and activities are
        designed to accommodate a diverse range of backgrounds and interests in computing.
      </Accordion>
      <Accordion title="What are the benefits of joining ACE?">
        By joining ACE, you&aposll have access to a supportive community of peers who share your passion for computing. You'll also have
        opportunities to network with industry professionals, enhance your skills, and participate in hands-on learning experiences.
      </Accordion>
      <Accordion title="How can I stay updated on ACE's activities and events?">
        To stay updated on ACE&aposs activities and events, follow us on our social media channels (Medium, Instagram, LinkedIn) and
        regularly check our website for announcements and event listings. You’ll also be receiving mail updates on your SASTRA mail ID.
      </Accordion>
      <Accordion title="How often does ACE hold meetings?">
        ACE typically holds regular meetings once a month during the academic year. Additionally, we may have extra meetings or events
        scheduled based on the club's activities and initiatives.
      </Accordion>
      <Accordion title="Can I suggest ideas for events or initiatives to ACE?">
        Absolutely! ACE values input from its members and welcomes suggestions for events, workshops, and initiatives. If you have an idea
        you'd like to share or would like to collaborate on organizing an event, please reach out to our social media handles.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 5rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
