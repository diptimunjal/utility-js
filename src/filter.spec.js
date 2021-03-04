const filter=require('./filter');

describe('filter',()=>
{
    var filterCondition;
    var inputList,expected;

    it('filter of ([], x => true) is []',()=>
    {
        filterCondition=x=>true;
        expect(filter([],filterCondition)).toEqual([]);               
    });

    it('filter of ([1,2,3],x =>true) is [1,2,3]',()=>
    {
        inputList= [1,2,3];
        expected=[1,2,3];
        filterCondition=x=>true;
        expect(filter(inputList,filterCondition)).toEqual(expected);
    });

   it('filter of ([1,2,3],x => false) is []',()=>
    {
        inputList= [1,2,3];
        expected=[];
        filterCondition=x=>false;
        expect(filter(inputList,filterCondition)).toEqual([]);               
    });

    it('filter of ([1,2,3],x => x > 1) is [2,3]',()=>
    {
        inputList= [1,2,3];
        expected=[2,3];
        filterCondition=x=>x>1;
        expect(filter(inputList,filterCondition)).toEqual(expected);
    });

    it('filter of ([a,B,c,D]) is [B,D]',()=>
    {
        inputList= ['a','B','c','D'];
        expected=['B','D'];
        filterCondition=x=>x==x.toUpperCase();
    expect(filter(inputList,filterCondition)).toEqual(expected);
    });

});
