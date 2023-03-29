$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PostInstagram.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#created by Lusi Indah"
    }
  ],
  "line": 2,
  "name": "User try post photo to Instagram",
  "description": "",
  "id": "user-try-post-photo-to-instagram",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3364626500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User try post photo to Instagram",
  "description": "",
  "id": "user-try-post-photo-to-instagram;user-try-post-photo-to-instagram",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@instagram"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user in login page instagram",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user input username \"naskahcerita\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user input password \"261706lusi\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user loggedin to instagram",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click add post",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user choose photo from directory",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user edit photo in instagram",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user type caption \"Training BCA Digital SQA 2023 - Lusi - Indah\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click button share",
  "keyword": "Then "
});
formatter.match({
  "location": "PostInstagram.user_in_login_page_instagram()"
});
formatter.result({
  "duration": 4164928400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naskahcerita",
      "offset": 21
    }
  ],
  "location": "PostInstagram.user_input_username(String)"
});
formatter.result({
  "duration": 1172107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "261706lusi",
      "offset": 21
    }
  ],
  "location": "PostInstagram.user_input_password(String)"
});
formatter.result({
  "duration": 97749499,
  "status": "passed"
});
formatter.match({
  "location": "PostInstagram.user_loggedin_to_instagram()"
});
formatter.result({
  "duration": 68289700,
  "status": "passed"
});
formatter.match({
  "location": "PostInstagram.user_click_add_post()"
});
formatter.result({
  "duration": 3221870400,
  "status": "passed"
});
formatter.match({
  "location": "PostInstagram.user_choose_photo_from_directory()"
});
formatter.result({
  "duration": 388145600,
  "status": "passed"
});
formatter.match({
  "location": "PostInstagram.user_edit_photo_in_instagram()"
});
formatter.result({
  "duration": 303537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Training BCA Digital SQA 2023 - Lusi - Indah",
      "offset": 19
    }
  ],
  "location": "PostInstagram.user_type_caption(String)"
});
formatter.result({
  "duration": 339068601,
  "status": "passed"
});
formatter.match({
  "location": "PostInstagram.user_click_button_share()"
});
formatter.result({
  "duration": 86153101,
  "status": "passed"
});
formatter.after({
  "duration": 475912200,
  "status": "passed"
});
});