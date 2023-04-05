const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios")

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
    // lay user name tu body
    const { username } = req.body;
    
    // neu ko co thi tao moi (get or create api)
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: { "Private-Key": "dc344cfe-6bb1-427c-a8e0-a7481da7136d "}
            }
        )
        return res.status(r.status).json(r.data)
    }catch (e){
        return res.status(e.response.status).json(e.response.data)
    }
})

app.listen(3001);