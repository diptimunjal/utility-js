const tail=require('./tail');

describe('Tail',()=>
{
    it('Tail of [] is null',()=>
    {
        expect(tail([])).toEqual(null);
    });

    it('Tail of [1,2,3,4] is [2,3,4]',()=>
    {
    const inputList= [1,2,3,4];
    const expected=[2,3,4];
    expect(tail(inputList)).toEqual(expected);
    });

});
