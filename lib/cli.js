// Generated by CoffeeScript 1.11.1
var path, program, ronin;

path = require('path');

ronin = require('ronin');

program = ronin();

program.set({
  path: path.join(__dirname, '..')
});

program.autoupdate(function() {
  program.set({
    path: __dirname,
    delimiter: ':'
  });
  return program.run();
});

//# sourceMappingURL=cli.js.map
