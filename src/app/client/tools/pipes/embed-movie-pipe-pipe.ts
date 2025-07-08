import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'embedMoviePipe'
})
export class EmbedMoviePipePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string | undefined): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/"+ value?.split("=")[1]);
  }

}
