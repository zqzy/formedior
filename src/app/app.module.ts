import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { AppComponent } from './app.component';
import { FormValidayComponent } from './form-validay/form-validay.component';
// import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { FromtwoComponent } from './fromtwo/fromtwo.component';
@NgModule({
  declarations: [
    AppComponent,
    FormValidayComponent,
    FromtwoComponent,
    // ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports:[ForbiddenValidatorDirective]
})
export class AppModule { }
