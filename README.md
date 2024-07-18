# apiflash
JavaScript library for apiflash.com
# main
```js
async function main(){
    const {apiflash} = require('./apiflash');
    const screenshot= new apiflash();
    let req=await screenshot.screen_url("url")
    console.log(req)
}
main()
```
