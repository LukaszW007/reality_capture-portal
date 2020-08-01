const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'development',
    repo: 'https://github.com/LukaszW007/reality_capture-portal',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
