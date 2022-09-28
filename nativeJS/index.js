let o = {
    a: [1]
};

// at first I wrote, let o = { a: 1 }; 
// which resulted in, o.a === 1, false.
// after some thinking and reading i realized,
// [0] is used to access a position in an array.
// Then I changed a: 1 to, a: [1] is === 1, true.