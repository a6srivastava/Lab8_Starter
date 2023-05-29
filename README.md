# Lab 8 - Starter
Name: Abhimanyu Srivastava
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
    - Answer: I would choose the first option, automate a github action that tests the code before it pushes to the repository. If the code does not pass the automated tests It should send notificiation to the committer and not push the code to the repo.
2) Would you use an end to end test to check if a function is returning the correct output?
    - Answer: End to end will test all functionality, creating a smaller test specific to the function would likely be more appropriate.
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    -Answer: Yes, unit tests would be useful to test the "message" feature of a messaging app. The "message" will several distinct various parts of the process such as input validation, encrypting, sending, receiving, notifying triggering. And we can use tests to detect flaws in these.
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    -yes, this is a very easy use of testing since we need to restrict a simple boundry of length.