/*
 * @Description:
 * @Autor: xuzp4
 * @Date: 2020-03-11 21:37:18
 * @LastEditors: xuzp4
 * @LastEditTime: 2020-03-11 21:40:02
 */
function request(url){
    return cb => {
        setTimeout(() => {
            cb(Math.random())
        },1000)
    }
}

create_runner(function* () {
    const val1 = yield request('some url')
    const val2 = yield request('some url')
})()
  
function create_runner(genFunc) {
    const it = genFunc()
    function run(data) {
        const itVal = it.next(data)
        if(!itVal.done) {
            itVal.value(run)
        }
    }
    return run;
}
