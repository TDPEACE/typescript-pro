interface Point {
    x: number,
    y: number
}

function map(data: Point) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
console.log('map==>', map({ x: 3, y: 4 }))