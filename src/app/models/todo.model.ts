export enum TodoStateEnum{
  TODO="todo",
  INPROGRESS="In Progress",
  DONE="Done"
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
  