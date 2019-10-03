import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingModuleComponent } from './training-module/training-module.component';
import { ExtractionModuleComponent } from './extraction-module/extraction-module.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabGroupExtractComponent } from './tab-group-extract/tab-group-extract.component';
import { BatchOrSingleComponent } from './batch-or-single/batch-or-single.component';
import { InvoiceTypeComponent } from './invoice-type/invoice-type.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PdfUploaderComponent } from './extraction-module/pdf-uploader/pdf-uploader.component';
import { DragDropDirective } from './drag-drop.directive';


@NgModule({
  declarations: [
    AppComponent,
    TrainingModuleComponent,
    ExtractionModuleComponent,
    HomeComponent,
    PageNotFoundComponent,
    TabGroupExtractComponent,
    BatchOrSingleComponent,
    InvoiceTypeComponent,
    StepperComponent,
    PdfUploaderComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ImageCropperModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
    }

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

