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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFhcmFudXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy95YWFyYW51dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQUdsRSxNQUFNLE9BQU8sZUFBZTtJQUd4QixZQUFzQyxNQUFXLEVBQWUsT0FBdUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUY1QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR2IsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUN4QzthQUNJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ3hDO0lBRUwsQ0FBQzs7NEdBaEJRLGVBQWUsa0JBR0osUUFBUTtnSEFIbkIsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVOzswQkFJTSxNQUFNOzJCQUFDLFFBQVE7OzBCQUF5QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnRUZXN0IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudGVzdCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50UHJvZCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnByb2QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWWFhcmFudXRTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXBpVXJsID0gXCJcIjtcclxuICAgXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogYW55ICwgQE9wdGlvbmFsKCkgdGVzdEJlZDogVGVzdEJlZCB8IG51bGwpIHtcclxuICAgICAgICBjb25zdCBheiA9IGNvbmZpZztcclxuICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hcGlVcmwgPSBlbnZpcm9ubWVudC5hcGlVcmw7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpVXJsID0gZW52aXJvbm1lbnRUZXN0LmFwaVVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGVzdEJlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwaVVybCA9IGVudmlyb25tZW50VGVzdC5hcGlVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFwaVVybCA9IGVudmlyb25tZW50UHJvZC5hcGlVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==