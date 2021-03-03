
const max=require('./max');

describe('max',()=>
{
    it('max of [] is null',()=>
    {
        expect(max([])).toEqual(null);
    });

    it('max of [1,2,4,3] is 4',()=>
    {
    const inputList= [1,2,4,3];
    const expected=4;
    expect(max(inputList)).toEqual(expected);
    });

});
