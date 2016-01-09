if (Meteor.isClient) {
  Tinytest.add('Menus - defined on client', (test) => {
    test.isNotUndefined(Menus, 'Expected Menus to be defined on the client.');
  });
}
