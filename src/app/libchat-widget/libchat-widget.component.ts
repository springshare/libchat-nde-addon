import { Component, Inject } from '@angular/core';

@Component({
  selector: 'custom-libchat-widget',
  standalone: true,
  imports: [],
  templateUrl: './libchat-widget.component.html',
  styleUrl: './libchat-widget.component.scss'
})
export class LibchatWidgetComponent {
    private libAnswersDomain: string = '';
    private widgetHash: string = '';

    constructor(@Inject('MODULE_PARAMETERS') public moduleParameters: any){
    }

    ngOnInit()
    {
        this.libAnswersDomain = this.moduleParameters.LibAnswersDomain ?? '';
        if (!this.libAnswersDomain) {
            console.error('LibChat: LibAnswerDomain parameter must be set.');
            return;
        }
        this.widgetHash = this.moduleParameters.WidgetHash ?? '';
        if (!this.widgetHash) {
            console.error('LibChat: WidgetHash parameter must be set.');
            return;
        }
        const script = document.createElement('script');
        script.src = `https://${this.libAnswersDomain}/load_chat.php?hash=${this.widgetHash}`;
        document.head.append(script);
    }
}
