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
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';
import { ExtractedInformationService } from '../extracted-information.service';


@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss'],
  providers: [PdfUploaderComponent]
})

export class UploadListComponent implements OnInit {

showFlag : boolean = true;
fileList: string[]= null;
myJson = {
  "FileName":""
}
extractedInfo:any = null;

 myJsonSent:any;
//files: any[] = [];
  constructor(private fileComponent: PdfUploaderComponent,
              private fileNameService : FileNameService,
              private dialog: MatDialog,
              private http:HttpClient,
              private notifyService : NotificationService,
              private extractedInformation : ExtractedInformationService
              ){ }
  
  deleteAttachment(index) {
    //this.files.splice(index, 1);
    this.fileList.splice(index, 1)
  }
  
  ngOnInit() {
    this.fileList = this.fileNameService.fileName;
    this.myJson = {
      "FileName":this.fileList[0],
    }    
   this.fileNameService.fileName = undefined;
    // this.files = this.fileComponent.files;
  }
  displayInfo() {
            this.http.post("http://172.23.179.165:5000/api/InfoExtractor",this.myJson).subscribe(
              (data: any) => {
                this.extractedInfo = data;
                // this.notifyService.showSuccess("In","");  
                this.extractedInformation.extractedData = data;
                this.openDialog();                      
            }
            );
            
      }

      convertToJpeg(){
                      this.http.get<any>("http://172.23.179.165:5000/api/ConvertPDFs").subscribe(
                      (data: any) => {
                        this.notifyService.showSuccess(data["Status"],"");                        
                    }
                    );
                                 
                }
      
        openDialog()
        {
          const dialogConfig = new MatDialogConfig();

          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
        
         //this.dialog.open(InformationDialogComponent, dialogConfig);

          let dialogRef = this.dialog.open(InformationDialogComponent, {
            height: '400px',
            width: '600px',
          });
        }
}
