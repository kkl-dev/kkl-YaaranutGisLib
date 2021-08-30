import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
//import WebMap from "@arcgis/core/WebMap";
//import MapView from "@arcgis/core/views/MapView";
//import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//import Basemap from "@arcgis/core/Basemap";
//import LabelClass from "@arcgis/core/layers/support/LabelClass";
//import { SimpleFillSymbol, SimpleLineSymbol, TextSymbol } from '@arcgis/core/symbols';
//import Color from '@arcgis/core/Color';
//import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RywyQ0FBMkM7QUFDM0MsbURBQW1EO0FBQ25ELDhEQUE4RDtBQUM5RCw2Q0FBNkM7QUFDN0Msa0VBQWtFO0FBQ2xFLHdGQUF3RjtBQUN4Rix5Q0FBeUM7QUFDekMscUVBQXFFO0FBVXJFLE1BQU0sT0FBTyxpQkFBaUI7SUFvQzVCLHdEQUF3RDtJQUN4RCxpQ0FBaUM7SUFDakM7UUFqQ1UsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUMsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQWlDbEMsQ0FBQztJQXRDRCxJQUFnRCxPQUFPLENBQUMsT0FBbUI7UUFDekUsSUFBSSxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQzVDLENBQUM7SUFLRCxJQUNJLFNBQVMsQ0FBQyxTQUFtQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUU1QixnRkFBZ0Y7UUFDaEYsa0JBQWtCO1FBQ2xCLGlGQUFpRjtRQUNqRix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLG1EQUFtRDtRQUNuRCxnRUFBZ0U7UUFDaEUseURBQXlEO1FBQ3pELDhDQUE4QztRQUM5Qyw4QkFBOEI7UUFDOUIsV0FBVztRQUNYLFNBQVM7UUFDVCx5Q0FBeUM7UUFDekMsMkJBQTJCO1FBQzNCLDZIQUE2SDtRQUM3SCxXQUFXO1FBRVgsT0FBTztJQUNULENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQVFLLGFBQWE7O1lBQ2pCLDZCQUE2QjtZQUM3QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG9IQUFvSDtZQUNwSCxxQkFBcUI7WUFDckIsT0FBTztZQUNQLEtBQUs7WUFDTCw2QkFBNkI7WUFDN0IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxtREFBbUQ7WUFDbkQsS0FBSztZQUNMLEtBQUs7WUFFTCxPQUFPO1lBQ1AsMktBQTJLO1lBQzNLLG1DQUFtQztZQUNuQyxrREFBa0Q7WUFDbEQsK0NBQStDO1lBQy9DLDRDQUE0QztZQUM1Qyw0Q0FBNEM7WUFDNUMsOENBQThDO1lBQzlDLDJDQUEyQztZQUMzQyxnREFBZ0Q7WUFDaEQsc0NBQXNDO1lBQ3RDLDREQUE0RDtZQUM1RCw4REFBOEQ7WUFDOUQsc0VBQXNFO1lBQ3RFLCtDQUErQztZQUMvQyxxREFBcUQ7WUFDckQsd0NBQXdDO1lBQ3hDLHlFQUF5RTtZQUN6RSxpREFBaUQ7WUFDakQsK0NBQStDO1lBQy9DLGlDQUFpQztZQUdqQywwREFBMEQ7WUFDMUQsOEJBQThCO1lBRzlCLHVHQUF1RztZQUN2RywwQkFBMEI7WUFDMUIsa0NBQWtDO1lBQ2xDLFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsd0NBQXdDO1lBQ3hDLEdBQUc7UUFFTCxDQUFDO0tBQUE7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OzhHQWhHVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixtUEFObEI7O09BRUw7MkZBSU0saUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7O09BRUw7b0JBQ0wsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7MEVBR2lELE9BQU87c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHaEMsU0FBUztzQkFBbEIsTUFBTTtnQkFLSCxTQUFTO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy9pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG4vL2ltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuLy9pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuLy9pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbi8vaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG4vL2ltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG4vL2ltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuLy9pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2trbC13b3JrVW5pdCcsXG4gIHRlbXBsYXRlOiBgYWFhYVxuICAgIDxkaXYgI21hcFZpZXdOb2RlIHN0eWxlPVwid2lkdGg6NDAwcHg7aGVpZ2h0OiA0MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvd1wiPjwvZGl2PlxuICB6enp6YCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV29ya1VuaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdOb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgc2V0IGNvbnRlbnQoY29udGVudDogRWxlbWVudFJlZikge1xuICAgIGlmIChjb250ZW50KSB7IHRoaXMubWFwVmlld0VsID0gY29udGVudDsgfVxuICB9XG4gIEBPdXRwdXQoKSBtYXBMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgbWFwVmlld0VsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfd29ya1VuaXRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3b3JrVW5pdHMod29ya1VuaXRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dvcmtVbml0cyA9IHdvcmtVbml0cztcblxuICAgIC8vY29uc3QgV29ya1VuaXRzV2hlcmUgPSB3b3JrVW5pdHMubWFwKHdvcmtVbml0ID0+IFwiJ1wiICsgd29ya1VuaXQgKyBcIidcIikuam9pbigpO1xuICAgIC8vLy9Xb3JrVW5pdHNXaGVyZVxuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSUQgaW4gKFwiICsgV29ya1VuaXRzV2hlcmUgKyBcIilcIjtcbiAgICAvL3RoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAvLyAgKCkgPT4ge1xuICAgIC8vICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgIC8vICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAvLyAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgLy8gICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAvLyAgICAgIH0pO1xuICAgIC8vICAgIH0pO1xuICAgIC8vICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgLy8gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAvLyAgICAgIH0pO1xuXG4gICAgLy8gIH0pO1xuICB9XG4gIGdldCB3b3JrVW5pdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93b3JrVW5pdHM7XG4gIH1cblxuICAvL3B1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xuICAvL3B1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVNYXAoKSB7XG4gICAgLy9jb25zdCB3ZWJNYXAgPSBuZXcgV2ViTWFwKHtcbiAgICAvLyAgYmFzZW1hcDogXCJ0b3BvXCIsXG4gICAgLy8gIC8vcG9ydGFsSXRlbToge1xuICAgIC8vICAvLyAgLy91cmw6XCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSk5GSUxGb3Jlc3QvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCJcbiAgICAvLyAgLy8gIGlkOiBcInN0cmVldHNcIlxuICAgIC8vICAvL31cbiAgICAvL30pO1xuICAgIC8vbGV0IGJhc2VtYXAgPSBuZXcgQmFzZW1hcCh7XG4gICAgLy8gIHBvcnRhbEl0ZW06IHtcbiAgICAvLyAgICAvL3VybDpcIlwiXG4gICAgLy8gICAgaWQ6IFwic3RyZWV0c1wiICAvLyBXR1M4NCBTdHJlZXRzIFZlY3RvciB3ZWJtYXBcbiAgICAvLyAgfVxuICAgIC8vfSk7XG5cbiAgICAvL3RyeSB7XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIiB9KTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCIxPTJcIjtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmRpc3BsYXlGaWVsZCA9IFwiRk9SX05PXCI7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmxlZ2VuZEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIub3V0RmllbGRzID0gW1wiRk9SX05PXCJdO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAvLyAgY29uc3QgZmVhdGVyUmVuZGVyZXIgPSBuZXcgU2ltcGxlUmVuZGVyZXIoKTtcbiAgICAvLyAgZmVhdGVyUmVuZGVyZXIubGFiZWwgPSBcIntGT1JfTk99XCI7XG4gICAgLy8gIGNvbnN0IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKCk7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJnb2xkXCIpO1xuICAgIC8vICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xuICAgIC8vICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS53aWR0aCA9IDI7XG4gICAgLy8gIGZlYXRlclJlbmRlcmVyLnN5bWJvbCA9IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbDtcbiAgICAvLyAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XG4gICAgLy8gIGxhYmVsQ2xhc3MubGFiZWxFeHByZXNzaW9uSW5mbyA9IHsgZXhwcmVzc2lvbjogXCIkZmVhdHVyZS5GT1JfTk8gIFwiIH07XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIubGFiZWxpbmdJbmZvID0gW2xhYmVsQ2xhc3NdO1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XG4gICAgLy8gIHdlYk1hcC5hZGQodGhpcy5mZWF0ZXJMYXllcik7XG5cblxuICAgIC8vICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcbiAgICAvLyAgdGhpcy5tYXBWaWV3Lm1hcCA9IHdlYk1hcDtcblxuXG4gICAgLy8gIC8vKGF3YWl0IG1hcFZpZXcud2hlbkxheWVyVmlldyhmZWF0ZXJMYXllcikpLmZpbHRlci53aGVyZSA9IFwiR2xvYmFsSUQgPSAnXCIgKyB0aGlzLl9maWx0ZXJbMF0gKyBcIidcIjtcbiAgICAvLyAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xuICAgIC8vICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAvLyAgLy99KTtcbiAgICAvL30gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gIGFsZXJ0KCdXZSBoYXZlIGFuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIC8vfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcbiAgfVxuXG59XG4iXX0=