module.exports = {

  cowsay: function(greeting) {
    const cow =
      '                   \n' +
      '      ' + greeting + '    \n' +
      '      ---------------     \n' +
      '        •           \n' +
      '         •          \n' +
      '          •         \n' +
      '          (___) \n' +
      '          (o o)_____/ \n' +
      '            @@\'    \\  \n' +
      '             \\ ____, / \n' +
      '            //    // ';

    console.log(cow);
  }
};
