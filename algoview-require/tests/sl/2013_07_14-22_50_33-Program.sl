/**
 * Structures
 **/
STRUCT SingleLinkedListElem
	data:INTEGER
	next:POINTER<STRUCT SingleLinkedListElem>

STRUCT LinkedList
	head:POINTER<STRUCT SingleLinkedListElem>
	size:INTEGER
	tail:POINTER<STRUCT SingleLinkedListElem>

/**
 * Subprograms
 **/
// Builds an empty linked list.
FUNCTION newLinkedList() : POINTER<STRUCT LinkedList>
VAR
	linkedList:POINTER<STRUCT LinkedList>
BEGIN
	linkedList <- ALLOC(STRUCT LinkedList)
	linkedList->head <- NULL
	linkedList->size <- 0
	linkedList->tail <- NULL
	RETURN linkedList
END

// Builds a single linked list item with value
FUNCTION newLinkedListItem(value:INTEGER) : POINTER<STRUCT SingleLinkedListElem>
VAR
	linkedListItem:POINTER<STRUCT SingleLinkedListElem>
BEGIN
	linkedListItem <- ALLOC(STRUCT SingleLinkedListElem)
	linkedListItem->data <- value
	linkedListItem->next <- NULL
	RETURN linkedListItem
END

// Builds a single linked list item with value and pointer to next element
FUNCTION newLinkedListItem(value:INTEGER, next:POINTER<STRUCT SingleLinkedListElem>) : POINTER<STRUCT SingleLinkedListElem>
VAR
	linkedListItem:POINTER<STRUCT SingleLinkedListElem>
BEGIN
	linkedListItem <- ALLOC(STRUCT SingleLinkedListElem)
	linkedListItem->data <- value
	linkedListItem->next <- next
	RETURN linkedListItem
END

// Destroys the specified linked list and returns TRUE on success.
FUNCTION deleteLinkedList(linkedList: POINTER<STRUCT LinkedList>) : BOOLEAN
BEGIN
	IF(linkedList != NULL)THEN
		IF(!clean(linkedList))THEN
			RETURN FALSE
		END_IF
		FREE(linkedList)
		RETURN TRUE
	ELSE
		RETURN FALSE
	END_IF
END

// Cleans the specified linked list and returns TRUE on success.
// linkedList becomes empty
FUNCTION clean(linkedList: POINTER<STRUCT LinkedList>) : BOOLEAN
VAR
		test:BOOLEAN
BEGIN
		IF(linkedList = NULL)THEN
			RETURN FALSE
		END_IF
		test <- TRUE
		WHILE(linkedList->size > 0 AND test)DO
			test <- test AND (remove(linkedList,0) = TRUE)
		END_WHILE
		RETURN test
END

// Returns the number of elements stored in the specified linked list.
// Returns -1 on problem.
FUNCTION getSize(linkedList: POINTER<STRUCT LinkedList>) : INTEGER
BEGIN
	IF(linkedList != NULL)THEN
		RETURN linkedList->size
	ELSE
		RETURN -1
	END_IF
END

// Returns the element stored in the specified linked list at ith position.
// Returns NULL on problem.
FUNCTION getItemAt(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER): POINTER<STRUCT SingleLinkedListElem>
VAR 
	element: POINTER<STRUCT SingleLinkedListElem>
	currentIndex:INTEGER
BEGIN
	IF(linkedList = NULL OR i<0 OR i>=linkedList->size) THEN // outside the list
		RETURN NULL
	END_IF
	IF(i = 0)THEN // first element
		RETURN linkedList->head
	END_IF
	IF(i = linkedList->size - 1)THEN // last element
		RETURN linkedList->tail
	END_IF
	currentIndex <- 0 // somewhere else
	element <- linkedList->head
	WHILE(currentIndex != i)DO
		element <- element->next
		currentIndex <- currentIndex + 1
	END_WHILE
	RETURN element
END

