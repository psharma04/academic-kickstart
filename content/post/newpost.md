---
title: "New Post submission (text form)"
date: 2017-08-02T11:38:32+10:00
draft: false
DiscussionId: newpost-1
---
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<form name="newpost1" data-netlify="true" autocomplete="on" method="POST" action="https://formspree.io/rbxii3@gmail.com">
Name:<br>
<input type="text" name="name" required autofocus></input>
<br><br>
Contact Email:<br>
<input type="text" name="email" required></input>
<br>
<br>
What type of author are you?<br>
<input type="radio" name="isStudent" value="student" required> Student</input><br>
<input type="radio" name="isStudent" value="teacher" required> Teacher</input><br>
<input type="radio" name="isStudent" value="other" required> Other</input>
<br><br>
Auth Token (if applicable)
<br>
<input type="password" name="authtoken"></input>
<br><br>
Post title:<br>
<input type="text" name="postTitle" required></input>
<br><br>
Post Content: <br>
<input type="textarea" name="postContent" required></input>
<br><br>
<input type="submit" class="btn-success" value="Submit">
<br><br>
