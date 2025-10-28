module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  }
};
