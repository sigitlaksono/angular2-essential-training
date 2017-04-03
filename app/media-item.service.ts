import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export class Filter{
  propertyName : string;
  operator : string;
  type: string;
  value: any;
}

@Injectable()
export class MediaItemService{
  
  constructor(private http: Http) {}

  isValid(filter) {
    if(filter.type === "string"){
      filter.value = filter.value.trim();
    }
    return filter.operator !== "" && filter.value && filter.value !== "" && filter.propertyName !== "";
  }

  get(filter?: Filter) {
    let searchParams = new URLSearchParams();
    if(filter && this.isValid(filter)){
      searchParams.append('filter', JSON.stringify(filter));
    }
    return this.http.get('mediaitems', { search: searchParams })
      .map(response => {
        return response.json().mediaItems;
      });
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
  }
}
