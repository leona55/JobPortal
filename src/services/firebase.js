

var admin = require("firebase-admin");

var serviceAccount = require("./fireblogsyt-49885-firebase-adminsdk-jinjz-d02429777b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
