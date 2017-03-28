import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  onMediaItemDelete(mediaItem) {
    
  }

  onMediaItemPreview(mediaItem) {
    this.selectedMediaItem = mediaItem;
  }

  onMediaItemPopupClose(){
    this.selectedMediaItem = null;
  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  secondMediaItem = {
    id: 2,
    name: "The Ring",
    medium: "Movie",
    category: "Horror",
    year: 2017,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  selectedMediaItem = this.firstMediaItem;
}
