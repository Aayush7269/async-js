onmessage =function(data)
{
const ans = data.data.reduce((acc, item)=>item+acc,0); // here acc adds all the items  and saves the answer and the initial value is 0. 
postMessage(ans); /// sending the calculated answer back to worker.
}