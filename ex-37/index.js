function  make_shirt(size){
    let printLine
    if(size==='large'||size==='medium')
printLine="i love Javascript"
else printLine="i love web designing"
console.log(`i want a T-shirt of ${size} size and will have "${printLine}" printed over it`)
}

make_shirt('xxl')
make_shirt('large')
make_shirt('medium')
make_shirt('small')
make_shirt('xs')
make_shirt('xl')