import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, Flex, Heading, Image, Text,
} from 'rebass';
import { ThemeProvider } from 'styled-components';
import { Envelope } from 'styled-icons/fa-solid';
import Avatar from '../assets/avatar.png';
import {
  Button, Github, GlobalStyle, Layout, LinkedIn, Panel,
} from '../components';
import theme from '../theme';

const Index = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Helmet>
      <Layout>
        <Panel>
          <Box mt={-64}>
            <Flex justifyContent="center">
              <Image
                alt="avatar"
                borderRadius="50%"
                height={128}
                src={Avatar}
              />
            </Flex>
          </Box>
          <Box p={32}>
            <Heading mb={16} textAlign="center">
              {data.site.siteMetadata.fullName}
            </Heading>
            <Flex justifyContent="center" mb={16}>
              <OutboundLink href={data.site.siteMetadata.links.mail}>
                <Button>
                  <Envelope size={16} />
                  {' '}
                  Contact me
                </Button>
              </OutboundLink>
            </Flex>
            <Text mb={16} textAlign="center">
              {data.site.siteMetadata.profession}
            </Text>
            <Text mb={32} textAlign="center">
              {data.site.siteMetadata.location}
            </Text>
            <Flex justifyContent="center">
              <Box mr={32}>
                <OutboundLink title="Github" href={data.site.siteMetadata.links.github}>
                  <Github size={32} />
                </OutboundLink>
              </Box>
              <OutboundLink title="LinkedIn" href={data.site.siteMetadata.links.linkedIn}>
                <LinkedIn size={32} />
              </OutboundLink>
            </Flex>
          </Box>
        </Panel>
      </Layout>
    </Fragment>
  </ThemeProvider>
);

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        links: PropTypes.shape({
          github: PropTypes.string.isRequired,
          linkedIn: PropTypes.string.isRequired,
          mail: PropTypes.string.isRequired,
        }),
        location: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        fullName
        links {
          github
          linkedIn
          mail
        }
        location
        profession
        title
      }
    }
  }
`;

export default Index;
