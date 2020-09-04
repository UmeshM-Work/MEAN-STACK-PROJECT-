    const express = require("express");
    const app = express();
    const multer = require("multer")


    const cors = require("cors");


    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));







    const add = require("./adddata")




    // app.get("/adduser", async(req, res) => {


    //     try {
    //         const input = req.query;


    //         await add.adduser(input);

    //         res.json({
    //             message: " success"
    //         });

    //     } catch (err) {

    //         res.json({
    //             message: " FAILURE"

    //         });
    //     }

    // });




    app.post("/updatedata", (req, res) => {
        try {
            const input = req.body;
            console.log(input)
            let result = add.updateuser(input);

            console.log(result)

            res.json({
                message: "success"
            })
        } catch (err) {
            res.json({
                message: "Failure"
            })
        }
    })


    //FOR ADDING USERS

    app.post("/addusers", (req, res) => {
        try {
            const input = req.body;
            console.log(input)
            let result = add.adduser(input);

            console.log(result)

            res.json({
                message: "success"
            })
        } catch (err) {
            res.json({
                message: "Failure"
            })
        }
    })

    // FOR LOGIN AND DEACTIVATION

    app.post("/auth-user", async(req, res) => {
        try {
            const input = req.body;

            await add.authenticateUser(input);
            res.json({ opr: true });
        } catch (err) {
            res.json({ opr: false });
        }
    });

    // FOR SIGN UP

    app.post("/auth-user2", async(req, res) => {
        try {
            const input = req.body;

            await add.authenticateUser2(input);
            res.json({ opr: true });
        } catch (err) {
            res.json({ opr: false });
        }
    });

    //FOR DELETE


    app.post("/delete", (req, res) => {
        try {
            const input = req.body;
            console.log(input)
            let result = add.deleteuser(input);

            console.log(result)

            res.json({
                message: "success"
            })
        } catch (err) {
            res.json({
                message: "Failure"
            })
        }
    })







    app.listen(3200);