function triangleType (a, b, c) {
    if (!isTriangleValid(a, b, c)) {
        // We might as well throw an error if this is a business critical logic.
        return null;
    }
    if (a === b && b === c && a === c) {
        return 'equilateral';
    } else if (a === b || a === c || b === c) {
        return 'isosceles';
    }
    return 'scalene';
};

function isTriangleValid (a, b, c) {
    // Check if it's possible to have a triangle with given sides.
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    }
    return false;
}

// Use CommonJS to make this module universal for Browser builds and Node.js
module.exports = {
    triangleType,
    isTriangleValid
};