// Sets the value of the ith element to the specified value in the specified linked list.
// Returns TRUE on success.
FUNCTION set(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, value: INTEGER): BOOLEAN
VAR 
	element: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	element <- getItemAt(linkedList,i)
	IF(element != NULL)THEN
		element->data <- value
		RETURN TRUE
	ELSE
		RETURN FALSE
	END_IF
END

// get the value of the element stored in the specified linked list at ith position.
// result stored at pValue. Returns -1 on problem, else 0.
FUNCTION getValueAt(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, pValue:POINTER<INTEGER>): INTEGER
VAR 
	element: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	element <- getItemAt(linkedList,i)
	IF(element != NULL AND pValue != NULL)THEN
		CONTENT(pValue)<-element->data
		RETURN 0
	ELSE
		RETURN -1
	END_IF
END

// Inserts a new element with the specified value at the ith position in the specified linked list.
// The next elements are shifted to the right. Returns TRUE on success.
FUNCTION insert(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, value: INTEGER) : BOOLEAN
VAR 
	currentElement,newElement: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	currentElement <- getItemAt(linkedList,i)
	// is there an element at i
	IF(currentElement != NULL)THEN
		newElement <- newLinkedListItem(value) 
		newElement->next <- currentElement
		// is head
		IF(i = 0)THEN
			linkedList->head <- newElement
		ELSE
			currentElement <- getItemAt(linkedList,i-1)
			currentElement->next <- newElement
		END_IF
		linkedList->size <- linkedList->size + 1
		RETURN TRUE
	ELSE // empty list or ill formed linkedlist ?
		IF(linkedList = NULL) THEN
			RETURN FALSE
		END_IF
		IF(linkedList->size = 0)THEN
			newElement <- newLinkedListItem(value)
			linkedList->head <- newElement
			linkedList->size <- 1
			linkedList->tail <- newElement
			RETURN TRUE
		END_IF
		// at end
		IF(linkedList->size = i)THEN
			newElement <- newLinkedListItem(value)
			linkedList->tail->next <- newElement
			linkedList->tail <- newElement
			linkedList->size <- linkedList->size + 1
			RETURN TRUE
		END_IF
		// other cases are a failure
		RETURN FALSE
	END_IF
END

// alternative version
// Inserts a new element with the specified value at the ith position in the specified linked list.
// The next elements are shifted to the right. Returns TRUE on success.
FUNCTION insertAlt(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, value: INTEGER) : BOOLEAN
VAR 
	previousElement,currentElement,newElement: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	IF(linkedList = NULL OR i<0 OR i>linkedList->size) THEN // error or not at end
		RETURN FALSE
	END_IF
	newElement <- newLinkedListItem(value)
	IF(newElement = NULL)THEN // allocate failure
		RETURN FALSE
	END_IF
	linkedList->size <- linkedList->size + 1
	IF(i=0 AND linkedList->size = 1)THEN // first in empty list (! after size increment)
		linkedList->head <- newElement
		linkedList->tail <- newElement
		RETURN TRUE
	END_IF
	IF(i=0)THEN // first in general case
		newElement->next <- linkedList->head
		linkedList->head <- newElement
		RETURN TRUE
	END_IF
	IF(i=linkedList->size -1)THEN // after tail (! after size increment)
		linkedList->tail->next <- newElement
		linkedList->tail <- newElement
		RETURN TRUE
	END_IF
	previousElement <- getItemAt(linkedList,i-1)
	currentElement <- previousElement->next
	previousElement->next <- newElement
	newElement->next <- currentElement
	RETURN TRUE
END

