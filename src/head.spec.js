const head=require('./head');

describe('Head',()=>
{
    it('Head of [] is null',()=>
    {
        expect(head([])).toEqual(null);
    });

    it('Head of [1,2,3] is 1',()=>
    {
       const inputList= [1,2,3];
       const expected=1;
        expect(head(inputList)).toEqual(expected);
    });

});
