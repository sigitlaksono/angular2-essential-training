import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { YoloNavigationComponent } from './navigation/yolo-navigation.component';
import { YoloItemComponent } from './item/yolo-item.component';
import { YoloItemListComponent } from './item/yolo-item-list.component';
import { YoloItemFormComponent } from './item/yolo-item-form.component';
import { YoloRegistrationComponent } from './registration/yolo-registration.component';
import { YoloLoginComponent } from './login/yolo-login.component';
import { YoloPopupComponent } from './popup/yolo-popup.component';
import { AuthenticationService } from './service/auth.service';
import { PopupService } from './service/common-popup.service';
import { lookupListToken, lookupLists} from './common/constant';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    YoloNavigationComponent,
    YoloItemComponent,
    YoloItemListComponent,
    YoloItemFormComponent,
    YoloRegistrationComponent,
    YoloLoginComponent,
    YoloPopupComponent
  ],
  providers: [
    AuthenticationService,
    PopupService,
    { provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}