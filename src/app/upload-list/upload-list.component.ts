import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {PdfUploaderComponent} from '../extraction-module/pdf-uploader/pdf-uploader.component';
import { FileNameService } from '../file-name.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss'],
  providers: [PdfUploaderComponent]
})

export class UploadListComponent implements OnInit {

fileList: string[]= null;
//files: any[] = [];
  constructor(private fileComponent: PdfUploaderComponent,
              private fileNameService : FileNameService
              ){ }
  
  deleteAttachment(index) {
    //this.files.splice(index, 1);
    this.fileList.splice(index, 1)
  }
  
  ngOnInit() {
    this.fileList = this.fileNameService.fileName;
    this.fileNameService.fileName = undefined;
    // this.files = this.fileComponent.files;
  }

}
