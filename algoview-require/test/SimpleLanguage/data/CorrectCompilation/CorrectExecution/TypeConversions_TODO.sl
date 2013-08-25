PROCEDURE printValues(b : BOOLEAN, i : INTEGER, f : FLOAT, c : CHARACTER)
BEGIN
	PRINT(b)
	PRINT(" ")
	PRINT(i)
	PRINT(" ")
	PRINT(f)
	PRINT(" ")
	PRINTLN(c)
END

PROCEDURE printValuesWithCharacterAsInteger(b : BOOLEAN, i : INTEGER, f : FLOAT, c : CHARACTER)
VAR
	cAsInteger : INTEGER
BEGIN
	PRINT(b)
	PRINT(" ")
	PRINT(i)
	PRINT(" ")
	PRINT(f)
	PRINT(" ")
	cAsInteger <- c
	PRINTLN(cAsInteger)
END

PROCEDURE main()
VAR
	b : BOOLEAN
	i : INTEGER
	f : FLOAT
	c : CHARACTER
BEGIN
	c <- '\0'  // Ne compile pas encore
	b <- c
	i <- c
	f <- c
	printValuesWithCharacterAsInteger(b, i, f, c)
END
