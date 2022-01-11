const { default: Axios } = require("axios")
const SECURITY_KEY = "6177afefac880e4bf67e5e47";

const getUserByToken = async token => {
    if(token){
        let _userinfo = null;
        await Axios.post(`https://stockoverflowclone-api.herokuapp.com/users/get_by_token`, {token, SECURITY_KEY})
        .then(res => _userinfo = res.data)
        .catch(err => _userinfo =  err.response )
        return _userinfo
    }else return undefined;
}

export default getUserByToken