import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }
    const words = value.split(' ');
    for (let ii = 0; ii < words.length; ii++) {
      const word = words[ii];
      if ( ii > 0 && this.isPreposition(words[ii]) ) {
        words[ii] = word.toLowerCase();
      } else {
        words[ii] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    const prepositions = ['is', 'of', 'the', 'a', 'at'];
    return prepositions.includes(word.toLowerCase());
  }
}
