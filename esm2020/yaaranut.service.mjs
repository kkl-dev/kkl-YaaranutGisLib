import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class YaaranutService {
    constructor(config) {
        this.config = config;
        this.apiUrl = "";
        this.apiUrl = config.GisApiUrl;
        this.apiUrl = 'https://kkl-yaaranutgisapi.azurewebsites.net';
    }
}
YaaranutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService, deps: [{ token: 'environmentFile' }], target: i0.ɵɵFactoryTarget.Injectable });
YaaranutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environmentFile']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFhcmFudXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy95YWFyYW51dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFBK0MsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFGckQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLDhDQUE4QyxDQUFDO0lBQ2pFLENBQUM7OzRHQU5RLGVBQWUsa0JBR0osaUJBQWlCO2dIQUg1QixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQUlNLE1BQU07MkJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFlhYXJhbnV0U2VydmljZSB7XHJcbiAgcHVibGljIGFwaVVybCA9IFwiXCI7XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnZW52aXJvbm1lbnRGaWxlJykgcHJpdmF0ZSBjb25maWc6IGFueSApIHtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGNvbmZpZy5HaXNBcGlVcmxcclxuICAgICAgICB0aGlzLmFwaVVybCA9ICdodHRwczovL2trbC15YWFyYW51dGdpc2FwaS5henVyZXdlYnNpdGVzLm5ldCc7XHJcbiAgICB9XHJcbn1cclxuIl19