FUNCTION factorial(i : INTEGER) : INTEGER
VAR
  result : INTEGER
BEGIN

  // Negative argument check omitted

  IF ((i = 0) OR (i = 1)) THEN
    result <- 1
  ELSE
    result <- i * factorial(i - 1)
  END_IF
  RETURN result
END

PROCEDURE main()
VAR
  f : INTEGER
BEGIN
  f <- factorial(3)
  PRINTLN(f)
END
