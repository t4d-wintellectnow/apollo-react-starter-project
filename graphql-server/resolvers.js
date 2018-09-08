import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    allWidgets: () =>
      fetch('http://localhost:3040/widgets')
        .then(res => res.json()),
  },
};
