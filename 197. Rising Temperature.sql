# 子查询
SELECT Id FROM Weather w WHERE w.Temperature > (SELECT Temperature FROM Weather w2 WHERE DATEDIFF(w.Date, w2.Date) = 1)

# Inner Join
SELECT w1.Id FROM Weather w1, Weather w2
WHERE
DATEDIFF(w1.Date, w2.Date) = 1
AND
w2.Temperature < w1.Temperature
