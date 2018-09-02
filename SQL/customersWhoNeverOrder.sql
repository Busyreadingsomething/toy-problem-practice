SELECT
  c.name AS Customers
FROM
  Customers c
  LEFT JOIN Orders o on c.id = o.Customerid
WHERE
  o.Customerid IS null;
