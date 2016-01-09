if (Meteor.isServer) {
  Tinytest.add('Menus - not defined on server', (test) => {
    test.equal(Menus, undefined, 'Expected ' +
      'Menus to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Menus - defined on client', (test) => {
    test.notEqual(Menus, undefined, 'Expected ' +
      'Menus to be defined on the client.');
  });
}
