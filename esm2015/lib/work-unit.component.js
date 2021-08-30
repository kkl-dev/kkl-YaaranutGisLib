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
WorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "workUnit", inputs: { workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `aaaa
    <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
  zzzz`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'workUnit',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RywyQ0FBMkM7QUFDM0MsbURBQW1EO0FBQ25ELDhEQUE4RDtBQUM5RCw2Q0FBNkM7QUFDN0Msa0VBQWtFO0FBQ2xFLHdGQUF3RjtBQUN4Rix5Q0FBeUM7QUFDekMscUVBQXFFO0FBVXJFLE1BQU0sT0FBTyxpQkFBaUI7SUFvQzVCLHdEQUF3RDtJQUN4RCxpQ0FBaUM7SUFDakM7UUFqQ1UsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUMsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQWlDbEMsQ0FBQztJQXRDRCxJQUFnRCxPQUFPLENBQUMsT0FBbUI7UUFDekUsSUFBSSxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQzVDLENBQUM7SUFLRCxJQUNJLFNBQVMsQ0FBQyxTQUFtQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUU1QixnRkFBZ0Y7UUFDaEYsa0JBQWtCO1FBQ2xCLGlGQUFpRjtRQUNqRix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLG1EQUFtRDtRQUNuRCxnRUFBZ0U7UUFDaEUseURBQXlEO1FBQ3pELDhDQUE4QztRQUM5Qyw4QkFBOEI7UUFDOUIsV0FBVztRQUNYLFNBQVM7UUFDVCx5Q0FBeUM7UUFDekMsMkJBQTJCO1FBQzNCLDZIQUE2SDtRQUM3SCxXQUFXO1FBRVgsT0FBTztJQUNULENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQVFLLGFBQWE7O1lBQ2pCLDZCQUE2QjtZQUM3QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG9IQUFvSDtZQUNwSCxxQkFBcUI7WUFDckIsT0FBTztZQUNQLEtBQUs7WUFDTCw2QkFBNkI7WUFDN0IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxtREFBbUQ7WUFDbkQsS0FBSztZQUNMLEtBQUs7WUFFTCxPQUFPO1lBQ1AsMktBQTJLO1lBQzNLLG1DQUFtQztZQUNuQyxrREFBa0Q7WUFDbEQsK0NBQStDO1lBQy9DLDRDQUE0QztZQUM1Qyw0Q0FBNEM7WUFDNUMsOENBQThDO1lBQzlDLDJDQUEyQztZQUMzQyxnREFBZ0Q7WUFDaEQsc0NBQXNDO1lBQ3RDLDREQUE0RDtZQUM1RCw4REFBOEQ7WUFDOUQsc0VBQXNFO1lBQ3RFLCtDQUErQztZQUMvQyxxREFBcUQ7WUFDckQsd0NBQXdDO1lBQ3hDLHlFQUF5RTtZQUN6RSxpREFBaUQ7WUFDakQsK0NBQStDO1lBQy9DLGlDQUFpQztZQUdqQywwREFBMEQ7WUFDMUQsOEJBQThCO1lBRzlCLHVHQUF1RztZQUN2RywwQkFBMEI7WUFDMUIsa0NBQWtDO1lBQ2xDLFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsd0NBQXdDO1lBQ3hDLEdBQUc7UUFFTCxDQUFDO0tBQUE7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OzhHQWhHVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwrT0FObEI7O09BRUw7MkZBSU0saUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7O09BRUw7b0JBQ0wsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7MEVBR2lELE9BQU87c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHaEMsU0FBUztzQkFBbEIsTUFBTTtnQkFLSCxTQUFTO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy9pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG4vL2ltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuLy9pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuLy9pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbi8vaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG4vL2ltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG4vL2ltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuLy9pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dvcmtVbml0JyxcbiAgdGVtcGxhdGU6IGBhYWFhXG4gICAgPGRpdiAjbWFwVmlld05vZGUgc3R5bGU9XCJ3aWR0aDo0MDBweDtoZWlnaHQ6IDQwMHB4O2JhY2tncm91bmQtY29sb3I6eWVsbG93XCI+PC9kaXY+XG4gIHp6enpgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JrVW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnbWFwVmlld05vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY29udGVudChjb250ZW50OiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGNvbnRlbnQpIHsgdGhpcy5tYXBWaWV3RWwgPSBjb250ZW50OyB9XG4gIH1cbiAgQE91dHB1dCgpIG1hcExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBtYXBWaWV3RWwhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF93b3JrVW5pdHM6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IHdvcmtVbml0cyh3b3JrVW5pdHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd29ya1VuaXRzID0gd29ya1VuaXRzO1xuXG4gICAgLy9jb25zdCBXb3JrVW5pdHNXaGVyZSA9IHdvcmtVbml0cy5tYXAod29ya1VuaXQgPT4gXCInXCIgKyB3b3JrVW5pdCArIFwiJ1wiKS5qb2luKCk7XG4gICAgLy8vL1dvcmtVbml0c1doZXJlXG4gICAgLy90aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCJHbG9iYWxJRCBpbiAoXCIgKyBXb3JrVW5pdHNXaGVyZSArIFwiKVwiO1xuICAgIC8vdGhpcy5mZWF0ZXJMYXllci53aGVuKFxuICAgIC8vICAoKSA9PiB7XG4gICAgLy8gICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgLy8gICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgIC8vICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlGZWF0dXJlcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAvLyAgICAgICAgY29uc3QgYXh6eiA9IFwiRGZnZFwiO1xuICAgIC8vICAgICAgfSk7XG4gICAgLy8gICAgfSk7XG4gICAgLy8gICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUV4dGVudChxdWVyeSlcbiAgICAvLyAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkgdGhpcy5tYXBWaWV3LmdvVG8ocmVzcG9uc2UuZXh0ZW50KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xuICAgIC8vICAgICAgfSk7XG5cbiAgICAvLyAgfSk7XG4gIH1cbiAgZ2V0IHdvcmtVbml0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtVbml0cztcbiAgfVxuXG4gIC8vcHVibGljIGZlYXRlckxheWVyOiBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKCk7XG4gIC8vcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZU1hcCgpIHtcbiAgICAvL2NvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xuICAgIC8vICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAvLyAgLy9wb3J0YWxJdGVtOiB7XG4gICAgLy8gIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxuICAgIC8vICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgLy8gIC8vfVxuICAgIC8vfSk7XG4gICAgLy9sZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcbiAgICAvLyAgcG9ydGFsSXRlbToge1xuICAgIC8vICAgIC8vdXJsOlwiXCJcbiAgICAvLyAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgIC8vICB9XG4gICAgLy99KTtcblxuICAgIC8vdHJ5IHtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IFwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1Rlc3RfS0tMRm9yZXN0TWFuYWdlbWVudFVuaXRzL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiIH0pO1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MlwiO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmxhYmVsc1Zpc2libGUgPSB0cnVlO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIubGVnZW5kRW5hYmxlZCA9IHRydWU7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5wb3B1cEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vICBjb25zdCBmZWF0ZXJSZW5kZXJlciA9IG5ldyBTaW1wbGVSZW5kZXJlcigpO1xuICAgIC8vICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie0ZPUl9OT31cIjtcbiAgICAvLyAgY29uc3QgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woKTtcbiAgICAvLyAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdvbGRcIik7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImJsdWVcIik7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLndpZHRoID0gMjtcbiAgICAvLyAgZmVhdGVyUmVuZGVyZXIuc3ltYm9sID0gcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sO1xuICAgIC8vICBjb25zdCBsYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3MoKTtcbiAgICAvLyAgbGFiZWxDbGFzcy5sYWJlbEV4cHJlc3Npb25JbmZvID0geyBleHByZXNzaW9uOiBcIiRmZWF0dXJlLkZPUl9OTyAgXCIgfTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIucmVuZGVyZXIgPSBmZWF0ZXJSZW5kZXJlcjtcbiAgICAvLyAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcblxuXG4gICAgLy8gIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xuICAgIC8vICB0aGlzLm1hcFZpZXcubWFwID0gd2ViTWFwO1xuXG5cbiAgICAvLyAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xuICAgIC8vICAvL21hcFZpZXcud2hlbigoKSA9PiB7XG4gICAgLy8gIC8vICB0aGlzLm1hcExvYWRlZC5lbWl0KHRydWUpO1xuICAgIC8vICAvL30pO1xuICAgIC8vfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgYWxlcnQoJ1dlIGhhdmUgYW4gZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgLy99XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xuICB9XG5cbn1cbiJdfQ==