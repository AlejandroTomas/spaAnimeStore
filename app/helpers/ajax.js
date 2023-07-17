export async function ajax(props){
    let { url,resolve,method="GET",data } = props;
    console.log(method)
    if(method!="GET"){
        try {
            const res = await fetch(url, {
                method: method, 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
              });
    
            let json = await res.json()
            await resolve(json);
        } catch (err) {
            let message= err.statusText || "Ocurrio un error";
            console.log(err);
            console.log('Mesage front',message)
        }
    }else{
        try {
            const res = await fetch(url);
            let json = await res.json();
            if(!res.ok) throw {status:res.status,statusText:res.statusText}; //Capturar el error
            await resolve(json);
            //Se lanza el escaner de lazyLoading con cada peticion
            //lazyLoading(document.querySelectorAll('.img-lazy'))
        } catch (err) {
            let message= err.statusText || "Ocurrio un error";
            console.log(err)
            console.log(message +" "+ err.status)
        }
    }
/* 
    await fetch(url)
        .then(res=>res.ok ? res.json() : Promise.reject(res))
        .then(json=>cbSuccess(json))
        .catch(err=>{
            let message = err.statusText || "Ocurrio un error al acceder a la API";
            document.getElementById("main").innerHTML=`
            <div class="err">
                <p>Error ${err.status}: ${message}</p>
            </div>
            `; 
            document.querySelector(".loader").style.display="none"
            console.log(err)
        }); */
}