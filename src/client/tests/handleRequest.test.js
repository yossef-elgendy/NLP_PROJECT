import { handleRequest } from '../js/handleRequest'

test('handleRequest is a valid function', ()=>{
    expect(typeof handleRequest).toBe('function')
})

test('Function for handling request is defined', ()=>{
    expect(handleRequest).toBeDefined()
})
