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
WorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "YaaranutGis-workUnit", inputs: { zz: "zz", workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `
  <div #mapViewNode style="width:100%;height: 100%;background-color:white"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'YaaranutGis-workUnit',
                    template: `
  <div #mapViewNode style="width:100%;height: 100%;background-color:white"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.YaaranutService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], zz: [{
                type: Input
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL0xpYnJhcnlzL3NyYy9saWIvd29yay11bml0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOzs7QUFXbkUsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixZQUFvQixFQUFtQjtRQUFuQixPQUFFLEdBQUYsRUFBRSxDQUFpQjtRQUw3QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBQyxJQUFJLENBQUM7UUFPZixPQUFFLEdBQVMsR0FBRyxDQUFDO1FBdURoQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBMUQvQixDQUFDO0lBWEQsSUFBZ0QsT0FBTyxDQUFDLE9BQW1CO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBWUQsSUFDSSxFQUFF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QyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBRzFCLG1HQUFtRztnQkFDbkcsc0JBQXNCO2dCQUN0Qiw4QkFBOEI7Z0JBQzlCLEtBQUs7YUFDTDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUVILENBQUM7S0FBQTtJQUVELFFBQVE7SUFHUixDQUFDOzs4R0FySVUsaUJBQWlCO2tHQUFqQixpQkFBaUIscVFBTmxCOztHQUVUOzJGQUlVLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7c0dBR2lELE9BQU87c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHaEMsU0FBUztzQkFBbEIsTUFBTTtnQkFZSCxFQUFFO3NCQURMLEtBQUs7Z0JBV0YsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XHJcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xyXG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcclxuaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XHJcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XHJcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xyXG5pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XHJcbmltcG9ydCB7IFlhYXJhbnV0U2VydmljZSB9IGZyb20gJy4uL3lhYXJhbnV0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdZYWFyYW51dEdpcy13b3JrVW5pdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICNtYXBWaWV3Tm9kZSBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OiAxMDAlO2JhY2tncm91bmQtY29sb3I6d2hpdGVcIj48L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdvcmtVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbWFwVmlld05vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY29udGVudChjb250ZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQE91dHB1dCgpIG1hcExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBfd29ya1VuaXRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgZmlyc3RUaW1lPXRydWU7IFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHlzOiBZYWFyYW51dFNlcnZpY2UpIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfejogc3RyaW5nPVwielwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHp6KHp6ejogc3RyaW5nKVxyXG4gIHtcclxuICAgIHRoaXMuX3o9enp6O1xyXG4gIH1cclxuICBnZXQgenooKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLl96O1xyXG4gIH1cclxuICBcclxuICBASW5wdXQoKVxyXG4gIHNldCB3b3JrVW5pdHMod29ya1VuaXRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5fd29ya1VuaXRzID0gd29ya1VuaXRzO1xyXG5cclxuICAgIGlmICh0aGlzLmZpcnN0VGltZSkgXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuZmlyc3RUaW1lPWZhbHNlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFdvcmtVbml0c1doZXJlID0gd29ya1VuaXRzLm1hcChcclxuICAgICAgd29ya1VuaXQgPT4gXHJcbiAgICAgIFwiJ1wiICsgd29ya1VuaXQgKyBcIidcIlxyXG4gICAgICApLlxyXG4gICAgICBqb2luKCk7ICAgIFxyXG4gICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSUQgaW4gKFwiICsgV29ya1VuaXRzV2hlcmUgKyBcIilcIjtcclxuICAgIFxyXG4gICAgdGhpcy5mZWF0ZXJMYXllci53aGVuKFxyXG4gICAgICgpID0+IHtcclxuICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xyXG4gICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG4gICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUZlYXR1cmVzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgYXh6eiA9IFwiRGZnZFwiO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUV4dGVudChxdWVyeSlcclxuICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2U9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmdvVG8ocmVzcG9uc2UuZXh0ZW50KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBjb25zdCBFc3JpUHdvZXJCeWVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVzcmktdWkgY2FsY2l0ZS10aGVtZS1saWdodFwiKTtcclxuICAgICAgICAgICAvL0VzcmlQd29lckJ5ZWxlbWVudHNbMF0uc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImRpc3BsYXk6bm9uZVwiKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRXNyaVB3b2VyQnllbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgRXNyaVB3b2VyQnllbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgfSk7XHJcbiAgfVxyXG4gIGdldCB3b3JrVW5pdHMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dvcmtVbml0cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xyXG4gIHB1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcclxuICBcclxuICAgXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZU1hcCgpIHtcclxuICAgIGNvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xyXG4gICAgIGJhc2VtYXA6IFwidG9wb1wiLFxyXG4gICAgIC8vcG9ydGFsSXRlbToge1xyXG4gICAgIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxyXG4gICAgIC8vICBpZDogXCJzdHJlZXRzXCJcclxuICAgICAvL31cclxuICAgIH0pO1xyXG4gICAgbGV0IGJhc2VtYXAgPSBuZXcgQmFzZW1hcCh7XHJcbiAgICAgcG9ydGFsSXRlbToge1xyXG4gICAgICAgLy91cmw6XCJcIlxyXG4gICAgICAgaWQ6IFwic3RyZWV0c1wiICAvLyBXR1M4NCBTdHJlZXRzIFZlY3RvciB3ZWJtYXBcclxuICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgIC8vIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Mjc1NTIvdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIiB9KTtcclxuICAgICAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnlzLmFwaVVybCArIFwiL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzBcIiAgICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xyXG4gICAgIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MlwiO1xyXG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kaXNwbGF5RmllbGQgPSBcIkZPUl9OT1wiO1xyXG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGVnZW5kRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgLy90aGlzLmZlYXRlckxheWVyLm91dEZpZWxkcyA9IFtcIkZPUl9OT1wiXTtcclxuICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcclxuICAgICBjb25zdCBmZWF0ZXJSZW5kZXJlciA9IG5ldyBTaW1wbGVSZW5kZXJlcigpO1xyXG4gICAgICAgIGZlYXRlclJlbmRlcmVyLmxhYmVsID0gXCJ7dHJ0VW5pdH1cIjtcclxuICAgICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xyXG4gICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJncmVlblwiKTtcclxuICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xyXG4gICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLndpZHRoID0gMjtcclxuICAgICBmZWF0ZXJSZW5kZXJlci5zeW1ib2wgPSBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2w7XHJcbiAgICAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XHJcbiAgICAgICAgbGFiZWxDbGFzcy5sYWJlbEV4cHJlc3Npb25JbmZvID0geyBleHByZXNzaW9uOiBcIiRmZWF0dXJlLnRydFVuaXQgIFwiIH07XHJcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XHJcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xyXG4gICAgIHdlYk1hcC5hZGQodGhpcy5mZWF0ZXJMYXllcik7XHJcblxyXG5cclxuICAgICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcclxuICAgICB0aGlzLm1hcFZpZXcubWFwID0gd2ViTWFwO1xyXG5cclxuXHJcbiAgICAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xyXG4gICAgIC8vbWFwVmlldy53aGVuKCgpID0+IHtcclxuICAgICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcclxuICAgICAvL30pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgYWxlcnQoJ1dlIGhhdmUgYW4gZXJyb3I6ICcgKyBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgXHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==