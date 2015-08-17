/*
  Create an `xmas` function that accepts an integer
  as an argument. The function should create a Christmas
  tree out of asterisks in the browser console. The
  height is whatever is passed as an argument to the
  function.

  Example output with argument value of 5 (i.e. xmas(5);)

            *
           ***
          *****
         *******
        *********
number_asterisk = (((row - 1) * 2) + 1)
number_space = (((height - 1) / 2) + 1)
*/

// Create your function here. Make sure it takes the height argument.

//print spaces
//print asterisks
//print spaces
var tree_height = 8;

function xmas (tree_height) {
  for (var i = 1; i <= tree_height; i++) {
    var number_asterisk = (((i - 1) * 2) + 1);
    console.log(number_asterisk, "asterisks");
    var number_space = ((((tree_height - 1) * 2) + 1) - number_asterisk);
    console.log(number_space, "spaces");
    var row = "";
    for (var j = 0; j < number_space / 2; j++) {
      row += "&nbsp;";
      row += "&nbsp;";
    }
    for (var j = 0; j < number_asterisk; j++) {
      row += "*";
    }
    for (var j = 0; j < number_space / 2; j++) {
      row += "&nbsp;";
      row += "&nbsp;";
    }
    $("#tree").append("<h1>" + row + "</h1>");
    console.log("__row divider__");
  }
}

xmas(tree_height);

















