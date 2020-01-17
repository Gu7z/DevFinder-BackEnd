const axios = require('axios')
const Dev = require('../models/dev')
const parseStringArray = require('../utils/parseStringArray')

module.exports = {
    
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        
        let dev = await Dev.findOne({github_username})

        if(!dev){
            const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
            var { name = login , avatar_url, bio} = apiresponse.data
        
            //console.log(name, avatar_url, bio, github_username)
        
            if (!bio){ bio = '' }
        
            const techsArray = parseStringArray(techs)
        
            const location = {
                type: 'Point', 
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username, name, avatar_url, bio, techs: techsArray, location
            })
        }
    
        return res.send(dev)
    }
}