const head = require("./head");

const max=(list)=>
{

    if(list.length==0)
    {
        return  null;
    }
    
    var currentMax=head(list);
    var maxIndex=list.length-1;
    var startIndex=1;
    return findMax(list,startIndex,maxIndex,currentMax);
}

const findMax=(list,index,maxIndex,currentMax)=>
{
    if(index>maxIndex) return currentMax;

    if(list[index]>currentMax)
        currentMax=list[index];
    return findMax(list,index+1,maxIndex,currentMax);
}

module.exports=max;