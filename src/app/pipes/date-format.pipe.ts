import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string, ...args: any[]): string {
    if (!value) return '';
    const date = new Date(value);

    const day = formatDate(date, 'd', 'pt-BR');
    const month = formatDate(date, 'MMMM', 'pt-BR');
    const year = formatDate(date, 'yyyy', 'pt-BR');

    return `${day} de ${month} de ${year}`;
  }
}
