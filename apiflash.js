class apiflash{
    constructor(){
        this.api = "https://api.apiflash.com/v1"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json"}
    }
    async screen_url(url,key="054a415b70a343e3bab1ec7ca8d068fb"){
        let req=await fetch(`${this.api}/urltoimage?access_key=${key}&response_type=json&url=${url}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {apiflash};