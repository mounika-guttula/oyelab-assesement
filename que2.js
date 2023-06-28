SELECT
CUSTOMERS.customerid,
 CUSTOMERS.name,
(
    SELECT
      (SUBJECTS.subjectName)
  FROM
      SUBJECTS
            INNER JOIN SUBJECT_STUDENT_MAPPING AS m ON m.subjectid = SUBJECTS.subjectid
   WHERE
     m.customerid = CUSTOMERS.customerid
   ORDER BY
     SUBJECTS.subjectName
  ) AS SUBJECT
 FROM
 CUSTOMERS;