const axios = require('axios');
const Dev = require('../models/Dev');
const str2array = require('../utils/str2array');
const { findConnections, sendMessage }= require('../websocket');
module.exports = {
    async index (req, res) {
        let devs = await Dev.find();   
        res.json(devs);
    },

    async store (req, res) {
        const { githubUsername, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({githubUsername});
        if(!dev) {
            const githubResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
            const { name = login, avatar_url, bio } = githubResponse.data;
        
            const techArrays = str2array(techs);
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
        
             dev = await Dev.create({
                githubUsername,
                name,
                avatar_url,
                bio,
                techs: techArrays,
                location
            })
            const sendMessageTo = findConnections({ latitude, longitude}, techArrays);
            sendMessage(sendMessageTo, 'new-dev', dev);            
        }

       
        return res.json(dev);
    }
};