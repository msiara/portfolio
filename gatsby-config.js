module.exports = {
  pathPrefix: '/portfolio',
  plugins: [
    'gatsby-plugin-eslint',
    {
      options: {
        head: false,
        trackingId: 'UA-127729463-1',
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    description: 'Mateusz Siara, Software Engineer, Lodz, Poland',
    fullName: 'Mateusz Siara',
    links: {
      github: 'https://github.com/msiara',
      linkedIn: 'https://www.linkedin.com/in/mateusz-siara-b8a7b3140',
      mail: 'mailto:mateusz.siara@outlook.com',
    },
    location: 'Lodz, Poland',
    profession: 'Software Engineer',
    title: 'Mateusz Siara',
  },
};
