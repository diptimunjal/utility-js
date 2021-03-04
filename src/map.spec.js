
const map=require('./map');

describe('map',()=>
{
    var inputList,expected;
    var convertFunction;

    it('map of ([],cube) is []',()=>
    {
        convertFunction=map.Cube;
        expect(map.Map([],convertFunction)).toEqual([]);               //Map-> main map function, Cube-> function to perform cube of list
    });

    it('map of ([1,2,3],cube) is [1,8,27]',()=>
    {
        inputList= [1,2,3];
        expected=[1,8,27];
        convertFunction=map.Cube;
        expect(map.Map(inputList,convertFunction)).toEqual(expected);
    });

   it('map of ([],identity) is []',()=>
    {
        convertFunction=map.Identity;
        expect(map.Map([],convertFunction)).toEqual([]);               
    });

    it('map of ([1,2,3],identity) is [1,2,3]',()=>
    {
        inputList= [1,2,3];
        expected=[1,2,3];
        convertFunction=map.Identity;
        expect(map.Map(inputList,convertFunction)).toEqual(expected);
    });

    it('map of ([a{x : 10}],someObject => someObject.x + 1) is [11]',()=>
    {
        inputList= [{x:10},{x:20}];
        expected=[11,21];
        convertFunction=someObject => someObject.x + 1;
        expect(map.Map(inputList,convertFunction)).toEqual(expected);
    });

});
