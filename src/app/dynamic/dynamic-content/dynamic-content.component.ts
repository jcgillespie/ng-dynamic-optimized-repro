import { Component, AfterViewInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContentService } from './dynamic-content.service';

@Component({
  selector: 'app-dynamic-content',
  template: '<ng-template #content></ng-template>'
})
export class DynamicContentComponent implements AfterViewInit {
  constructor(private dynamicService: DynamicContentService) { }

  @ViewChild('content', { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() dynamicContent: string;

  async ngAfterViewInit(): Promise<void> {
    const ref = await this.dynamicService.compileContent(this.dynamicContent);
    this.container.insert(ref);
  }
}
