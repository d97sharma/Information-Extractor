import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {PdfUploaderComponent} from '../extraction-module/pdf-uploader/pdf-uploader.component';
import { FileNameService } from '../file-name.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';

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
              private fileNameService : FileNameService,
              private dialog: MatDialog
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
  openDialog() {

            const dialogConfig = new MatDialogConfig();

            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
          
           this.dialog.open(InformationDialogComponent, dialogConfig);

            // let dialogRef = this.dialog.open(InformationDialogComponent, {
            //   height: '400px',
            //   width: '600px',
            // });
      }

}
