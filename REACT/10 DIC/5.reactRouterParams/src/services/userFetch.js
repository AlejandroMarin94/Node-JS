const users = [
  {
    id: 1,
    username: 'Pablo',
    name: 'Pablo 1234',
  },
  {
    id: 2,
    username: 'Luis',
    name: 'Luis 1234',
  },
  {
    id: 3,
    username: 'Alejandro',
    name: 'Alejandro 1234',
  },
  {
    id: 4,
    username: 'Lola',
    name: 'Lola 1234',
  },
];

export const getUsers = () => {
  return [...users];
};

export const getUserById = (idUser) => {
  const user = users.find((u) => u.id == idUser);
  return user;
};
