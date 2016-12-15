import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Entries } from '../pages/entries/entries';
import { EntrieDetail } from '../pages/entrie-detail/entrie-detail';
import { EntriesService } from '../providers/entries';
//import { NewEntrie } from '../pages/new-entrie/new-entrie';
//import { Signature } from '../pages/signature/signature';

@NgModule({
  declarations: [
    MyApp,
    Entries,
    EntrieDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Entries,
    EntrieDetail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EntriesService]
})
export class AppModule {}
