const express = require('express');
const http = require('http');
const findTasks = require('./index');
const app = express();
app.get('/schedule', (req, res) => {
    http.get("http://20.207.122.201/evaluation-service/vehicles", (r) => {
        let data = "";
        r.on("data", (c) => data += c);
        r.on("end", () => {
            let api = JSON.parse(data);
            let list = api.data || [];
            let tasks = [];
            for (let i = 0; i < list.length; i++) {
                tasks.push({
                    duration: list[i].maintenance_duration,
                    impact: list[i].priority
                });
            }
            if (tasks.length === 0 || !tasks[0].duration) {
                tasks = [
                    { duration: 2, impact: 4 },
                    { duration: 3, impact: 5 },
                    { duration: 4, impact: 10 }
                ];
            }
            let result = findTasks(tasks, 1000);
            res.json(result);
        });
    });
});
app.listen(4000, () => console.log("running"));