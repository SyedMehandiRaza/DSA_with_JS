class Cookie {
    constructor(color){
        this.color = color;
    }
    getColor () {
        return this.color;
    }
    setColor (color) {
        return this.color = color;
    }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('lue');

console.log(cookieOne.getColor());

console.log(cookieTwo.setColor("red"));

console.log(cookieTwo.getColor());
