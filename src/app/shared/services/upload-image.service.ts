import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FileItem } from '../../shared';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UploadImageService {
  private IMAGES_FOLDER: string = '/recipeImages';

  constructor(public af: AngularFireDatabase) { }

  listLastImages(numberOfImages: number): Observable<any[]> {
    return this.af.list(this.IMAGES_FOLDER, {
      query: {
        limitToLast: numberOfImages
      }
    });
  }


  uploadImagesToFirebase(files: Array<FileItem>, recipeId:string) {
    let storageRef = firebase.storage().ref();
    
    _.each(files, (item: FileItem) => {

      item.isUploading = true;
      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${recipeId}/${this.newGuid()}`).put(item.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => { },
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.saveImage({ name: item.file.name, url: item.url });
        }
      );

    });

  }


  newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }


  private saveImage(image: any) {
    this.af.list(this.IMAGES_FOLDER).push(image);
  }

}
