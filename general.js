/************************/
/*** SCOPE THIS BETWEEN NORMAL FUNCTION AND ARROW FUNCTION ***/
/************************/
// Typically if we’re writing ES5, we’ll use something like Function.prototype.bind
// to grab the this value from another scope to change a function’s execution context

// Arrow funtion inherit the scope from the parent

/************************/
/*** CLOSURE OR LEXICAL SCOPE ***/
/************************/
// Closure means that an inner function always has access to the vars and parameters of its outer function,
// even after the outer function has returned. You have learned that we can create nested functions in JavaScript.
// ... This is called Closure. A function can return another function in JavaScript.
