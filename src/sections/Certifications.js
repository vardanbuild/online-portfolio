import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { StaticQuery, graphql } from 'gatsby';
import { CardContainer, Card } from '../components/Card';
import Fade from 'react-reveal/Fade';
import { Text, Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';
import SocialLink from '../components/SocialLink';
import Hide from '../components/Hide';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const CARD_HEIGHT = '150px';
const CARD_WIDTH = '100px';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_WIDTH});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_WIDTH} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: 10% 0;
  width: ${CARD_WIDTH};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_WIDTH} / 2);
  }
`;

const CertificationTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Certification = ({
  link,
  description,
  receivedAt,
  vendor,
  vendorUrl,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {description}
          </Title>
        </span>
        <br />
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          Provided by :{' '}
          <a href={vendorUrl} target="_blank">
            {vendor}
          </a>
        </Text>
      </TextContainer>
      <ImageContainer>
        <CertificationTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={4} fontSize={75}>
              <SocialLink
                name="View Certificate"
                fontAwesomeIcon="certificate"
                url={link}
              />
            </Box>
          </Flex>
        </CertificationTag>
      </ImageContainer>
    </Flex>
  </Card>
);

const Talks = () => (
  <Section.Container id="certifications" Background={Background}>
    <Section.Header name="Certifications" icon="🎖" label="certifications" />
    <StaticQuery
      query={graphql`
        query CertificationsQuery {
          allContentfulCertifications {
            nodes {
              description
              link
              vendor
              vendorUrl
              receivedAt(formatString: "YYYY")
            }
          }
        }
      `}
      render={({ allContentfulCertifications }) => (
        <Flex
          style={{
            float: 'right',
          }}
        >
          <CardContainer>
            {allContentfulCertifications.nodes.map((p, i) => (
              <Fade bottom delay={i * 200} key={p.id}>
                <Certification {...p} />
              </Fade>
            ))}
          </CardContainer>
        </Flex>
      )}
    />
  </Section.Container>
);

export default Talks;
