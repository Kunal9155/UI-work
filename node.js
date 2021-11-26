var http = require('http');
var formidable = require('formidable');
const nodemailer = require('nodemailer');
var fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ui"
});

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '9155kunalarora@gmail.com',
        pass: '8708109005'
    }
});

let mailDetails = {
    from: '9155kunalarora@gmail.com',
    to: '9155kunalarora@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail'
};


http.createServer(function (req, res) {

    fs.readFile('index.html', function (err, data) {

        if (err) {
            return console.error(err);
        }
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                var oldpath = files.UpFile.path;
                var newpath = 'C:/Users/kunal/Nodejs/' + files.UpFile.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                   console.log('File Uploaded');
                });
                console.log('fields = ', fields);
                mailTransporter.sendMail(mailDetails, function (err, data) {
                    if (err) {
                        console.log('Error Occurs', err);
                    } else {
                        console.log('Email sent successfully');
                        // return res.end();
                    }
                });
                con.connect(function (err) {
                    if (err) throw err;
                    console.log("Connected!");
                    var sql = "INSERT INTO kunal VALUES ('" + fields.Name + "','" + fields.Last + "','" + fields.Email + "','" + fields.Message  + "')";
                    con.query(sql, function (err, result) {
                        if (err){

                            throw err;
                        }
                        console.log("1 record inserted");
                    });
                });
                fs.readFile('Contact.html', function (err1, data1) {
                    if (err) {
                        return console.error(err1);
                    } else {
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        res.write(data1);
                        return res.end();
                    }
                });



            });
        } else {
            if (req.url == '/form.html') {
                fs.readFile('form.html', function (err2, data2) {
                    if (err) {
                        return console.error(err2);
                    } else {
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        res.write(data2);
                        return res.end();
                    }

                });
            } else {
                if (req.url == '/casestudy.html') {
                    fs.readFile('casestudy.html', function (err1, data1) {
                        if (err) {
                            return console.error(err1);
                        } else {
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            res.write(data1);
                            return res.end();
                        }

                    });
                } else {
                    if (req.url == '/Contact.html') {
                        // mailTransporter.sendMail(mailDetails, function (err, data) {
                        //     if (err) {
                        //         console.log('Error Occurs', err);
                        //     } else {
                        //         console.log('Email sent successfully');
                        //         return res.end();
                        //     }
                        // });
                        // fs.readFile('Contact.html', function (err1, data1) {
                        //     if (err) {
                        //         return console.error(err1);
                        //     } else {
                        //         res.writeHead(200, {
                        //             'Content-Type': 'text/html'
                        //         });
                        //         res.write(data1);
                        //         return res.end();
                        //     }

                        // });

                    } else {
                        if (req.url == '/calc.html') {
                            fs.readFile('calc.html', function (err1, data1) {
                                if (err) {
                                    return console.error(err1);
                                } else {
                                    res.writeHead(200, {
                                        'Content-Type': 'text/html'
                                    });
                                    res.write(data1);
                                    return res.end();
                                }

                            });
                        } else {
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            res.write(data);
                            return res.end();
                        }
                    }


                }
            }
        }






    });

}).listen(8080);