const tail=(originalList)=>
{
    if(originalList.length==0)
    {
        return  null;
    }
    
    var resultList=[];
    var maxIndex=originalList.length-1;
    var startIndex=1;
    return(findTail(startIndex,maxIndex,originalList,resultList));
}

const findTail=(index,maxIndex,originalList,resultList)=>               //recursive way
{
    if(index>maxIndex)return resultList;
    
    resultList.push(originalList[index]);
    return findTail(index+1,maxIndex,originalList,resultList);
}

/*const tail=(originalList)=>           //iterative way
{
    var resultList=[];
    for (let index = 1; index < originalList.length; index++) {
        resultList.push(originalList[index]);
        }
    return resultList;
}
*/

module.exports=tail;