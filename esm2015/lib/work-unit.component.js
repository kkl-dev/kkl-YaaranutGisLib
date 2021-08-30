import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class WorkUnitComponent {
    //public featerLayer: FeatureLayer = new FeatureLayer();
    //public mapView = new MapView();
    constructor() {
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set workUnits(workUnits) {
        this._workUnits = workUnits;
        //const WorkUnitsWhere = workUnits.map(workUnit => "'" + workUnit + "'").join();
        ////WorkUnitsWhere
        //this.featerLayer.definitionExpression = "GlobalID in (" + WorkUnitsWhere + ")";
        //this.featerLayer.when(
        //  () => {
        //    const query = this.featerLayer.createQuery();
        //    query.outSpatialReference = this.mapView.spatialReference;
        //    this.featerLayer.queryFeatures().then(response => {
        //      response.features.forEach(feature => {
        //        const axzz = "Dfgd";
        //      });
        //    });
        //    this.featerLayer.queryExtent(query)
        //      .then(response => {
        //        if (response.extent !== null) this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
        //      });
        //  });
    }
    get workUnits() {
        return this._workUnits;
    }
    initializeMap() {
        return __awaiter(this, void 0, void 0, function* () {
            //const webMap = new WebMap({
            //  basemap: "topo",
            //  //portalItem: {
            //  //  //url:"https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/JNFILForest/FeatureServer/0/query"
            //  //  id: "streets"
            //  //}
            //});
            //let basemap = new Basemap({
            //  portalItem: {
            //    //url:""
            //    id: "streets"  // WGS84 Streets Vector webmap
            //  }
            //});
            //try {
            //  this.featerLayer = new FeatureLayer({ url: "https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_KKLForestManagementUnits/FeatureServer/0/query" });
            //  this.featerLayer.opacity = 0.5;
            //  this.featerLayer.definitionExpression = "1=2";
            //  //this.featerLayer.displayField = "FOR_NO";
            //  //this.featerLayer.labelsVisible = true;
            //  //this.featerLayer.legendEnabled = true;
            //  //this.featerLayer.outFields = ["FOR_NO"];
            //  //this.featerLayer.popupEnabled = true;
            //  const featerRenderer = new SimpleRenderer();
            //  featerRenderer.label = "{FOR_NO}";
            //  const polygonsSimpleFillSymbol = new SimpleFillSymbol();
            //  polygonsSimpleFillSymbol.color = Color.fromString("gold");
            //  polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
            //  polygonsSimpleFillSymbol.outline.width = 2;
            //  featerRenderer.symbol = polygonsSimpleFillSymbol;
            //  const labelClass = new LabelClass();
            //  labelClass.labelExpressionInfo = { expression: "$feature.FOR_NO  " };
            //  this.featerLayer.labelingInfo = [labelClass];
            //  this.featerLayer.renderer = featerRenderer;
            //  webMap.add(this.featerLayer);
            //  this.mapView.container = this.mapViewEl.nativeElement;
            //  this.mapView.map = webMap;
            //  //(await mapView.whenLayerView(featerLayer)).filter.where = "GlobalID = '" + this._filter[0] + "'";
            //  //mapView.when(() => {
            //  //  this.mapLoaded.emit(true);
            //  //});
            //} catch (error) {
            //  alert('We have an error: ' + error);
            //}
        });
    }
    ngOnInit() {
        this.initializeMap();
    }
}
WorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "kkl-workUnit", inputs: { workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `aaaa
    <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
  zzzz`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kkl-workUnit',
                    template: `aaaa
    <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
  zzzz`,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQW1CdEcsTUFBTSxPQUFPLGlCQUFpQjtJQW9DNUIsd0RBQXdEO0lBQ3hELGlDQUFpQztJQUNqQztRQWpDVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO0lBaUNsQyxDQUFDO0lBdENELElBQWdELE9BQU8sQ0FBQyxPQUFtQjtRQUN6RSxJQUFJLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQUU7SUFDNUMsQ0FBQztJQUtELElBQ0ksU0FBUyxDQUFDLFNBQW1CO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRTVCLGdGQUFnRjtRQUNoRixrQkFBa0I7UUFDbEIsaUZBQWlGO1FBQ2pGLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsbURBQW1EO1FBQ25ELGdFQUFnRTtRQUNoRSx5REFBeUQ7UUFDekQsOENBQThDO1FBQzlDLDhCQUE4QjtRQUM5QixXQUFXO1FBQ1gsU0FBUztRQUNULHlDQUF5QztRQUN6QywyQkFBMkI7UUFDM0IsNkhBQTZIO1FBQzdILFdBQVc7UUFFWCxPQUFPO0lBQ1QsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBUUssYUFBYTs7WUFDakIsNkJBQTZCO1lBQzdCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsb0hBQW9IO1lBQ3BILHFCQUFxQjtZQUNyQixPQUFPO1lBQ1AsS0FBSztZQUNMLDZCQUE2QjtZQUM3QixpQkFBaUI7WUFDakIsY0FBYztZQUNkLG1EQUFtRDtZQUNuRCxLQUFLO1lBQ0wsS0FBSztZQUVMLE9BQU87WUFDUCwyS0FBMks7WUFDM0ssbUNBQW1DO1lBQ25DLGtEQUFrRDtZQUNsRCwrQ0FBK0M7WUFDL0MsNENBQTRDO1lBQzVDLDRDQUE0QztZQUM1Qyw4Q0FBOEM7WUFDOUMsMkNBQTJDO1lBQzNDLGdEQUFnRDtZQUNoRCxzQ0FBc0M7WUFDdEMsNERBQTREO1lBQzVELDhEQUE4RDtZQUM5RCxzRUFBc0U7WUFDdEUsK0NBQStDO1lBQy9DLHFEQUFxRDtZQUNyRCx3Q0FBd0M7WUFDeEMseUVBQXlFO1lBQ3pFLGlEQUFpRDtZQUNqRCwrQ0FBK0M7WUFDL0MsaUNBQWlDO1lBR2pDLDBEQUEwRDtZQUMxRCw4QkFBOEI7WUFHOUIsdUdBQXVHO1lBQ3ZHLDBCQUEwQjtZQUMxQixrQ0FBa0M7WUFDbEMsU0FBUztZQUNULG1CQUFtQjtZQUNuQix3Q0FBd0M7WUFDeEMsR0FBRztRQUVMLENBQUM7S0FBQTtJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OEdBaEdVLGlCQUFpQjtrR0FBakIsaUJBQWlCLG1QQU5sQjs7T0FFTDsyRkFJTSxpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7T0FFTDtvQkFDTCxNQUFNLEVBQUUsRUFDUDtpQkFDRjswRUFHaUQsT0FBTztzQkFBdEQsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUdoQyxTQUFTO3NCQUFsQixNQUFNO2dCQUtILFNBQVM7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbmltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuaW1wb3J0IHsgU2ltcGxlRmlsbFN5bWJvbCwgU2ltcGxlTGluZVN5bWJvbCwgVGV4dFN5bWJvbCB9IGZyb20gJ0BhcmNnaXMvY29yZS9zeW1ib2xzJztcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdra2wtd29ya1VuaXQnLFxuICB0ZW1wbGF0ZTogYGFhYWFcbiAgICA8ZGl2ICNtYXBWaWV3Tm9kZSBzdHlsZT1cIndpZHRoOjQwMHB4O2hlaWdodDogNDAwcHg7YmFja2dyb3VuZC1jb2xvcjp5ZWxsb3dcIj48L2Rpdj5cbiAgenp6emAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdtYXBWaWV3Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cbiAgfVxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgX3dvcmtVbml0czogc3RyaW5nW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgd29ya1VuaXRzKHdvcmtVbml0czogc3RyaW5nW10pIHtcbiAgICB0aGlzLl93b3JrVW5pdHMgPSB3b3JrVW5pdHM7XG5cbiAgICAvL2NvbnN0IFdvcmtVbml0c1doZXJlID0gd29ya1VuaXRzLm1hcCh3b3JrVW5pdCA9PiBcIidcIiArIHdvcmtVbml0ICsgXCInXCIpLmpvaW4oKTtcbiAgICAvLy8vV29ya1VuaXRzV2hlcmVcbiAgICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIkdsb2JhbElEIGluIChcIiArIFdvcmtVbml0c1doZXJlICsgXCIpXCI7XG4gICAgLy90aGlzLmZlYXRlckxheWVyLndoZW4oXG4gICAgLy8gICgpID0+IHtcbiAgICAvLyAgICBjb25zdCBxdWVyeSA9IHRoaXMuZmVhdGVyTGF5ZXIuY3JlYXRlUXVlcnkoKTtcbiAgICAvLyAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XG4gICAgLy8gICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUZlYXR1cmVzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICByZXNwb25zZS5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgIC8vICAgICAgICBjb25zdCBheHp6ID0gXCJEZmdkXCI7XG4gICAgLy8gICAgICB9KTtcbiAgICAvLyAgICB9KTtcbiAgICAvLyAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KVxuICAgIC8vICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UuZXh0ZW50ICE9PSBudWxsKSB0aGlzLm1hcFZpZXcuZ29UbyhyZXNwb25zZS5leHRlbnQpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XG4gICAgLy8gICAgICB9KTtcblxuICAgIC8vICB9KTtcbiAgfVxuICBnZXQgd29ya1VuaXRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya1VuaXRzO1xuICB9XG5cbiAgLy9wdWJsaWMgZmVhdGVyTGF5ZXI6IEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoKTtcbiAgLy9wdWJsaWMgbWFwVmlldyA9IG5ldyBNYXBWaWV3KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplTWFwKCkge1xuICAgIC8vY29uc3Qgd2ViTWFwID0gbmV3IFdlYk1hcCh7XG4gICAgLy8gIGJhc2VtYXA6IFwidG9wb1wiLFxuICAgIC8vICAvL3BvcnRhbEl0ZW06IHtcbiAgICAvLyAgLy8gIC8vdXJsOlwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0pORklMRm9yZXN0L0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiXG4gICAgLy8gIC8vICBpZDogXCJzdHJlZXRzXCJcbiAgICAvLyAgLy99XG4gICAgLy99KTtcbiAgICAvL2xldCBiYXNlbWFwID0gbmV3IEJhc2VtYXAoe1xuICAgIC8vICBwb3J0YWxJdGVtOiB7XG4gICAgLy8gICAgLy91cmw6XCJcIlxuICAgIC8vICAgIGlkOiBcInN0cmVldHNcIiAgLy8gV0dTODQgU3RyZWV0cyBWZWN0b3Igd2VibWFwXG4gICAgLy8gIH1cbiAgICAvL30pO1xuXG4gICAgLy90cnkge1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogXCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvVGVzdF9LS0xGb3Jlc3RNYW5hZ2VtZW50VW5pdHMvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCIgfSk7XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5kaXNwbGF5RmllbGQgPSBcIkZPUl9OT1wiO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIubGFiZWxzVmlzaWJsZSA9IHRydWU7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLm91dEZpZWxkcyA9IFtcIkZPUl9OT1wiXTtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLnBvcHVwRW5hYmxlZCA9IHRydWU7XG4gICAgLy8gIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgLy8gIGZlYXRlclJlbmRlcmVyLmxhYmVsID0gXCJ7Rk9SX05PfVwiO1xuICAgIC8vICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xuICAgIC8vICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiZ29sZFwiKTtcbiAgICAvLyAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiYmx1ZVwiKTtcbiAgICAvLyAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xuICAgIC8vICBmZWF0ZXJSZW5kZXJlci5zeW1ib2wgPSBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2w7XG4gICAgLy8gIGNvbnN0IGxhYmVsQ2xhc3MgPSBuZXcgTGFiZWxDbGFzcygpO1xuICAgIC8vICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUuRk9SX05PICBcIiB9O1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLmxhYmVsaW5nSW5mbyA9IFtsYWJlbENsYXNzXTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xuICAgIC8vICB3ZWJNYXAuYWRkKHRoaXMuZmVhdGVyTGF5ZXIpO1xuXG5cbiAgICAvLyAgdGhpcy5tYXBWaWV3LmNvbnRhaW5lciA9IHRoaXMubWFwVmlld0VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XG5cblxuICAgIC8vICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XG4gICAgLy8gIC8vbWFwVmlldy53aGVuKCgpID0+IHtcbiAgICAvLyAgLy8gIHRoaXMubWFwTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgLy8gIC8vfSk7XG4gICAgLy99IGNhdGNoIChlcnJvcikge1xuICAgIC8vICBhbGVydCgnV2UgaGF2ZSBhbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICAvL31cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplTWFwKCk7XG4gIH1cblxufVxuIl19