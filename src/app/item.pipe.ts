import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';

@Pipe({
  name: 'item'
})
export class ItemPipe implements PipeTransform {

  constructor( public its: ItemsService) { }

  transform(searchTerm:string){
    if(!this.its.items || !searchTerm){
      return this.its.items;
    }
    return this.its.items.filter(products => products.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
    //returns all names of the products once inputted in the textbox
  }

}