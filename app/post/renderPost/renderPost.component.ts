import {Component, Input} from '@angular/core';

@Component({
  selector:'renderPost',
  templateUrl:'app/post/renderPost/renderPost.component.html'
})

export class RenderPost{

  @Input() post;
}