// Removes the  ith element in the specified linked list. The next elements are shifted to the left.
// Returns TRUE on success.
FUNCTION remove(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER) : BOOLEAN
VAR 
	currentElement,previousElement: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	currentElement <- getItemAt(linkedList,i)
	IF(currentElement != NULL)THEN
		// if head
		IF(i=0)THEN
			// if last
			IF(linkedList->size = 1)THEN
				linkedList->tail <- NULL
			END_IF
			linkedList->head <- currentElement->next
		ELSE
			previousElement <- getItemAt(linkedList,i-1)
			previousElement->next <- currentElement->next
			// if last
			IF(currentElement = linkedList->tail)THEN
				linkedList->tail <- previousElement
			END_IF
		END_IF
		linkedList->size <- linkedList->size - 1
		FREE(currentElement)
		RETURN TRUE
	ELSE
		RETURN FALSE
	END_IF
END

// alternative version of remove
// Removes the  ith element in the specified linked list. The next elements are shifted to the left.
// Returns TRUE on success.
FUNCTION removeAlt(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER) : BOOLEAN
VAR 
	currentElement,previousElement: POINTER<STRUCT SingleLinkedListElem>
BEGIN
	IF(linkedList = NULL OR i<0 OR i>=linkedList->size) THEN // error
		RETURN FALSE
	END_IF
	linkedList->size <- linkedList->size - 1
	IF(i=0 AND linkedList->size = 0)THEN // one element list (! after size decr)
		FREE(linkedList->head)
		linkedList->head <- NULL
		linkedList->tail <- NULL
		RETURN TRUE
	END_IF
	IF(i=0)THEN // first in general case
		currentElement <- linkedList->head
		linkedList->head <- linkedList->head->next
		FREE(currentElement)
		RETURN TRUE
	END_IF
	previousElement <- getItemAt(linkedList,i-1)
	currentElement <- previousElement->next
	IF(i=linkedList->size)THEN // last (! after size increment)
		linkedList->tail <- previousElement
		previousElement->next <- NULL
	ELSE
		previousElement->next <- currentElement->next //general case
	END_IF
	FREE(currentElement)
	RETURN TRUE
END

// Adds a new element with the specified value at the end of the specified linked list.
// Returns TRUE on success.
FUNCTION append(linkedList: POINTER<STRUCT LinkedList>, value: INTEGER) : BOOLEAN
BEGIN
	IF(linkedList != NULL)THEN
		RETURN insert(linkedList,linkedList->size,value) // insert at end
	ELSE
		RETURN FALSE
	END_IF
END

// copy values from linkedList1 and append them in linkedList2
// linkedList1 is left unchanged. Returns NULL on problem
FUNCTION copyValueAndAppend(linkedList1: POINTER<STRUCT LinkedList>, linkedList2: POINTER<STRUCT LinkedList>) : POINTER<STRUCT LinkedList>
VAR
		test:BOOLEAN
		value:INTEGER
		i:INTEGER
		currentElement : POINTER<STRUCT SingleLinkedListElem>
BEGIN
		IF(linkedList1 = NULL OR linkedList2 = NULL)THEN
			RETURN NULL
		END_IF
		currentElement <- linkedList1->head
		test <- TRUE
		WHILE(currentElement != NULL AND test)DO
			test <- test AND append(linkedList2,currentElement->data)
			currentElement <- currentElement->next
		END_WHILE
		IF(!test)THEN
			RETURN NULL
		END_IF
		RETURN linkedList2
END

// Builds a new linkedlist, resulting from the concatenation of linkedList1 and linkedList2.
// linkedList1 and linkedList2 are left unchanged. Returns NULL on problem.
FUNCTION concatenate(linkedList1: POINTER<STRUCT LinkedList>, linkedList2: POINTER<STRUCT LinkedList>) : POINTER<STRUCT LinkedList>
VAR
		linkedList:POINTER<STRUCT LinkedList>
		test:BOOLEAN
BEGIN
		IF(linkedList1 = NULL OR linkedList2 = NULL)THEN
			RETURN NULL
		END_IF
		linkedList <- newLinkedList()
		IF(linkedList = NULL)THEN
			RETURN NULL
		END_IF

		test <- TRUE
		test <- test AND (copyValueAndAppend(linkedList1,linkedList) != NULL)
		IF(!test)THEN
			deleteLinkedList(linkedList)
			RETURN NULL
		END_IF
		test <- test AND (copyValueAndAppend(linkedList2,linkedList) != NULL)
		IF(!test)THEN
			deleteLinkedList(linkedList)
			RETURN NULL
		END_IF

		RETURN linkedList
