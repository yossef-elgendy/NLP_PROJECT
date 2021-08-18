import { validURL } from '../js/checkURL'

test('validURL is a valid Function', ()=>{
    expect(typeof validURL).toBe('function')
    
})
 
test('Function validURL is defined', ()=>{
    expect(validURL).toBeDefined()
    
})


test('Function validURL is valid', ()=>{
    expect(validURL('https://jestjs.io/docs/expect')).toBeTruthy()
    
})

test('Function validURL is not valid', ()=>{
    expect(validURL('Hello Wrold')).toBeFalsy()
    
})

