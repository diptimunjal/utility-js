const head = require("./head");

const min=(list)=>
{

    if(list.length==0)
    {
        return  null;
    }
    
    var currentMin=head(list);
    var lastIndex=list.length-1;
    var startIndex=1;
    return findMin(list,startIndex,lastIndex,currentMin);
}

const findMin=(list,index,lastIndex,currentMin)=>
{
    if(index>lastIndex) return currentMin;

    if(list[index]<currentMin)
        currentMin=list[index];
    return findMin(list,index+1,lastIndex,currentMin);
}


module.exports=min;