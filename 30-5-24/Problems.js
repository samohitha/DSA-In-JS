//-----------------------Roots Of Quadratic Equation -----------------------------------//

// ax^2 + bx + c

// -b +  sqrt + b^2 -4ac /2a

// -b - sqrt - b^2 -4ac /2a

// Math.sqrt

function quardratic(a, b, c) {
  let square_root_value = Math.sqrt(b * b - 4 * a * c);

  let root1 = (-b + square_root_value) / (2 * a);

  let root2 = (-b - square_root_value) / (2 * a);

  console.log(root1, root2);
}

quardratic(2, 5, 1);
