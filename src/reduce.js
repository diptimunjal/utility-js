const head=require('./head');
const tail=require('./tail');

const reduce=(list,reduceFunction,initialValue)=>
{
   
   if(list.length==0)
   {
       if(initialValue==null)
       return undefined;
       else
       return initialValue;
   }
    if(initialValue==null)
    {
        accumulator=head(list);
        list=tail(list);
    }
    else
    {
        accumulator=initialValue;
    }
    return reducer(list,accumulator,reduceFunction);

}

const reducer=(list,accumulator,reduceFunction)=>
{
  var listHead= head(list);
  accumulator= reduceFunction(accumulator,listHead);            //joining accumulator with currentValue

  var remainingList=tail(list);
  if(remainingList.length==0)       //if(remainingList==[])-> gives wrong answer as == gives false
        return accumulator;
  return reducer(remainingList,accumulator,reduceFunction);
  
}


module.exports=reduce;
