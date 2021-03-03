const min=require('./min');

describe('min',()=>
{
    it('min of [] is null',()=>
    {
        expect(min([])).toEqual(null);
    });

    it('min of [2,1,3,4] is 1',()=>
    {
    const inputList= [2,1,3,4];
    const expected=1;
    expect(min(inputList)).toEqual(expected);
    });

});
