- [x] Implement MongoDB connection retries + clearer logs (mask password) + avoid immediate exit (optional) in Flores_server/config/db.js
- [ ] Redeploy Flores_server and verify startup logs show Mongo config env presence (hasMONGO_URI) and connectivity
- [ ] If still failing, ensure Render environment variable MONGO_URI is set to the full Atlas connection string (not empty)
- [ ] If Atlas still blocks, whitelist Render instance outbound IP in MongoDB Atlas Security → Network Access


