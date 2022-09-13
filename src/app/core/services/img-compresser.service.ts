import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgCompressorService {
  constructor() {}

  bytesToMegaBytes = (bytes: number) => bytes / 1024 ** 2;

  compressImage(
    file: File,
    width = 500,
    quality = 1,
    typeOutput: 'jpeg' | 'png' = 'jpeg'
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      console.log('Original File', file);
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        if (!event.target) {
          return reject(null);
        }
        const fileUrl = event.target.result;
        const image = document.createElement('img');
        image.src = fileUrl as string;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          const ratio = width / image.width;
          canvas.width = width;
          canvas.height = image.height * ratio;
          context?.drawImage(image, 0, 0, canvas.width, canvas.height);

          const newFileUrl = canvas.toDataURL(`image/${typeOutput}`, quality);
          const newFileData = this.urlToFile(
            newFileUrl,
            file.name.split('.')[0]
          );
          console.log('New File Data: ', newFileData);

          if (newFileData) {
            resolve(newFileData);
          } else {
            reject(null);
          }
        };
      };
    });
  }

  urlToFile = (url: string, fileName: string): File | null => {
    const [mine, data] = url.split(',');
    const _mime = mine.match(/:(.*?);/);
    const type = _mime && _mime[1];
    const dataStr = atob(data);
    let n = dataStr.length;
    const dataArr = new Uint8Array(n);

    while (n--) {
      dataArr[n] = dataStr.charCodeAt(n);
    }

    if (type) {
      return new File([dataArr], `${fileName}`, {
        type,
      });
    } else {
      return null;
    }
  };
}
