import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import Color from '@arcgis/core/Color';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import * as i0 from "@angular/core";
import * as i1 from "../yaaranut.service";
export class WorkUnitComponent {
    constructor(ys) {
        this.ys = ys;
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
        this.firstTime = true;
        this._z = "z";
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set zz(zzz) {
        this._z = zzz;
    }
    get zz() {
        return this._z;
    }
    set workUnits(workUnits) {
        this._workUnits = workUnits;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const WorkUnitsWhere = workUnits.map(workUnit => "'" + workUnit + "'").
            join();
        this.featerLayer.definitionExpression = "GlobalID in (" + WorkUnitsWhere + ")";
        this.featerLayer.when(() => {
            const query = this.featerLayer.createQuery();
            query.outSpatialReference = this.mapView.spatialReference;
            this.featerLayer.queryFeatures().then(response => {
                response.features.forEach(feature => {
                    const axzz = "Dfgd";
                });
            });
            this.featerLayer.queryExtent(query)
                .then(response => {
                if (response.extent !== null) {
                    response.extent.spatialReference = this.mapView.spatialReference;
                    this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
                }
                const EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                //EsriPwoerByelements[0].setAttribute("style","display:none");           
                for (let i = 0; i < EsriPwoerByelements.length; i++) {
                    EsriPwoerByelements[i].setAttribute("style", "display:none");
                }
            });
        });
    }
    get workUnits() {
        return this._workUnits;
    }
    initializeMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const webMap = new WebMap({
                basemap: "topo",
                //portalItem: {
                //  //url:"https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/JNFILForest/FeatureServer/0/query"
                //  id: "streets"
                //}
            });
            let basemap = new Basemap({
                portalItem: {
                    //url:""
                    id: "streets" // WGS84 Streets Vector webmap
                }
            });
            try {
                // this.featerLayer = new FeatureLayer({ url: "http://localhost:27552/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_KKLForestManagementUnits/FeatureServer/0/query" });
                this.featerLayer = new FeatureLayer({
                    url: this.ys.apiUrl + "/ArcGIS/rest/services/KKLForestManagementUnits/FeatureServer/0"
                });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=2";
                //this.featerLayer.displayField = "FOR_NO";
                //this.featerLayer.labelsVisible = true;
                //this.featerLayer.legendEnabled = true;
                //this.featerLayer.outFields = ["FOR_NO"];
                //this.featerLayer.popupEnabled = true;
                const featerRenderer = new SimpleRenderer();
                featerRenderer.label = "{trtUnit}";
                const polygonsSimpleFillSymbol = new SimpleFillSymbol();
                polygonsSimpleFillSymbol.color = Color.fromString("green");
                polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
                polygonsSimpleFillSymbol.outline.width = 2;
                featerRenderer.symbol = polygonsSimpleFillSymbol;
                const labelClass = new LabelClass();
                labelClass.labelExpressionInfo = { expression: "$feature.trtUnit  " };
                this.featerLayer.labelingInfo = [labelClass];
                this.featerLayer.renderer = featerRenderer;
                webMap.add(this.featerLayer);
                this.mapView.container = this.mapViewEl.nativeElement;
                this.mapView.map = webMap;
                //(await mapView.whenLayerView(featerLayer)).filter.where = "GlobalID = '" + this._filter[0] + "'";
                //mapView.when(() => {
                //  this.mapLoaded.emit(true);
                //});
            }
            catch (error) {
                console.error(error);
                alert('We have an error: ' + error);
            }
        });
    }
    ngOnInit() {
    }
}
WorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, deps: [{ token: i1.YaaranutService }], target: i0.ɵɵFactoryTarget.Component });
WorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "YaaranutGis-workUnit", inputs: { zz: "zz", workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode1"], descendants: true, static: true }], ngImport: i0, template: `
  <div #mapViewNode1 style="width:100%;height: 100%;background-color:white"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'YaaranutGis-workUnit',
                    template: `
  <div #mapViewNode1 style="width:100%;height: 100%;background-color:white"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.YaaranutService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode1', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], zz: [{
                type: Input
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy9saWIvd29yay11bml0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOzs7QUFXbkUsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixZQUFvQixFQUFtQjtRQUFuQixPQUFFLEdBQUYsRUFBRSxDQUFpQjtRQUw3QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBQyxJQUFJLENBQUM7UUFPZixPQUFFLEdBQVMsR0FBRyxDQUFDO1FBdURoQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBMUQvQixDQUFDO0lBWEQsSUFBaUQsT0FBTyxDQUFDLE9BQW1CO1FBQzFFLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBWUQsSUFDSSxFQUFF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QyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBRzFCLG1HQUFtRztnQkFDbkcsc0JBQXNCO2dCQUN0Qiw4QkFBOEI7Z0JBQzlCLEtBQUs7YUFDTDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUVILENBQUM7S0FBQTtJQUVELFFBQVE7SUFHUixDQUFDOzs4R0FySVUsaUJBQWlCO2tHQUFqQixpQkFBaUIsc1FBTmxCOztHQUVUOzJGQUlVLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7c0dBR2tELE9BQU87c0JBQXZELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHakMsU0FBUztzQkFBbEIsTUFBTTtnQkFZSCxFQUFFO3NCQURMLEtBQUs7Z0JBV0YsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XHJcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xyXG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcclxuaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XHJcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XHJcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xyXG5pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XHJcbmltcG9ydCB7IFlhYXJhbnV0U2VydmljZSB9IGZyb20gJy4uL3lhYXJhbnV0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdZYWFyYW51dEdpcy13b3JrVW5pdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICNtYXBWaWV3Tm9kZTEgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlXCI+PC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3JrVW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdOb2RlMScsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIGlmIChjb250ZW50KSB7IHRoaXMubWFwVmlld0VsID0gY29udGVudDsgfVxyXG4gIH1cclxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgbWFwVmlld0VsITogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF93b3JrVW5pdHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBmaXJzdFRpbWU9dHJ1ZTsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgeXM6IFlhYXJhbnV0U2VydmljZSkge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF96OiBzdHJpbmc9XCJ6XCI7XHJcbiAgQElucHV0KClcclxuICBzZXQgenooenp6OiBzdHJpbmcpXHJcbiAge1xyXG4gICAgdGhpcy5fej16eno7XHJcbiAgfVxyXG4gIGdldCB6eigpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgfVxyXG4gIFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHdvcmtVbml0cyh3b3JrVW5pdHM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLl93b3JrVW5pdHMgPSB3b3JrVW5pdHM7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlyc3RUaW1lKSBcclxuICAgIHtcclxuICAgICAgdGhpcy5maXJzdFRpbWU9ZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgV29ya1VuaXRzV2hlcmUgPSB3b3JrVW5pdHMubWFwKFxyXG4gICAgICB3b3JrVW5pdCA9PiBcclxuICAgICAgXCInXCIgKyB3b3JrVW5pdCArIFwiJ1wiXHJcbiAgICAgICkuXHJcbiAgICAgIGpvaW4oKTsgICAgXHJcbiAgICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCJHbG9iYWxJRCBpbiAoXCIgKyBXb3JrVW5pdHNXaGVyZSArIFwiKVwiO1xyXG4gICAgXHJcbiAgICB0aGlzLmZlYXRlckxheWVyLndoZW4oXHJcbiAgICAgKCkgPT4ge1xyXG4gICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XHJcbiAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcbiAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcclxuICAgICAgICAgICBjb25zdCBheHp6ID0gXCJEZmdkXCI7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgfSk7XHJcbiAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KVxyXG4gICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5leHRlbnQuc3BhdGlhbFJlZmVyZW5jZT0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XHJcbiAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuZ29UbyhyZXNwb25zZS5leHRlbnQpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGNvbnN0IEVzcmlQd29lckJ5ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXNyaS11aSBjYWxjaXRlLXRoZW1lLWxpZ2h0XCIpO1xyXG4gICAgICAgICAgIC8vRXNyaVB3b2VyQnllbGVtZW50c1swXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZGlzcGxheTpub25lXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFc3JpUHdvZXJCeWVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICBFc3JpUHdvZXJCeWVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICB9KTtcclxuICB9XHJcbiAgZ2V0IHdvcmtVbml0cygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd29ya1VuaXRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZlYXRlckxheWVyOiBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKCk7XHJcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xyXG4gIFxyXG4gICBcclxuICBhc3luYyBpbml0aWFsaXplTWFwKCkge1xyXG4gICAgY29uc3Qgd2ViTWFwID0gbmV3IFdlYk1hcCh7XHJcbiAgICAgYmFzZW1hcDogXCJ0b3BvXCIsXHJcbiAgICAgLy9wb3J0YWxJdGVtOiB7XHJcbiAgICAgLy8gIC8vdXJsOlwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0pORklMRm9yZXN0L0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiXHJcbiAgICAgLy8gIGlkOiBcInN0cmVldHNcIlxyXG4gICAgIC8vfVxyXG4gICAgfSk7XHJcbiAgICBsZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcclxuICAgICBwb3J0YWxJdGVtOiB7XHJcbiAgICAgICAvL3VybDpcIlwiXHJcbiAgICAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxyXG4gICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgLy8gdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyNzU1Mi91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1Rlc3RfS0tMRm9yZXN0TWFuYWdlbWVudFVuaXRzL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiIH0pO1xyXG4gICAgICB0aGlzLmZlYXRlckxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICB1cmw6IHRoaXMueXMuYXBpVXJsICsgXCIvQXJjR0lTL3Jlc3Qvc2VydmljZXMvS0tMRm9yZXN0TWFuYWdlbWVudFVuaXRzL0ZlYXR1cmVTZXJ2ZXIvMFwiICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICB0aGlzLmZlYXRlckxheWVyLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XHJcbiAgICAgLy90aGlzLmZlYXRlckxheWVyLmRpc3BsYXlGaWVsZCA9IFwiRk9SX05PXCI7XHJcbiAgICAgLy90aGlzLmZlYXRlckxheWVyLmxhYmVsc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcclxuICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIub3V0RmllbGRzID0gW1wiRk9SX05PXCJdO1xyXG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5wb3B1cEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgZmVhdGVyUmVuZGVyZXIubGFiZWwgPSBcInt0cnRVbml0fVwiO1xyXG4gICAgIGNvbnN0IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKCk7XHJcbiAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdyZWVuXCIpO1xyXG4gICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImJsdWVcIik7XHJcbiAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xyXG4gICAgIGZlYXRlclJlbmRlcmVyLnN5bWJvbCA9IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbDtcclxuICAgICBjb25zdCBsYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3MoKTtcclxuICAgICAgICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUudHJ0VW5pdCAgXCIgfTtcclxuICAgICB0aGlzLmZlYXRlckxheWVyLmxhYmVsaW5nSW5mbyA9IFtsYWJlbENsYXNzXTtcclxuICAgICB0aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XHJcbiAgICAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcclxuXHJcblxyXG4gICAgIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XHJcblxyXG5cclxuICAgICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XHJcbiAgICAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xyXG4gICAgIC8vICB0aGlzLm1hcExvYWRlZC5lbWl0KHRydWUpO1xyXG4gICAgIC8vfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICBhbGVydCgnV2UgaGF2ZSBhbiBlcnJvcjogJyArIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19