const resolvers = {
  Query: {
    books: (parents, args) => {
      console.log("👌 ~ args", args);
      console.log("👌 ~ parents", parents);
      const books = [
        {
          id: "1",
          name: "Book 1",
          genre: "2022-2-2",
        },
        {
          id: "2",
          name: "Book 2",
          genre: "2022-2-2",
        },
        {
          id: "3",
          name: "Book 3",
          genre: "2022-2-2",
        },
      ];
      return books;
    },
    peoples: () => {
      const peoples = [
        {
          id: "1",
          name: "Book 1",
          genre: "Fiction",
        },
        {
          id: "2",
          name: "Book 2",
          genre: "Fiction",
        },
        {
          id: "3",
          name: "Book 3",
          genre: "Fiction",
        },
      ];
      return peoples;
    },
  },
};

export default resolvers;
