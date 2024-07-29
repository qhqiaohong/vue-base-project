import axios from "axios"

const request = function (data) {

    let url = data.url
    let addbase = true
    let qy=false
    if (url.indexOf('https://') == 0) {
        addbase = false
    } else if (url.indexOf('http://') == 0) {
        addbase = false
    } else {
        addbase = true
        if (url.indexOf('/open')==0) {
            console.log(1)
            qy=true
            url="/open-API"+url
        }
        else{
            qy=false
        }
    }
    console.log(qy);


    return new Promise((resolve, reject) => {
        axios({
            url: addbase == true&&qy==true ? url :addbase == true&&qy==false ? process.env.VUE_APP_BASE_API + url : url,
            method: data.method || "post",
            data: data.data || {},
            params: data.params || "",
            headers: data.header || {},
            timeout: 30 * 1000
        }).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                var data = {
                    code: 405,
                    msg: res.message
                }
                resolve(data)
            }
        }).catch(err => {
            var data = {
                code: 404,
                msg: err.message
            }
            resolve(data)
        })
    })
}


export default request