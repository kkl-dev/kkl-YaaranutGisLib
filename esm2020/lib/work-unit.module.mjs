import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkUnitComponent } from './work-unit.component';
import { YaaranutService } from '../yaaranut.service';
import * as i0 from "@angular/core";
export class WorkUnitModule {
    foraaa() {
    }
    static forRoot(environment) {
        console.log(environment);
        return {
            ngModule: WorkUnitModule,
            providers: [YaaranutService, { provide: 'config', useValue: environment }]
        };
    }
}
WorkUnitModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: WorkUnitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WorkUnitModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: WorkUnitModule, declarations: [WorkUnitComponent], imports: [FormsModule,
        //BrowserModule
        CommonModule], exports: [WorkUnitComponent] });
WorkUnitModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: WorkUnitModule, imports: [[
            FormsModule,
            //BrowserModule
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: WorkUnitModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        WorkUnitComponent
                    ],
                    imports: [
                        FormsModule,
                        //BrowserModule
                        CommonModule
                    ],
                    exports: [
                        WorkUnitComponent
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy9saWIvd29yay11bml0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0Riw0REFBNEQ7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBaUJ0RCxNQUFNLE9BQU8sY0FBYztJQUNoQixNQUFNO0lBRWIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixPQUFPO1lBQ0gsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDN0UsQ0FBQztJQUNOLENBQUM7OzJHQVZRLGNBQWM7NEdBQWQsY0FBYyxpQkFadkIsaUJBQWlCLGFBR2pCLFdBQVc7UUFDWCxlQUFlO1FBQ2IsWUFBWSxhQUdkLGlCQUFpQjs0R0FJUixjQUFjLFlBVmhCO1lBQ1AsV0FBVztZQUNYLGVBQWU7WUFDYixZQUFZO1NBQ2Y7MkZBTVUsY0FBYztrQkFkMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxlQUFlO3dCQUNiLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgV29ya1VuaXRDb21wb25lbnQgfSBmcm9tICcuL3dvcmstdW5pdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnR9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IFlhYXJhbnV0U2VydmljZSB9IGZyb20gJy4uL3lhYXJhbnV0LnNlcnZpY2UnO1xyXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV29ya1VuaXRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIC8vQnJvd3Nlck1vZHVsZVxuICAgICAgQ29tbW9uTW9kdWxlXG4gIF0sICAgICAgICAgXG4gIGV4cG9ydHM6IFtcbiAgICBXb3JrVW5pdENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JrVW5pdE1vZHVsZSB7IFxuICAgIHB1YmxpYyBmb3JhYWEoKSB7XG5cclxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8V29ya1VuaXRNb2R1bGU+IHtcbiAgICAgICAgY29uc29sZS5sb2coZW52aXJvbm1lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFdvcmtVbml0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbWWFhcmFudXRTZXJ2aWNlLCB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfV1cbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiJdfQ==