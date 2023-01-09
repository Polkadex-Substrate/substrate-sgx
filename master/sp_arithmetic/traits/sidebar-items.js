window.SIDEBAR_ITEMS = {"fn":[["checked_pow","Raises a value to the power of exp, returning `None` if an overflow occurred."],["ensure_pow","Raises a value to the power of exp, returning `ArithmeticError` if an overflow occurred."]],"trait":[["AtLeast32Bit","A meta trait for arithmetic."],["AtLeast32BitUnsigned","A meta trait for arithmetic.  Same as [`AtLeast32Bit `], but also bounded to be unsigned."],["BaseArithmetic","A meta trait for arithmetic type operations, regardless of any limitation on size."],["Bounded","Numbers which have upper and lower bounds"],["CheckedAdd","Performs addition that returns `None` instead of wrapping around on overflow."],["CheckedDiv","Performs division that returns `None` instead of panicking on division by zero and instead of wrapping around on underflow and overflow."],["CheckedMul","Performs multiplication that returns `None` instead of wrapping around on underflow or overflow."],["CheckedNeg","Performs negation that returns `None` if the result can’t be represented."],["CheckedRem","Performs an integral remainder that returns `None` instead of panicking on division by zero and instead of wrapping around on underflow and overflow."],["CheckedShl","Performs a left shift that returns `None` on shifts larger than the type width."],["CheckedShr","Performs a right shift that returns `None` on shifts larger than the type width."],["CheckedSub","Performs subtraction that returns `None` instead of wrapping around on underflow."],["Ensure",""],["EnsureAdd","Performs addition that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureAddAssign","Performs self addition that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureDiv","Performs division that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureDivAssign","Performs self division that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureFixedPointNumber","Extends [`FixedPointNumber`] with the Ensure family functions."],["EnsureFrom","Similar to [`TryFrom`] but returning an [`ArithmeticError`] error."],["EnsureInto","Similar to [`TryInto`] but returning an [`ArithmeticError`] error."],["EnsureMul","Performs multiplication that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureMulAssign","Performs self multiplication that returns [`ArithmeticError`] instead of wrapping around on overflow."],["EnsureOp","Meta trait that supports all immutable arithmetic `Ensure*` operations"],["EnsureOpAssign","Meta trait that supports all assigned arithmetic `Ensure*` operations"],["EnsureSub","Performs subtraction that returns [`ArithmeticError`] instead of wrapping around on underflow."],["EnsureSubAssign","Performs self subtraction that returns [`ArithmeticError`] instead of wrapping around on underflow."],["IntegerSquareRoot","A trait implementing integer square root."],["One","Defines a multiplicative identity element for `Self`."],["SaturatedConversion","Convenience type to work around the highly unergonomic syntax needed to invoke the functions of overloaded generic traits, in this case `SaturatedFrom` and `SaturatedInto`."],["Saturating","Saturating arithmetic operations, returning maximum or minimum values instead of overflowing."],["Signed","Useful functions for signed numbers (i.e. numbers that can be negative)."],["UniqueSaturatedFrom","Just like `From` except that if the source value is too big to fit into the destination type then it’ll saturate the destination."],["UniqueSaturatedInto","Just like `Into` except that if the source value is too big to fit into the destination type then it’ll saturate the destination."],["Unsigned","A trait for values which cannot be negative"],["Zero","Defines an additive identity element for `Self`."]]};