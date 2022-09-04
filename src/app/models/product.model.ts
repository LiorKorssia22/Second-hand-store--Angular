export class Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    city: string;
    tel: number;
    dateOfRelease: Date;


    constructor(id:number = 0, name:string = "", description:string = "", image:string = "", price: number = 0 ,city: string="", tel: number = 0 , dateOfRelease: Date = new Date()) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.price = price;
            this.city = city;
            this.tel = tel;
            this.dateOfRelease = dateOfRelease;
    }
}