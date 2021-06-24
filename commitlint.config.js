const typeEnum = [
  'codestyle',
  'package',
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'test',
  'revert',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
    'header-max-length': [2, 'always', 160],
  },
};
