import { myCall, myArr, Run,fetchData,fetchWithPromise, testMock } from "../app/N";

// beforeAll(()=>{
//     console.log('called before all');
// });

// beforeEach(()=>{
//     console.log('called before each test');

// });

describe('my testing learning',()=>{



    test('should find the array object', () => {
        let result=[{n:'pronoob'}];
        
        expect(myArr('pronoob')).toEqual(result);
    })
    
})


describe('Making TDD with Run ',()=>{
    it('Should return current argument',()=>{
        expect(Run()).toBeNull();
    })
    
    it('Should multiply with first arg if 2nd arg is provide',()=>{
        
        expect(Run(2)).toBe(4);
        expect(Run(2,6)).toBe(12);
    })
    
    
     
});

// describe('testing the async callbacks', () => {


//     it(' normal  async callbacks', (done) => {
//         function cb(data) {
//             expect(data).toBe('N');
//             done();
//         }
//         fetchData(cb);

//     })

  
//     it('checking promise with fail error add assertion',()=>{
//         expect.assertions(1);
//         // return fetchWithPromise().catch(
//         //     (e)=>{
//         //        expect(e).toMatch('error');
//         //     }
//         // );
//         return expect(fetchWithPromise()).rejects.toMatch('error');
//     });

//     it('testing with async await',async ()=>{
//         return await expect(fetchWithPromise()).rejects.toMatch('error');
//     });


// })

 


describe('mock function testing', () => {
 const mockCallBack= jest.fn((data)=>{
        expect(data).toBe('N');
        
 });

 it('testing the mock function',()=>{
   
     testMock(mockCallBack);
     expect(mockCallBack.mock.calls.length).toBe(1);
    //  expect(mockCallBack.mock.calls["N"]).toBe("N");

});  

})

