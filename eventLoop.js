const a = () => console.log("a");
const b = () => console.log("b");
const c = () => console.log("c");


const start = () => {
    console.log('start');
    a()
    setImmediate(() => console.log('nexttick'));
    b()
}

start()
c()
