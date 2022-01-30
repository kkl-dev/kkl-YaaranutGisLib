import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { environment } from './environments/environment';
import { environmentTest } from './environments/environment.test';
import { environmentProd } from './environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/core/testing";
export class YaaranutService {
    constructor(config, testBed) {
        this.config = config;
        this.apiUrl = "";
        const az = config;
        if (isDevMode()) {
            this.apiUrl = environment.apiUrl;
            this.apiUrl = environmentTest.apiUrl;
        }
        else if (testBed !== null) {
            this.apiUrl = environmentTest.apiUrl;
        }
        else {
            this.apiUrl = environmentProd.apiUrl;
        }
        this.apiUrl = config.GisApiUrl;
    }
}
YaaranutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService, deps: [{ token: 'config' }, { token: i1.TestBed, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
YaaranutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: YaaranutService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.TestBed, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFhcmFudXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy95YWFyYW51dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQUdsRSxNQUFNLE9BQU8sZUFBZTtJQUd4QixZQUFzQyxNQUFXLEVBQWUsT0FBdUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUY1QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR2IsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUN4QzthQUNJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFBO0lBQ2xDLENBQUM7OzRHQWhCUSxlQUFlLGtCQUdKLFFBQVE7Z0hBSG5CLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7MEJBSU0sTUFBTTsyQkFBQyxRQUFROzswQkFBeUIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50VGVzdCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRlc3QnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudFByb2QgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFlhYXJhbnV0U2VydmljZSB7XHJcbiAgcHVibGljIGFwaVVybCA9IFwiXCI7XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IGFueSAsIEBPcHRpb25hbCgpIHRlc3RCZWQ6IFRlc3RCZWQgfCBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgYXogPSBjb25maWc7XHJcbiAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpVXJsID0gZW52aXJvbm1lbnQuYXBpVXJsO1xyXG4gICAgICAgICAgICB0aGlzLmFwaVVybCA9IGVudmlyb25tZW50VGVzdC5hcGlVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRlc3RCZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hcGlVcmwgPSBlbnZpcm9ubWVudFRlc3QuYXBpVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcGlVcmwgPSBlbnZpcm9ubWVudFByb2QuYXBpVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwaVVybCA9IGNvbmZpZy5HaXNBcGlVcmxcclxuICAgIH1cclxufVxyXG4iXX0=