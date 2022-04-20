-- --This if an assessment from Codecademy: Codecademy Learners Mockup Data
-- --The data can be downloaded from their website

-- --#2
-- -- Top 25 schools
-- SELECT email_domain,
--  COUNT(*)
-- FROM users
-- GROUP BY 1
-- ORDER BY 2 DESC
-- LIMIT 25;

-- -- Learners located in New York
-- SELECT city,
--   COUNT(*)
-- FROM users
-- WHERE city = "New York";

-- -- Codecademeny learners that are using the mobile app
-- SELECT mobile_app,
--   COUNT(*)
-- FROM users
-- GROUP BY 1

-- --#3
-- SELECT mobile_app,
--   100 * COUNT(mobile_app) / (SELECT COUNT(*) FROM users) as '%'
-- FROM users
-- GROUP BY 1;

-- SELECT sign_up_at,
--   strftime('%S', sign_up_at)
-- FROM users
-- GROUP BY 1
-- LIMIT 20;

-- SELECT strftime('%H', sign_up_at),
--   COUNT(*)
-- FROM users
-- GROUP BY 1
-- ORDER BY 1

-- --#4
-- --Joining 2 tables
-- SELECT users.user_id,
--    users.email_domain,
--    users.city,
--    users.country,
--    progress.learn_cpp,
--    progress.learn_sql,
--    progress.learn_html,
--    progress.learn_javascript,
--    progress.learn_java
-- FROM users
-- JOIN progress
--   ON users.user_id = progress.user_id
-- LIMIT 10;

--#2
--Top 25 schools (.edu domains)?
SELECT email_domain, count(user_id)
FROM users
GROUP BY email_domain
ORDER BY count(user_id) DESC
LIMIT 25;

--.edu learners located in New York?
SELECT city,count(user_id)
FROM users
WHERE city="New York";

--Codecademy learners using the mobile app
SELECT mobile_app,count(user_id) 
FROM users
WHERE mobile_app="mobile-user";


--#3
SELECT
  strftime('%H', sign_up_at) AS 'Hour',
  COUNT(*) 
FROM users 
GROUP BY Hour ;	

SELECT
  users.email_domain,
  count(progress.learn_cpp) as Student_learn_cpp,
  count(progress.learn_sql) as Student_learn_sql,
  count(progress.learn_html) as Student_learn_html,
  count(progress.learn_javascript) as Student_learn_javascript,
  count(progress.learn_java) as Student_learn_java 
FROM users 
LEFT JOIN progress 
ON users.user_id = progress.user_id 
  AND 
  (
    progress.learn_sql != '' 
    OR progress.learn_html != '' 
    OR progress.learn_javascript != '' 
    OR progress.learn_java != '' 
	OR progress.learn_cpp != '' 
  )
WHERE progress.learn_sql IS NOT NULL
GROUP BY users.email_domain;


--#4
--List of courses New York students are taking
SELECT
  users.email_domain,
  progress.learn_cpp,
  progress.learn_sql,
  progress.learn_html,
  progress.learn_javascript,
  progress.learn_java 
FROM users 
LEFT JOIN progress 
ON users.user_id = progress.user_id 
WHERE city = 'New York' 
  AND 
  (
    progress.learn_cpp != '' 
    OR progress.learn_sql != '' 
    OR progress.learn_html != '' 
    OR progress.learn_javascript != '' 
    OR progress.learn_java != '' 
  )
GROUP BY users.email_domain;

--List of course Chicago students are taking
SELECT
  users.email_domain,
  progress.learn_cpp,
  progress.learn_sql,
  progress.learn_html,
  progress.learn_javascript,
  progress.learn_java 
FROM users 
LEFT JOIN progress 
ON users.user_id = progress.user_id 
WHERE city = 'Chicago' 
  AND 
  (
    progress.learn_cpp != '' 
    OR progress.learn_sql != '' 
    OR progress.learn_html != '' 
    OR progress.learn_javascript != '' 
    OR progress.learn_java != '' 
  )
GROUP BY users.email_domain;