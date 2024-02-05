const generateRandomColor = () => {
  const darkPastelColors = [
    '8B4513',
    '556B2F',
    '483D8B',
    '800080',
    '2F4F4F',
    '800000',
    '808000',
    '9370DB',
    '4B0082',
    '8B008B',
    '556B2F',
    'CD853F',
    'A52A2A',
    '2E8B57',
    '8B4513',
    '9932CC',
    '8B3626',
    '483D8B',
    '800080'
  ];

  const color = `#${darkPastelColors[Math.floor(Math.random() * darkPastelColors.length)]}`;

  return color;
};

module.exports = generateRandomColor;
