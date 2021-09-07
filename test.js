
const str = 'szrmtbttyyaymadobvwniwmozojggfbtswdiocewnqsjrkimhovimghixqryqgzhgbakpncwupcadwvglmupbexijimonxdowqsjinqzytkooacwkchatuwpsoxwvgrrejkukcvyzbkfnzfvrthmtfvmbppkdebswfpspxnelhqnjlgntqzsprmhcnuomrvuyolvzlni';
const splitted = str.split('');
const reversed = splitted.reverse();
const unique = [...new Set(splitted)];
var v = [];

//function count() {
//    const str = 'szrmtbttyyaymadobvwniwmozojggfbtswdiocewnqsjrkimhovimghixqryqgzhgbakpncwupcadwvglmupbexijimonxdowqsjinqzytkooacwkchatuwpsoxwvgrrejkukcvyzbkfnzfvrthmtfvmbppkdebswfpspxnelhqnjlgntqzsprmhcnuomrvuyolvzlni';
//    const splitted = str.split('');

//    splitted.sort();

//    var current = null;
//    var cnt = 0;
//    for (var i = 0; i < splitted.length; i++) {
//        if (splitted[i] != current) {
//            if (cnt > 0) {
//                console.log(current + ' comes --> ' + cnt + ' times');
//            }
//            current = splitted[i];
//            cnt = 1;
//        } else {
//            cnt++;
//        }
//    }
//    if (cnt > 0) {        
//        console.log(current + ' comes --> ' + cnt + ' times');        
//    }
//}

//count();

//var arr = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
var v_2 = [];
var map = splitted.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, []);

map = map.sort();

// map is an associative array mapping the elements to their frequency:
console.log(map.sort());


for (let i = 0; i < unique.length; i++) {
    var sum = 0;
    for (let j = 0; j < splitted.length; j++) {
        if (unique[i] === splitted[j]) {
            sum++;
        }
    }
    v[i] = sum;
}


var v_unique = [...new Set(v)];
var v_sol = [];

v_unique = v_unique.sort(function (a, b) { return b - a });

//v.sort();
//v = v.slice(-3);
//v_unique = v_unique.sort();

for (let i = 0; i < v_unique.length; i++) {
    let temp = [];
    for (let j = 0; j < v.length; j++) {
        if (v_unique[i] === v[j]) {
            temp.push(unique[j]);
        }
    }
    temp = temp.sort();
    //console.log(temp);
    v_sol.push(temp);
}

v_sol = v_sol.flat();
v = v.sort(function (a, b) { return b - a });

for (let i = 0; i < 3; i++) {
    console.log(' ' + v_sol[i] + ': ' + v[i]);
}

//console.log(unique);
//console.log(v.sort(function (a, b) { return b - a }));
//console.log(v_unique);
//console.log(v_sol.flat());