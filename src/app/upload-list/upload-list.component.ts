import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {PdfUploaderComponent} from '../extraction-module/pdf-uploader/pdf-uploader.component';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css'],
  providers: [PdfUploaderComponent]
})

export class UploadListComponent implements OnInit {

filelist: string[]= [];
files: any[] = [];
  constructor(private fileComponent: PdfUploaderComponent){ }
  
  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.filelist.splice(index, 1)
  }
  
  ngOnInit() {
    this.filelist = this.fileComponent.fileNames;
    this.files = this.fileComponent.files;
  }

}
