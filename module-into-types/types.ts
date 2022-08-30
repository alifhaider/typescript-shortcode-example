/* Basic way of defining an action is using the frist syntax
    which is `NormalAction` 

    export type NormalAction = "ADD_TODO" | "EDIT_TODO" | "REMOVE_TODO";
    
    We can also define const and and use as type
    
    `export type ActionModule = typeof import("./constants")`
    `export type Action = ActionModule[keyof ActionModule]`  
*/

export type NormalAction = "ADD_TODO" | "EDIT_TODO" | "REMOVE_TODO";

export type ActionModule = typeof import("./constants");

export type Action = ActionModule[keyof ActionModule];

const actionModule: ActionModule = {
  ADD_TODO: "add_todo",
  REMOVE_TODO: "remove_todo",
  EDIT_TODO: "edit_todo",
};
