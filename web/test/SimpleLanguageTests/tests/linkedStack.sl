PROCEDURE main()
VAR
	testStack : POINTER
	p, r, q : POINTER<INTEGER>
BEGIN
	

	p <- ALLOC(INTEGER)	 
	q <- ALLOC(INTEGER)
	r <- ALLOC(INTEGER)
	
	PRINT("Asks if the NULL stack is empty. Expected boolean: false. Test status : ")
	printTestStatus( isStackEmpty(NULL) = false )

	PRINT("Tries to push in the NULL stack. Expected boolean: false. Test status : ")
	printTestStatus( push(NULL, p) = false )	
	
	PRINT("Tries to pop in the NULL stack. Expected address: NULL. Test status : ")
	printTestStatus( pop(NULL) = NULL)	
	
	PRINT("Tries to delete the NULL stack. Expected boolean: false. Test status : ")
	printTestStatus( deleteStack(NULL) = false)			
	
	testStack <- newStack()	
	
	PRINT("Creates an empty stack testStack. Expected address != NULL. Test status : ")
	printTestStatus( testStack != NULL )	
	
	PRINT("Asks if testStack is empty. Expected boolean: true. Test status : ")
	printTestStatus( isStackEmpty(testStack) = true )	
	
	PRINT("Pushes a POINTER in testStack, containing the address ")
	PRINT( p )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( push(testStack, p) = true )

	PRINT("Pushes a POINTER in testStack, containing the address ")
	PRINT( q )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( push(testStack, q) = true )
	
	PRINT("Pushes a POINTER in testStack, containing the address ")
	PRINT( r )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( push(testStack, r) = true )	
	
	PRINT("Asks if testStack is empty. Expected boolean: false. Test status : ")
	printTestStatus( isStackEmpty(testStack) = false )	
	
	PRINT("Pops a POINTER from testStack. Expected address: ")
	PRINT( r )
	PRINT(". Test status : ")	
	printTestStatus( pop(testStack) = r )
	
	
	PRINT("Pops a POINTER from testStack. Expected address: ")
	PRINT( q )
	PRINT(". Test status : ")	
	printTestStatus( pop(testStack) = q )
	
	PRINT("Pops a POINTER from testStack. Expected address: ")
	PRINT( p )
	PRINT(". Test status : ")	
	printTestStatus( pop(testStack) = p )
	
	PRINT("Tries to pop a POINTER from testStack. Expected address: NULL. Test status : ")	
	printTestStatus( pop(testStack) = NULL )		

	PRINT("Deletes testStack. Expected boolean: true. Test status : ")	
	printTestStatus( deleteStack(testStack) = true )	
	
	// only integers pointed by p,q,r should remain in the stack here
	
	FREE(p)
	FREE(q)	
	FREE(r)	
	
	// nothing should remain in the stack here
END

// Linked Stack of POINTER
STRUCT Stack
	top: POINTER<STRUCT StackElement>
	
STRUCT StackElement
	value: POINTER	// non-typed POINTER
	next: POINTER<STRUCT StackElement>


FUNCTION newStack() : POINTER<STRUCT Stack>
VAR
	stack : POINTER<STRUCT Stack>
BEGIN
	stack <- ALLOC(STRUCT Stack)
	stack->top <- NULL
	RETURN stack
END

// allocates and initialize a StackElement
FUNCTION newStackElement(value: POINTER, next: POINTER<STRUCT StackElement>) : POINTER
VAR
	newElement: POINTER<STRUCT StackElement>
BEGIN
	newElement <- ALLOC(STRUCT StackElement)
	newElement->value <- value
	newElement->next <- next

	RETURN newElement
END

// Pushes a POINTER at the top of stack. Returns FALSE on error
FUNCTION push(stack: POINTER<STRUCT Stack>, p: POINTER) : BOOLEAN
VAR
	newTop: POINTER<STRUCT StackElement>
	oldTop: POINTER<STRUCT StackElement>
BEGIN
	// error case : NULL stack
	IF(stack = NULL) THEN
		RETURN FALSE
	END_IF
	
	newTop <- newStackElement( p, stack->top )
	stack->top <- newTop

	RETURN TRUE
END

// Pops the POINTER at the top of stack. Returns NULL on error.
FUNCTION pop(stack: POINTER<STRUCT Stack>) : POINTER 
VAR
	oldTop: POINTER<STRUCT StackElement>
	oldTopValue: POINTER
BEGIN
	// error cases : NULL or empty stack
	IF(stack = NULL OR stack->top = NULL) THEN
		RETURN NULL
	END_IF
	
	oldTop <- stack->top
	oldTopValue <- oldTop->value
	
	// top update
	stack->top <- stack->top->next

	// old top removal
	FREE(oldTop)
	
	RETURN oldTopValue
	
END

// Returns TRUE if stack is empty, FALSE otherwise (or on error)
FUNCTION isStackEmpty(stack: POINTER<STRUCT Stack>) : BOOLEAN
BEGIN
	RETURN (stack != NULL AND stack->top = NULL)
END


// Deallocates stack, returns FALSE on error
FUNCTION deleteStack(stack: POINTER<STRUCT Stack>) : BOOLEAN
VAR
	currentElement, nextElement : POINTER<STRUCT StackElement>
BEGIN

	IF(stack = NULL) THEN
		RETURN FALSE
	END_IF
	
	currentElement <- stack->top
	
	WHILE(currentElement != NULL) DO
		nextElement <- currentElement->next
		FREE(currentElement)
		currentElement <- nextElement
	END_WHILE
	
	FREE(stack)
	
	RETURN TRUE
END

// Prints PASSED if the value obtained is equal to the expected value, FAILED otherwise
PROCEDURE printTestStatus(valueAsExpected : BOOLEAN)
BEGIN
	IF(valueAsExpected) THEN
		PRINTLN("PASSED")
	ELSE
		PRINTLN("FAILED")
	END_IF
END



