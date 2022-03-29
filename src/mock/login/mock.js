let Mock = require("mockjs")
Mock.mock("/api/login", 'post', function (config) {
    let obj = JSON.parse(config.body)
    let usa = obj.usa;
    let pwd = obj.pwd;
    if (usa === "admin" && pwd === "123456") {
        return {
            status: 200,
            user: "admin",
            message: "success",
            data: {
                usa: usa,
                pwd: pwd,
                token: "wds20010108"
            }
        }
    } else {
        return {
            status: 200,
            message: "fail",
            data: {
                message: "用户名或密码错误"
            }
        }
    }
})