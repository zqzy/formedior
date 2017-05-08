
export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public divs: string,
        public alterEgo?: string,//有问号的表示可以省略

    ) { }
}
export class Myhero {
    public id: number;
    public name: string;
    public power: string;
    public divs: string;
}