const admin = require("firebase-admin");
const User = require("../models/User");
var serviceAccount = require("../firebase-config/config.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const sendNotification = async(userTokens, payload) => {
    // Pass object into sendNotification
    if (Array.isArray(userTokens) && userTokens.length > 0) {
        admin.messaging().sendToDevice(userTokens, payload)
            .then(res => console.log(" Send Notification Success "))
            .catch(err => console.log("Send Notification Failed ", err));
    }
}

module.exports.send = async(req, res) => {
    try {
        const { userId, payload } = req.body
        if (userId && payload) {
            const user = await User.findByPk(userId)

            if (user) {
                const { token } = user
                sendNotification(token, payload)
                return res.status(200).json({ message: 'Push Notification Success.' })
            } else {
                return res.status(404).json({ message: 'User Not Found' })
            }

        } else {
            return res.status(400).json({ message: 'Payload And Tokens Array Should Be Exists' })
        }
    } catch (err) {
        console.log(err, JSON.stringify(err))
        return res.status(500).json({ message: 'Push Notification Failed' })
    }
}

exports.subscribe = async(req, res) => {
    try {
        const { user } = req.body;
        if (user) {
            const { token } = user;
            if (token) {
                /* Save User Object In DB */
                const newUser = await User.create({
                    token
                });
                return res.status(200).json(newUser);
            } else {
                return res.status(400).json({ message: 'User Token Should Be Exists' })
            }
        } else {
            return res.status(400).json({ message: 'User Object Should Be Exists' })
        }

    } catch (error) {
        console.log(error, JSON.stringify(error))
        return res.status(500).json({ message: 'Subscribtion Failed' })
    }
}

exports.unsubscribe = async(req, res) => {
    try {
        const { userId: id } = req.params;
        if (id) {
            const result = await User.destroy({
                where: {
                    id
                }
            })
            if (result) {
                return res.status(200).json({ message: "User Token Deleted Successfully " });
            }
            return res.status(404).json({ message: "User Token Not Fount  " });
        } else {
            return res.status(400).json({ message: 'User Id Parameter Should Be Exists' })
        }
    } catch (error) {
        console.log(error, JSON.stringify(error))
        return res.status(500).json({ message: 'UnSubscribtion Failed' })
    }
}