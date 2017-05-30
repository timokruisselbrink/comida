export class Recipe {

    public constructor(){
        this.ingredients = [''];
        this.instructions = [''];
    }

    public title:string;
    public description:string;
    public preparationTime:string;
    public cookTime:string;
    public totalTime:string;
    public yield:string;
    public rating:number;
    public ingredients:Array<string>;
    public instructions:Array<string>;
}