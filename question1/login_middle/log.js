const http = require('http');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5YXNod2FudGhyZWRkeTEwMzE3QGdtYWlsLmNvbSIsImV4cCI6MTc3NzcwMDY4MCwiaWF0IjoxNzc3Njk5NzgwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjg0YWFkYjYtMDVlZi00OTVlLWE0MTYtMWZjYWZlNTgxNWVlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieWFzaHdhbnRoIHJlZGR5Iiwic3ViIjoiYTU3OGJiMzAtZjk5My00ZmZiLTg2NjktOTc2NGZiYmFmZTYzIn0sImVtYWlsIjoieWFzaHdhbnRocmVkZHkxMDMxN0BnbWFpbC5jb20iLCJuYW1lIjoieWFzaHdhbnRoIHJlZGR5Iiwicm9sbE5vIjoicmEyMzExMDMwMDEwMzE3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiYTU3OGJiMzAtZjk5My00ZmZiLTg2NjktOTc2NGZiYmFmZTYzIiwiY2xpZW50U2VjcmV0IjoiUUJFdHVKRnVjZnhQZ3pFdiJ9.LJSsU1hxYnHH_kh7bjOKweUVKi_cAgZ1MpWrd4RcXFw";

function Log(stack, level, part, message) {

    const data = JSON.stringify({
        stack: stack,
        level: level,
        package: part,
        message: message
    });

    const req = http.request({
        hostname: '20.207.122.201',
        path: '/evaluation-service/logs',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }, (res) => {
        res.on('data', (d) => console.log(d.toString()));
    });

    req.write(data);
    req.end();
}

module.exports = Log;