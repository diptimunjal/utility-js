const reduce=require('./reduce');

describe('reduce',()=>
{
    var reduceFunction=(x,y)=>x+y;
    var inputList,expected,initialValue;

    it('reduce of ([], (x,y)=>x+y,null) is undefined',()=>
    {
        initialValue=null;
        expected=undefined;
        expect(reduce([],reduceFunction,initialValue)).toEqual(expected);               
    });

    it('reduce of ([], (x,y)=>x+y ,10) is 10',()=>
    {
        initialValue=10;
        expected=10;
        expect(reduce([],reduceFunction,initialValue)).toEqual(expected);               
    });
    it('reduce of ([a,b,c],(x,y)=>x+y,null) is abc',()=>
    {
        initialValue=null;
        inputList=['a','b','c'];
        expected='abc';
        expect(reduce(inputList,reduceFunction,initialValue)).toEqual(expected);               
    });

    it('reduce of ([a,b,c], (x,y)=>x+y, z) is zabc',()=>
    {
        initialValue='z';
        inputList=['a','b','c'];
        expected='zabc';
        expect(reduce(inputList,reduceFunction,initialValue)).toEqual(expected);               
    });

});