


onst express = require("express");
const crypto = require("crypto");

// SQL injection
app.g
});

// Command injection
app.get("/ping", (req, res) => {
    const host = req.query.host;
    require("child_process").exec("ping " + host);
    res.send("Ping started");
});

// Weak crypto
const hash = crypto.createHash("md5").update("password").digest("hex");

// XSS sink
app.get("/page", (req, res) => {
    const name = req.query.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.listen(3000);