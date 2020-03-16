import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {

  transform(text: string, limit = 0, ellipsis = true): string {

    if (!text) {
      return '';
    }
    if (!limit || text.length <= limit) {
      return text;
    }

    if (text.length > limit) {
      text = text.substr(0, limit);
      if (/\s+/.test(text)) {
        text = text.substr(0, text.lastIndexOf(' '));
      }
      if (ellipsis) {
        text = `${text}...`;
      }
    }
    return text;
  }
}
