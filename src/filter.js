const filter=(list,filterCondition)=>
{
    var resultList=[];
    var startIndex=0;
    var lastIndex=list.length-1;
    return filterList(startIndex,lastIndex,list,resultList,filterCondition);

        /*    //USING DIRECTLY JS LIBRARY FUNCTION
        var result=list.filter(filterCondition);
        return result;
        */
    

}

const filterList=(index,lastIndex,list,resultList,filterCondition)=>       //one by one check each element if it satisfies condition or not
{
    if(index>lastIndex)
        return resultList;

    if(filterCondition(list[index]))
        resultList.push(list[index]);

    return filterList(index+1,lastIndex,list,resultList,filterCondition);
}



module.exports=filter;
