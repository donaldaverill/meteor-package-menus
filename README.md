Menus for Meteor
---
[![Build Status](https://travis-ci.org/fourquet/meteor-package-menus.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-menus)

Simple menuing for Meteor

#### Install
`meteor add fourquet:menus`

Example using Blaze (not required):
```html
<!-- example.html -->
<template name="menu">
  {{#each menuItem in (Menus 'Main')}}
    <a href='{{menuItem.route}}'>{{menuItem.content}}</a><br>
  {{/each}}
</template>
```

```js
// example.js
if (Meteor.isClient) {
  Menus.Main = Menus.create();

  Menus.Main.insert({
    content: 'Users',
    route: '/users',
    weight: 1,
    icon: 'th-large',
    roles: 'owner, manager',
  });

  Menus.Main.insert({
    content: 'Home',
    route: '/',
    weight: -999,
    icon: 'th-home',
    roles: 'public',
  });
}
```

#### Version
0.0.2

#### License
MIT
