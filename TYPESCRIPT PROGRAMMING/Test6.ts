// 6. RETURNING MULTIPLE VALUES IN A FUNCTION
const func = (ip1: number, ip2: number): {add: number; sub: number; mult: number; div: number; mod: number;} => {
    let ADD = ip1 + ip2;
    let SUB = ip1 - ip2;
    let MULT = ip1 * ip2;
    let DIV = ip1 / ip2;
    let MOD = ip1 % ip2;

    return {
        add: ADD,
        sub: SUB,
        mult: MULT,
        div: DIV,
        mod: MOD
    };
};
const res = func(125, 3);
console.log(res.add);
console.log(res.sub);
console.log(res.mult);
console.log(res.div);
console.log(res.mod);