END

// Swaps the ith and jth elements by value  in the specified linked list. Returns TRUE on success.
FUNCTION swapByValue(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, j: INTEGER) : BOOLEAN
VAR
	elementI, elementJ : POINTER<STRUCT SingleLinkedListElem>
	tmp:INTEGER
BEGIN
	elementI <- getItemAt(linkedList,i)
	elementJ <- getItemAt(linkedList,j)
	IF(elementI != NULL AND elementJ != NULL)THEN
		tmp <- elementI->data
		elementI->data <- elementJ->data
		elementJ->data <- tmp
		RETURN TRUE
	ELSE
		RETURN FALSE
	END_IF
END

// Swaps the ith and jth elements by value  in the specified linked list. Returns TRUE on success.
FUNCTION swap(linkedList: POINTER<STRUCT LinkedList>, i: INTEGER, j: INTEGER) : BOOLEAN
VAR
	elementI, elementJ, previousI, previousJ, head, pTmp : POINTER<STRUCT SingleLinkedListElem>
	tmp:INTEGER
BEGIN
	elementI <- getItemAt(linkedList,i)
	elementJ <- getItemAt(linkedList,j)
	IF(elementI = NULL OR elementJ = NULL)THEN
		RETURN FALSE
	END_IF

	IF(linkedList = NULL AND i = j)THEN
		RETURN TRUE
	END_IF

	IF(i > j)THEN
		RETURN swap(linkedList,j,i)
	END_IF

	head <- linkedList->head
	IF(i = 0)THEN
		linkedList->head <- elementJ
	END_IF

	IF(elementJ = linkedList->tail)THEN
		linkedList->tail <- elementI
	END_IF

	IF(elementI != head)THEN
		previousI <- getItemAt(linkedList,i-1)
		previousI->next <- elementJ
	END_IF

	pTmp <- elementJ->next
	elementJ->next <- elementI->next

	previousJ <- getItemAt(linkedList,j-1)
	previousJ->next <- elementI
	elementI->next <- pTmp

	RETURN TRUE
END

/**
 * Entry point
 **/
PROCEDURE main()
VAR
	linkedList, linkedList1, linkedList2:POINTER<STRUCT LinkedList>
	element: POINTER<STRUCT SingleLinkedListElem>
	value,i: INTEGER
