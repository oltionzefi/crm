module.exports = {
  name: 'crm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/crm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
