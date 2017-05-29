import { Component } from '@angular/core';
import { FileItem } from '../../../shared';

import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  isEnabledUpload: boolean = true;
  files: Array<FileItem> = [];

  constructor() {
  }

  getImages(){
    return this.files;
  }


  getFilesToUpload() {
    this.isEnabledUpload = false;
    return this.files;
  }

  clearFiles() {
    this.files = [];
    this.isEnabledUpload = true;
  }



  addFile(fileInput: any) {
    this.addFiles(fileInput.target.files);
  }

  private addFiles(files: FileList): void {
    _.each(files, (file) => {
      if (this.fileCanBeAdded(file)) {
        this.files.push(new FileItem(file));
      }
    });
  }

  private fileCanBeAdded(file: File): boolean {
    return (!this.fileIsAlreadyAdded(file) && this.fileTypeIsImage(file.type));
  }

  private fileIsAlreadyAdded(file: File): boolean {
    return _.filter(this.files, _.iteratee(['name', file.name])).length > 0;
  }

  private fileTypeIsImage(fileType: string): boolean {
    return (fileType == '' ? false : fileType.startsWith('image'));
  }
}
