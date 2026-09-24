import ratelimit from "../config/upstash.js";

const rateLimiter = async (req , res ,next) =>{
  try {
    const {success} = await ratelimit.limit("my-limit-key")
    if(!success){
      return res.status(420).json({
        message : "TOO MANY request, please try again later "
      })
    }
    next()
  } catch (error) {
    console.error("ERROR due to to many clicking", error);
    next(error);
  }
}
export default rateLimiter;