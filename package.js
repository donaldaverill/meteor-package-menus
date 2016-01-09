Package.describe({
  name: 'fourquet:menus',
  version: '0.0.2',
  summary: 'Simple menuing for Meteor',
  git: 'https://github.com/fourquet/meteor-package-menus.git',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript@0.1.6',
  'mongo',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages, ['client']);
  api.imply(packages, ['client']);
  api.use(['templating'], ['client'], {
    weak: true,
  });
  api.addFiles('menus.js', ['client']);
  api.export('Menus', ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript@0.1.6', ['client']);
  api.use('tinytest', ['client']);
  api.use('fourquet:menus', ['client']);
  api.addFiles('menus-tests.js', ['client']);
});