BEGIN
	linkedList<-NULL
	linkedList2<-NULL

	// empty list
	linkedList <- newLinkedList()

	PRINTLN("empty list test")
	PRINTLN(linkedList != NULL)
	PRINTLN(getSize(linkedList) = 0)
	PRINTLN(getItemAt(linkedList,0) = NULL)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = -1)

	// add item with value 0 by hand
	PRINTLN("adding into list by hand test")
	element <- newLinkedListItem(0)
	PRINTLN(element != NULL)

	linkedList->head <- element
	linkedList->size <- 1
	linkedList->tail <- element

	PRINTLN(getSize(linkedList) = 1)
	PRINTLN(element = getItemAt(linkedList,0))
	PRINTLN(element = linkedList->head)
	PRINTLN(element = linkedList->tail)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(linkedList->head->data = 0)
	PRINTLN(linkedList->tail->data = 0)

	// set value of element at pos 0 to 1
	PRINTLN("set element at 0 with value 1")
	PRINTLN(set(linkedList,0,1) = TRUE)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(linkedList->head->data = 1)
	PRINTLN(linkedList->tail->data = 1)

	// bad set tests
	PRINTLN("bad set tests")
	PRINTLN(set(linkedList,-1,1) = FALSE)
	PRINTLN(set(linkedList,2,1) = FALSE)

	// remove by hand
	linkedList->head <- NULL
	linkedList->size <- 0
	linkedList->tail <- NULL
	FREE(element)
	element <- NULL

	PRINTLN("removing by hand test")
	PRINTLN(getSize(linkedList) = 0)
	PRINTLN(getItemAt(linkedList,0) = NULL)
	PRINTLN(NULL = linkedList->head)
	PRINTLN(NULL = linkedList->tail)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = -1)

	// add item with value 2 at pos 0 using insert
	PRINTLN("insert 2 in empty list with insert")
	PRINTLN(insert(linkedList,0,2) = TRUE)
	PRINTLN(getSize(linkedList) = 1)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(getItemAt(linkedList,0) = linkedList->tail)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 2)
	PRINTLN(linkedList->head->data = 2)
	PRINTLN(linkedList->tail->data = 2)

	PRINTLN("bad inserts tests")
	PRINTLN(insert(linkedList,-1,2) = FALSE)
	PRINTLN(insert(linkedList,42,2) = FALSE)

	// add item with value 0 at head using insert
	PRINTLN(insert(linkedList,0,0) = TRUE)

	PRINTLN("insert 0 at head of list with insert")
	PRINTLN(getSize(linkedList) = 2)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(linkedList->head->data = 0)
	PRINTLN(getItemAt(linkedList,1) = linkedList->tail)
	PRINTLN(linkedList->tail->data = 2)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 2)

	// add item with value 1 at pos 1 using insert
	PRINTLN(insert(linkedList,1,1) = TRUE)

	PRINTLN("insert 1 at pos 1 using insert")
	PRINTLN(getSize(linkedList) = 3)
	PRINTLN(getItemAt(linkedList,1) != NULL)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(linkedList->head->data = 0)
	PRINTLN(getItemAt(linkedList,2) = linkedList->tail)
	PRINTLN(linkedList->tail->data = 2)
	PRINTLN(linkedList->head->next = getItemAt(linkedList,1))
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList,2,ADDRESS(value)) = 0)
	PRINTLN(value = 2)

	// add 1 to list values
	PRINTLN("adding 1 to values")
	FOR i FROM 0 TO getSize(linkedList) - 1 DO
		PRINTLN(getValueAt(linkedList,i,ADDRESS(value)) = 0)
		PRINTLN(set(linkedList,i,value + 1) = TRUE)
	END_FOR

	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 2)
	PRINTLN(getValueAt(linkedList,2,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(linkedList->head->data = 1)
	PRINTLN(linkedList->tail->data = 3)

	PRINTLN("bad remove")
	PRINTLN(remove(linkedList,3) = FALSE)
	PRINTLN(remove(linkedList,-1) = FALSE)

	PRINTLN("remove middle")
	PRINTLN(remove(linkedList,1) = TRUE)
	PRINTLN(getSize(linkedList) = 2)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,1) != NULL)
	PRINTLN(getItemAt(linkedList,2) = NULL)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(linkedList->head->data = 1)
	PRINTLN(getItemAt(linkedList,1) = linkedList->tail)
	PRINTLN(linkedList->tail->data = 3)
	PRINTLN(linkedList->head->next = getItemAt(linkedList,1))

	PRINTLN("remove tail")
	PRINTLN(remove(linkedList,1) = TRUE)
	PRINTLN(getSize(linkedList) = 1)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,1) = NULL)
	PRINTLN(getItemAt(linkedList,2) = NULL)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(getItemAt(linkedList,0) = linkedList->tail)
	PRINTLN(linkedList->head->data = 1)
	PRINTLN(linkedList->tail->data = 1)


	PRINTLN("remove head")
	PRINTLN(remove(linkedList,0) = TRUE)
	PRINTLN(getSize(linkedList) = 0)
	PRINTLN(getItemAt(linkedList,0) = NULL)
	PRINTLN(getItemAt(linkedList,1) = NULL)
	PRINTLN(getItemAt(linkedList,2) = NULL)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = -1)
	PRINTLN(NULL = linkedList->head)
	PRINTLN(NULL = linkedList->tail)

	PRINTLN("append")
	FOR i FROM 0 TO 2 DO
		PRINTLN(append(linkedList,i) = TRUE)
	END_FOR

	PRINTLN(getSize(linkedList) = 3)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,1) != NULL)
	PRINTLN(getItemAt(linkedList,2) != NULL)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(linkedList->head->data = 0)
	PRINTLN(getItemAt(linkedList,2) = linkedList->tail)
	PRINTLN(linkedList->tail->data = 2)
	PRINTLN(linkedList->head->next = getItemAt(linkedList,1))
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList,2,ADDRESS(value)) = 0)
	PRINTLN(value = 2)

	PRINTLN("remove all")
	PRINTLN(clean(linkedList) = TRUE)

	PRINTLN(remove(linkedList,0) = FALSE)
	PRINTLN(getSize(linkedList) = 0)
	PRINTLN(getItemAt(linkedList,0) = NULL)
	PRINTLN(getItemAt(linkedList,1) = NULL)
	PRINTLN(getItemAt(linkedList,2) = NULL)
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = -1)
	PRINTLN(NULL = linkedList->head)
	PRINTLN(NULL = linkedList->tail)

	PRINTLN("fill linkedList 1")
	FOR i FROM 0 TO 2 DO
		PRINTLN(append(linkedList,i) = TRUE)
	END_FOR

	PRINTLN(getSize(linkedList) = 3)
	PRINTLN(getItemAt(linkedList,0) != NULL)
	PRINTLN(getItemAt(linkedList,1) != NULL)
	PRINTLN(getItemAt(linkedList,2) != NULL)
	PRINTLN(getItemAt(linkedList,0) = linkedList->head)
	PRINTLN(linkedList->head->data = 0)
	PRINTLN(getItemAt(linkedList,2) = linkedList->tail)
	PRINTLN(linkedList->tail->data = 2)
	PRINTLN(linkedList->head->next = getItemAt(linkedList,1))
	PRINTLN(getValueAt(linkedList,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getValueAt(linkedList,1,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList,2,ADDRESS(value)) = 0)
	PRINTLN(value = 2)


	// empty list
	linkedList1 <- newLinkedList()

	PRINTLN("empty list test")
	PRINTLN(linkedList1 != NULL)
	PRINTLN(getSize(linkedList1) = 0)
	PRINTLN(getItemAt(linkedList1,0) = NULL)
	PRINTLN(getValueAt(linkedList1,0,ADDRESS(value)) = -1)

	PRINTLN("fill linkedList 2")
	FOR i FROM 3 TO 5 DO
		PRINTLN(append(linkedList1,i) = TRUE)
	END_FOR

	PRINTLN(getSize(linkedList1) = 3)
	PRINTLN(getItemAt(linkedList1,0) != NULL)
	PRINTLN(getItemAt(linkedList1,1) != NULL)
	PRINTLN(getItemAt(linkedList1,2) != NULL)
	PRINTLN(getItemAt(linkedList1,0) = linkedList1->head)
	PRINTLN(linkedList1->head->data = 3)
	PRINTLN(getItemAt(linkedList1,2) = linkedList1->tail)
	PRINTLN(linkedList1->tail->data = 5)
	PRINTLN(linkedList1->head->next = getItemAt(linkedList1,1))
	PRINTLN(getValueAt(linkedList1,0,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(getValueAt(linkedList1,1,ADDRESS(value)) = 0)
	PRINTLN(value = 4)
	PRINTLN(getValueAt(linkedList1,2,ADDRESS(value)) = 0)
	PRINTLN(value = 5)

	PRINTLN("concat linkedList and linkedList 2")
	linkedList2 <- concatenate(linkedList,linkedList1)
	PRINTLN(linkedList2 != NULL)

	PRINTLN(getSize(linkedList2) = 6)
	PRINTLN(getItemAt(linkedList2,0) != NULL)
	PRINTLN(getItemAt(linkedList2,1) != NULL)
	PRINTLN(getItemAt(linkedList2,2) != NULL)
	PRINTLN(getItemAt(linkedList2,3) != NULL)
	PRINTLN(getItemAt(linkedList2,4) != NULL)
	PRINTLN(getItemAt(linkedList2,5) != NULL)

	PRINTLN(getItemAt(linkedList2,0) = linkedList2->head)
	PRINTLN(linkedList2->head->data = 0)
	PRINTLN(getItemAt(linkedList2,5) = linkedList2->tail)
	PRINTLN(linkedList2->tail->data = 5)

	PRINTLN(linkedList2->head->next = getItemAt(linkedList2,1))

	PRINTLN(getValueAt(linkedList2,0,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getValueAt(linkedList2,1,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList2,2,ADDRESS(value)) = 0)
	PRINTLN(value = 2)

	PRINTLN(getValueAt(linkedList2,3,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(getValueAt(linkedList2,4,ADDRESS(value)) = 0)
	PRINTLN(value = 4)
	PRINTLN(getValueAt(linkedList2,5,ADDRESS(value)) = 0)
	PRINTLN(value = 5)

	PRINTLN("swap by value")
	PRINTLN(swapByValue(linkedList2,2,3)=TRUE)
	PRINTLN(getValueAt(linkedList2,2,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(getValueAt(linkedList2,3,ADDRESS(value)) = 0)
	PRINTLN(value = 2)
	PRINTLN(getItemAt(linkedList2,0) = linkedList2->head)
	PRINTLN(linkedList2->head->data = 0)
	PRINTLN(getItemAt(linkedList2,5) = linkedList2->tail)
	PRINTLN(linkedList2->tail->data = 5)

	PRINTLN("swap by address")
	PRINTLN(swap(linkedList2,1,4)=TRUE)
	PRINTLN(getValueAt(linkedList2,1,ADDRESS(value)) = 0)
	PRINTLN(value = 4)
	PRINTLN(getValueAt(linkedList2,4,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getItemAt(linkedList2,0) = linkedList2->head)
	PRINTLN(linkedList2->head->data = 0)
	PRINTLN(getItemAt(linkedList2,5) = linkedList2->tail)
	PRINTLN(linkedList2->tail->data = 5)

	PRINTLN(swap(linkedList2,3,3)=TRUE)
	PRINTLN(getValueAt(linkedList2,2,ADDRESS(value)) = 0)
	PRINTLN(value = 3)

	PRINTLN(swap(linkedList2,0,5)=TRUE)
	PRINTLN(getValueAt(linkedList2,0,ADDRESS(value)) = 0)
	PRINTLN(value = 5)
	PRINTLN(getValueAt(linkedList2,1,ADDRESS(value)) = 0)
	PRINTLN(value = 4)
	PRINTLN(getValueAt(linkedList2,2,ADDRESS(value)) = 0)
	PRINTLN(value = 3)
	PRINTLN(getValueAt(linkedList2,3,ADDRESS(value)) = 0)
	PRINTLN(value = 2)
	PRINTLN(getValueAt(linkedList2,4,ADDRESS(value)) = 0)
	PRINTLN(value = 1)
	PRINTLN(getValueAt(linkedList2,5,ADDRESS(value)) = 0)
	PRINTLN(value = 0)
	PRINTLN(getItemAt(linkedList2,0) = linkedList2->head)
	PRINTLN(linkedList2->head->data = 5)
	PRINTLN(getItemAt(linkedList2,5) = linkedList2->tail)
	PRINTLN(linkedList2->tail->data = 0)

	PRINTLN("delete list")

	PRINTLN(deleteLinkedList(linkedList) = TRUE)
	linkedList <- NULL
	PRINTLN(deleteLinkedList(linkedList1) = TRUE)
	linkedList1 <- NULL
	PRINTLN(deleteLinkedList(linkedList2) = TRUE)
	linkedList2 <- NULL
END