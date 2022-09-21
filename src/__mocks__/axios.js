const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Vainqueur",
          last: "Bihame",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/47.jpg",
        },
        login: {
          username: "TheBest",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
