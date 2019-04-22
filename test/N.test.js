import axios from "axios";
import { myCall, myArr, Run,fetchData,fetchWithPromise, testMock, testApi, Users, testMockModule } from "../app/N";
import sum from "../app/sum";




jest.mock('../app/sum.js');

jest.mock('axios');

describe('testing mock module', () => {
     it('Should test the mock module',()=>{
        //  sum();
    //    expect(sum).toHaveBeenCalledTimes(1);
    //    sum.mockImplementation((a)=>(24));
    //    console.log(sum());
       
 const users = [{name: 'Bob'}];
  const resp = {data: users};

  axios.get.mockResolvedValue(resp);
  return Users.all().then(resp =>{
      expect(resp).toEqual(users);
      
  });



     })
    
})
