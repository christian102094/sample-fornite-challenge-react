const linkMap = {
  api: {
    development: 'http://localhost:9181',
    staging: 'https://epicgames.staging.streamelements.com',
    production: 'https://epicgames.streamelements.com',
  },
  LP: {
    development: 'http://localhost:3001',
    staging: 'https://landingnite.staging.streamelements.com',
    production: 'https://leaderboardchallenge.fortnite.com',
  },
};

const getLink = (name) => {
  if (!window.location.href.includes('staging')) {
    return linkMap[name][process.env.NODE_ENV];
  }
  return linkMap[name].staging;
};

export default getLink;
