import * as _ from 'lodash';

export class ListUtilityService{
  filter(listToSearch: Array<Object>, propertyName: string, operator: string, value:any){
      return _.filter(listToSearch, function(obj){
         console.log(obj[propertyName], value, operator, obj[propertyName] === value);
          if(operator === "contains") {
            return obj[propertyName].includes(value);
          }
          
          if(operator === "equals") {
             
            return obj[propertyName] === value;
          }
          
          if(operator === "startswith") {
            return obj[propertyName].startsWith(value);
          } 
        
      })
  }

  
}