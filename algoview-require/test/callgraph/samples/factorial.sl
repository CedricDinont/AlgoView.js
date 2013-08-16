PROCEDURE main()
VAR
BEGIN
	PRINT(factorielle(5))
END

FUNCTION factorielle(n:INTEGER):INTEGER
VAR
BEGIN
	IF (n > 1) THEN
		RETURN (n * factorielle(n - 1))
	ELSE
		RETURN 1
	END_IF
END