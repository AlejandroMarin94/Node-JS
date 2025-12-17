const mobiles = [
  {
    id: 1,
    brand: 'Apple',
    model: '11',
    year: '1990',
  },
  {
    id: 2,
    brand: 'Samsung',
    model: 'S22',
    year: '1995',
  },
];

export const getAllMobiles = () => {
  return [...mobiles];
};
