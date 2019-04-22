import axios from 'axios'

export function cool() {
    return {N:'pronoob'} ;
}

export function myCall(a) {
         let P = new Promise((res,rej )=>{

            setTimeout(() => {

                     res('hello naim'); 
            }, a*1000);
         });  
         return P;
}


let arr=[{n:'pronoob'},{n:'naim'}];
export function myArr(a) {
    return arr.filter((e)=>(e.n==a)); 
}


export function Run(a) {
    let b=[...arguments];
         if (b.length!=0) {
        
             return b.length==1?a*a:a*b[1];

          }
       
    return null;

}    

export function fetchData(cb) {
    
    console.log('called this fetch');
    setTimeout(() => {

        cb('N'); 
        
    }, 1000);
}

export function  fetchWithPromise() {
      return new Promise((res,rej )=>{
        //   res('cool');
          setTimeout(() => {
              rej('error'); 
          }, 2000);
      })         
}

export function testMock(cb) {
      cb('N'); 
}

export  function  testApi() {
 
 return axios.get("https://jsonplaceholder.typicode.com/todos/1")
}

export class Users {
  static all() {
    return axios.get("https://jsonplaceholder.typicode.com/todos/1").then(resp => resp.data);
  }
}


export function testMockModule(a) {
 return a+a;
}

