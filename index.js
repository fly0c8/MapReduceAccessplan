const accessplan = require('./accessplan')

let accessplandetails = accessplan.accessplandetails.reduce(
    function(result, item) {
        if(!result[item.node_id]) {
            result[item.node_id] = [];
        }
        result[item.node_id].push(item);
        return result;
    },
    {}
)

//console.log(accessplandetails);

for (let m in accessplandetails) {
    console.log(`Node: ${m}`);
    console.log(accessplandetails[m]);
}

// for (const [key,value] of accessplandetails) {
//     console.log(`************* NodeID: ${key}`);
//     console.log(value);
    
// }