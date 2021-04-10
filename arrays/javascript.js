var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.reverse();
array.pop();
array.push("Kiwi");
array.pop();
array.pop();
array.push("Kiwi");
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2[1][1][0];

