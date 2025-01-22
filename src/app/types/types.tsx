export default interface IProduct {
    id: string,
    price:number,
    slug: string,
    title:string,
    tags:string[],
    dicountPercentage: number,
    isNew:boolean,
description: string,
productImage:string,
}