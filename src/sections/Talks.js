import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { StaticQuery, graphql } from 'gatsby';
import { CardContainer, Card } from '../components/Card';
import Fade from 'react-reveal/Fade';
import { Text, Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';
import SocialLink from '../components/SocialLink';

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const CARD_HEIGHT = '200px';

const ImageContainer = styled.div`
  margin: 10% 0;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Talk = ({ topic, description, presentationUrl, eventDate }) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {topic}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {description?.description}
        </Text>
      </TextContainer>
      <ImageContainer>
        <Flex
          style={{
            float: 'right',
          }}
        >
          <Box mx={4} fontSize={100}>
            <SocialLink
              name="View Presentation"
              fontAwesomeIcon="google"
              url={presentationUrl}
            />
          </Box>
        </Flex>
      </ImageContainer>
    </Flex>
  </Card>
);

const Talks = () => (
  <Section.Container id="talks" Background={Background}>
    <Section.Header name="Talks" icon="🎙" label="talks" />
    <StaticQuery
      query={graphql`
        query TalksQuery {
          allContentfulTalks {
            nodes {
              id
              topic
              description {
                description
              }
              eventDate(formatString: "YYYY")
              presentationUrl
            }
          }
        }
      `}
      render={({ allContentfulTalks }) => (
        <CardContainer minWidth="350px">
          {allContentfulTalks.nodes.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Talk {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Talks;
