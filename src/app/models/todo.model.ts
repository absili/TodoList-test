export enum TodoStatusEnum{
  TODO="todo",
  DONE="done"
}
export class Todo {
   
    constructor(
      public id:number,
      public title:string,
      public status:TodoStatusEnum,
      public description?:string
     ) {
    
    }
  }
  


  