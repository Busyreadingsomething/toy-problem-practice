SELECT
  e1.name as Employee
FROM
  Employee e1
  INNER JOIN Employee e2 ON e1.ManagerID = e2.Id
WHERE
  e1.Salary > e2.Salary;
