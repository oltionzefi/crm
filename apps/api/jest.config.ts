/* eslint-disable */
export default {
  name: 'api',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/api',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
};
