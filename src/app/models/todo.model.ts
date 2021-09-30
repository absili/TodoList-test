export enum TodoStateEnum{
  TODO="todo",
  DONE="done"
}
export class Todo {
   
    constructor(
      public id:number,
      public title:string,
      public status:TodoStateEnum,
      public description?:string
     ) {
    
    }
  }
  


  