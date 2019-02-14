var eventList = {};
function $on(eventName, callback){
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback);
}
function $emit(eventName, val){
    if(!eventList[eventName]){
        return;
    }
    eventList[eventName].map((cb)=>{
        cb(val);
    })
}
function $off(eventName, callback){
    var eventListOff = eventList[eventName];
    if(eventListOff){
        if(callback){
            eventList[eventName] = eventListOff.filter((cb)=>{
                return cb != callback;
            })
        }else{
            eventListOff.length = 0;
        }
    }
}
/* function fn1(val){
    console.log(1, val);
}
function fn2(val){
    console.log(2, val);
}
$on("handle", fn1);
$on("handle", fn2);
$off("handle", fn1);
$emit("handle", 123); */
export default{
    $on, $emit, $off
}
