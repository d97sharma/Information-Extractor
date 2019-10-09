import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { UploadStatus } from './upload-status'
import { NotificationService } from 'src/app/notification.service';
import { FileNameService } from 'src/app/file-name.service';

@Component({
  selector: 'app-pdf-uploader',
  templateUrl: './pdf-uploader.component.html',
  styleUrls: ['./pdf-uploader.component.scss'],
  
})
export class PdfUploaderComponent implements OnInit {

  progress: number;
  status: UploadStatus;
  files: any[] = [];
  fileNames: string[]= [];
  
  constructor(private http: HttpClient,
    private notifyService : NotificationService,
    private fileNameService: FileNameService
    ) { }

  ngOnInit() {
  }
  sendFiles (){ 
    this.notifyService.showSuccess("Files uploaded successfully", "Notification");
    if (this.files.length === 0) {
      return;
    }
   
    const formData = new FormData();
    
    for (let file of this.files) {
      formData.append("File", file);
    }

    this.http.post<any>("http://localhost:2136/api/upload/files", formData).subscribe(
        (data: UploadStatus) => this.status = { statusMessage: data['StatusMessage']
      }
    );
    // this.toastr.success(this.status.statusMessage); 
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.fileNames.push(element.name);
      this.files.push(element);
      //this.fileNameService.fileName.push(element.name);
    }  
    this.fileNameService.fileName = this.fileNames;
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.fileNames.splice(index, 1)
  }
}
