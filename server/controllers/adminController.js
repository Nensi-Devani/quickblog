import jwt from 'jsonwebtoken'

export const adminLogin = async (req, res) => {
    try{
        const {email, password} = req.body
        // if email or password wrong
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD)
            return res.json({success: false, message:'Invalid Credentials'})
        // if email and password matches
        const token = jwt.sign({email}, process.env.JWT_SECRET) // generate the token
        return res.json({success: true, token})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}
