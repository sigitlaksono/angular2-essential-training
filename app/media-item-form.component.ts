import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
      movieID: this.formBuilder.control('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      watchedOn: this.formBuilder.control('', this.watchedOnValidator),
      rating: this.formBuilder.control('')
    }, {validator: this.requiredIfFirstFieldFilled('watchedOn', 'rating')});
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': true };
    }
  }

  watchedOnValidator(control) {
    if(new Date(control.value) > new Date()){
      return { 'watchedOn': true };
    }else{
      return null;
    }
  }

  requiredIfFirstFieldFilled(watchedOnKey: string, ratingKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let watchedOn = group.controls[watchedOnKey];
      let rating = group.controls[ratingKey];
      if (watchedOn.value !== "" && rating.value === "") {
        return {
          'watchedOnRequired': true
        };
      }
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
