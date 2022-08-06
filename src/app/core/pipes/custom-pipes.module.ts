import {NgModule} from '@angular/core';
import {CapitalizePipe} from './capitalize.pipe';
import {HandleUndefinedPipe} from './handle-undefined.pipe';
import {CustomDatePipe} from './custom-date.pipe';
import {HandleNullPipe} from './handle-null.pipe';
import {CountDisplayPipe} from './count-display.pipe';
import {FirstLettersPipe} from './first-letters.pipe';
import {TypeofPipe} from './typeof.pipe';
import {EmptyPipe} from './empty.pipe';
import {TextFromatPipe} from "./text-fromat.pipe";
import { FilesizePipe } from './filesize.pipe';

@NgModule({
  declarations: [
    CapitalizePipe,
    HandleUndefinedPipe,
    CustomDatePipe,
    HandleNullPipe,
    CountDisplayPipe,
    FirstLettersPipe,
    TypeofPipe,
    EmptyPipe,
    TextFromatPipe,
    FilesizePipe,
  ],
  exports: [
    TextFromatPipe,
    CapitalizePipe,
    HandleUndefinedPipe,
    CustomDatePipe,
    HandleNullPipe,
    CountDisplayPipe,
    FirstLettersPipe,
    TypeofPipe,
    EmptyPipe
  ]
})

export class CustomPipesModule {
}
