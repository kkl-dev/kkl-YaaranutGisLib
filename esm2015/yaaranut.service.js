import { Injectable } from '@angular/core';
import { environment } from './environments/environment';
import * as i0 from "@angular/core";
export class YaaranutService {
    constructor() {
        this.apiUrl = "";
        this.apiUrl = environment.apiUrl;
    }
}
YaaranutService.ɵfac = function YaaranutService_Factory(t) { return new (t || YaaranutService)(); };
YaaranutService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: YaaranutService, factory: YaaranutService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YaaranutService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFhcmFudXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy95YWFyYW51dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUd6RCxNQUFNLE9BQU8sZUFBZTtJQUcxQjtRQUZPLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFHakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7OzhFQUxRLGVBQWU7cUVBQWYsZUFBZSxXQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFlhYXJhbnV0U2VydmljZSB7XHJcbiAgcHVibGljIGFwaVVybCA9IFwiXCI7XHJcbiAgIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcGlVcmwgPSBlbnZpcm9ubWVudC5hcGlVcmw7XHJcbiAgICB9XHJcbn1cclxuIl19