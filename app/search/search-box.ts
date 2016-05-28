import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search-box',
    templateUrl: 'app/search/search-box.html'
})

export class SearchBox{

    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}
