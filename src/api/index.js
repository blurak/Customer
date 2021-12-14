export const getApi = (url)=>() => fetch(url).then(v=> v.json())

export const apiPut = (url,obj) => () =>
    fetch(`${url}`,{
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r =>{
        if(r.error){
            return ({error: r.validation})
        }
        return r
    })
export const apiPost = (url,obj) => () =>
    fetch(`${url}`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r =>{
        if(r.error){
            return new Error (r.validation)
        }
        return r;
    })
export const apiDelete = (url,id) => () =>
    fetch(`${url}/${id}`,{
        method: 'DELETE',
        headers: new Headers({'Content-type': 'application/json'})
    })
    .then(r =>{
        if(r.error){
            return new Error (r.validation)
        }
        return id;
    })
export const apiLog =(url,name,password)=>()=>
    fetch(`${url}/${name}/${password}`,{
        method: 'GET',
        redirect: 'follow'
    }).then(response => response.text())    
    .catch(error => console.log('error', error));




    