import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class YaaranutService {
    constructor(config) {
        this.config = config;
        this.apiUrl = "";
        this.apiUrl = config.GisApiUrl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFhcmFudXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy95YWFyYW51dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFBK0MsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFGckQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtJQUNsQyxDQUFDOzs0R0FMUSxlQUFlLGtCQUdKLGlCQUFpQjtnSEFINUIsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVOzswQkFJTSxNQUFNOzJCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBZYWFyYW51dFNlcnZpY2Uge1xyXG4gIHB1YmxpYyBhcGlVcmwgPSBcIlwiO1xyXG4gICBcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2Vudmlyb25tZW50RmlsZScpIHByaXZhdGUgY29uZmlnOiBhbnkgKSB7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSBjb25maWcuR2lzQXBpVXJsXHJcbiAgICB9XHJcbn1cclxuIl19