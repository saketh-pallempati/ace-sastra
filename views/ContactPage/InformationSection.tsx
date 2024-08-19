import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
        Have questions about our club&apos;s goals or want to contribute your ideas? Feel free to fill out the form below, and we&apos;ll be
        in touch soon!
      </p>
      <p>
        <span>Email:</span> ace@sastra.ac.in
      </p>
      <p>
        <span>Address:</span>SASTRA Deemed University, Tirumalaisamudram, Thanjavur, Tamilnadu, India
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: rgba(237,237,238, 1);

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(237,237,238, 0.7);
  }

  span {
    opacity: 1;
    color: rgba(237,237,238, 1);
  }
`;
