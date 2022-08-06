import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  private unit = 1;

  transform(value: number | string, ...args: any): string {
    const size = typeof value === 'string' ? parseInt(value || '0') : value;
    return this.sizeFormatter(size);
  }

  private sizeCategory(unit: number) {
    switch (unit) {
      case 1: return 'B';
      case 2: return 'KB';
      case 3: return 'MB';
      case 4: return 'GB';
      case 5: return 'TB';
      default : return 'B';
    }
  }

  private sizeFormatter(size: number) {
    if(size >= 1024) {
      this.unit++;
      return this.sizeFormatter(size / 1024);
    }
    return `${Math.round(size)} ${this.sizeCategory(this.unit)}`
  }
}
