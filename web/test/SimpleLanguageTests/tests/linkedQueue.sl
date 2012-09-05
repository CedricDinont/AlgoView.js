

	

PROCEDURE main()
VAR
	testQueue : POINTER
	p, r, q : POINTER<INTEGER>
BEGIN
	

	p <- ALLOC(INTEGER)	 
	q <- ALLOC(INTEGER)
	r <- ALLOC(INTEGER)
	
	PRINT("Asks if the NULL queue is empty. Expected boolean: false. Test status : ")
	printTestStatus( isQueueEmpty(NULL) = false )

	PRINT("Tries to enqueue in the NULL queue. Expected boolean: false. Test status : ")
	printTestStatus( enqueue(NULL, p) = false )	
	
	PRINT("Tries to dequeue in the NULL queue. Expected address: NULL. Test status : ")
	printTestStatus( dequeue(NULL) = NULL)	
	
	PRINT("Tries to delete the NULL queue. Expected boolean: false. Test status : ")
	printTestStatus( deleteQueue(NULL) = false)			
	
	testQueue <- newQueue()	
	
	PRINT("Creates an empty queue testQueue. Expected address != NULL. Test status : ")
	printTestStatus( testQueue != NULL )	
	
	PRINT("Asks if testQueue is empty. Expected boolean: true. Test status : ")
	printTestStatus( isQueueEmpty(testQueue) = true )	
	
	PRINT("Enqueues a POINTER in testQueue, containing the address ")
	PRINT( p )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( enqueue(testQueue, p) = true )

	PRINT("Enqueues a POINTER in testQueue, containing the address ")
	PRINT( q )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( enqueue(testQueue, q) = true )
	
	PRINT("Enqueues a POINTER in testQueue, containing the address ")
	PRINT( r )	
	PRINT(". Expected boolean: true. Test status : ")
	printTestStatus( enqueue(testQueue, r) = true )	
	
	PRINT("Asks if testQueue is empty. Expected boolean: false. Test status : ")
	printTestStatus( isQueueEmpty(testQueue) = false )	
	
	PRINT("Dequeues a POINTER from testQueue. Expected address: ")
	PRINT( p )
	PRINT(". Test status : ")	
	printTestStatus( dequeue(testQueue) = p)
	
	
	PRINT("Dequeues a POINTER from testQueue. Expected address: ")
	PRINT( q )
	PRINT(". Test status : ")	
	printTestStatus( dequeue(testQueue) = q)
	
	PRINT("Dequeues a POINTER from testQueue. Expected address: ")
	PRINT( r )
	PRINT(". Test status : ")	
	printTestStatus( dequeue(testQueue) = r)
	
	PRINT("Dequeues a POINTER from testQueue. Expected address: NULL. Test status : ")	
	printTestStatus( dequeue(testQueue) = NULL)		



	// deletes the queue
	PRINT("Deletes testQueue. Expected boolean: true. Test status : ")	
	printTestStatus( deleteQueue(testQueue) = true)	
	
	// only integers pointed by p,q,r should remain in the stack here
	
	FREE(p)
	FREE(q)	
	FREE(r)	
	
	// nothing should remain in the stack here
END

// Linked Queue of POINTER
STRUCT Queue
	front: POINTER<STRUCT QueueElement>
	rear: POINTER<STRUCT QueueElement>
	
STRUCT QueueElement
	value: POINTER	// non-typed POINTER
	next: POINTER<STRUCT QueueElement>


FUNCTION newQueue() : POINTER<STRUCT Queue>
VAR
	queue : POINTER
BEGIN
	queue <- ALLOC(STRUCT Queue)
	queue->front <- NULL
	queue->rear <- NULL
	RETURN queue
END

// allocates and initialize a QueueElement
FUNCTION newQueueElement(value: POINTER, next: POINTER<STRUCT QueueElement>) : POINTER
VAR
	newElement: POINTER
BEGIN
	newElement <- ALLOC(STRUCT QueueElement)
	newElement->value <- value
	newElement->next <- next

	RETURN newElement
END

// Enqueues a POINTER at the rear of queue. Returns FALSE on error.
FUNCTION enqueue(queue: POINTER<STRUCT Queue>, p: POINTER) : BOOLEAN
VAR
	newRear: POINTER<STRUCT QueueElement>
	oldRear: POINTER<STRUCT QueueElement>
BEGIN
	IF(queue = NULL) THEN
		RETURN FALSE
	END_IF
	
	newRear <- newQueueElement(p, NULL)
	
	IF( queue->rear != NULL) THEN
		queue->rear->next <- newRear
	ELSE // empty queue
		queue->front <- newRear
	END_IF
	
	queue->rear <- newRear

	RETURN TRUE
END

// Dequeues the POINTER at the front of queue. Returns UNDEFINED on error.
FUNCTION dequeue(queue: POINTER<STRUCT Queue>) : POINTER 
VAR
	oldFront: POINTER<STRUCT QueueElement>
	oldFrontValue: POINTER
BEGIN
	// invalid or empty queue
	IF(queue = NULL OR queue->front = NULL) THEN
		RETURN FALSE
	END_IF
	
	oldFront <- queue->front
	oldFrontValue <- oldFront->value
	
	// front update
	queue->front <- queue->front->next

	IF( queue->front = NULL ) THEN  // last element removed => front = rear = NULL
		queue->rear <- NULL
	END_IF
	
	// old front removal
	FREE(oldFront)
	
	RETURN oldFrontValue
	
END

// Returns TRUE if queue is empty, FALSE otherwise (or on error)
FUNCTION isQueueEmpty(queue: POINTER<STRUCT Queue>) : BOOLEAN
BEGIN
	IF(queue = NULL OR queue->front != NULL) THEN
		RETURN FALSE
	END_IF
	
	RETURN TRUE
END


// Deallocates queue, returns FALSE on error
FUNCTION deleteQueue(queue: POINTER<STRUCT Queue>) : BOOLEAN
VAR
	currentElement, nextElement : POINTER<STRUCT QueueElement>
BEGIN

	IF(queue = NULL) THEN
		RETURN FALSE
	END_IF
	
	currentElement <- queue->front
	
	WHILE(currentElement != NULL) DO
		nextElement <- currentElement->next
		FREE(currentElement)
		currentElement <- nextElement
	END_WHILE
	
	FREE(queue)
	
	RETURN TRUE
END

PROCEDURE printTestStatus(valueAsExpected : BOOLEAN)
BEGIN
	IF(valueAsExpected) THEN
		PRINTLN("PASSED")
	ELSE
		PRINTLN("FAILED")
	END_IF
END



