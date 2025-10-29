import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup-tests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^reactbits$': '<rootDir>/lib/vendor/reactbits.tsx',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};

export default createJestConfig(customJestConfig);
