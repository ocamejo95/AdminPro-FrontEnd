import {Component} from '@angular/core';
import {FildUploadService} from "../../services/fild-upload.service";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  public list: Array<any> = [];
  public file1: any;
  public file2: any;
  public file3: any;

  constructor(private fildUploadService: FildUploadService) {
  }

  ngOnInit(): void {
  }

  companyBOBFile(event: any) {
    this.file1 = event.target.files[0];
  }

  companyCommFile(event: any) {
    this.file2 = event.target.files[0];
  }

  sherpaFile(event: any) {
    this.file3 = event.target.files[0];
  }

  submitdata() {
    const formularioDatos = new FormData();
    formularioDatos.append('companyBOB', this.file1)
    formularioDatos.append('companyComm', this.file2)
    formularioDatos.append('sherpa', this.file3)
    this.fildUploadService.uploadAli(formularioDatos)
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }


}
