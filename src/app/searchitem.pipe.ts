import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchitem'
})
export class SearchitemPipe implements PipeTransform {

  transform(val:any[], filterString:string, propName:string):any[] {
    const result:any=[];
    if(!val || filterString==='' || propName==='')
    {
      return val;
    }
    val.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
