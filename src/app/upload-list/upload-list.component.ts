import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {PdfUploaderComponent} from '../extraction-module/pdf-uploader/pdf-uploader.component';
import { FileNameService } from '../file-name.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
import { HttpClient } from '@angular/common/http';
import { UploadStatus } from '../extraction-module/pdf-uploader/upload-status';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss'],
  providers: [PdfUploaderComponent]
})

export class UploadListComponent implements OnInit {

showFlag : boolean = true;
fileList: string[]= null;
statusMessage : any = null;
testMessage:string = "hi" ;
//files: any[] = [];
  constructor(private fileComponent: PdfUploaderComponent,
              private fileNameService : FileNameService,
              private dialog: MatDialog,
              private http:HttpClient,
              private notifyService : NotificationService
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
          
           //this.dialog.open(InformationDialogComponent, dialogConfig);

            let dialogRef = this.dialog.open(InformationDialogComponent, {
              height: '400px',
              width: '600px',
            });
      }

      convertToJpeg(){
                      this.http.get<any>("http://172.23.179.165:5000/api/ConvertPDFs").subscribe(
                      (data: any) => {
                        this.statusMessage = data;
                        this.testMessage = this.statusMessage["Status"];
                        this.notifyService.showSuccess(this.testMessage,"");                        
                    }
                    );
                                 
                }
}
