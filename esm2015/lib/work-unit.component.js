import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as i0 from "@angular/core";
export class WorkUnitComponent {
    constructor() {
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RHLE9BQU8sT0FBTyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pELE9BQU8sWUFBWSxNQUFNLGtDQUFrQyxDQUFDOztBQWU1RCxNQUFNLE9BQU8saUJBQWlCO0lBc0M1QjtRQWpDVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBNkIzQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRy9CLENBQUM7SUF0Q0QsSUFBZ0QsT0FBTyxDQUFDLE9BQW1CO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBS0QsSUFDSSxTQUFTLENBQUMsU0FBbUI7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFNUIsZ0ZBQWdGO1FBQ2hGLGtCQUFrQjtRQUNsQixpRkFBaUY7UUFDakYsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxtREFBbUQ7UUFDbkQsZ0VBQWdFO1FBQ2hFLHlEQUF5RDtRQUN6RCw4Q0FBOEM7UUFDOUMsOEJBQThCO1FBQzlCLFdBQVc7UUFDWCxTQUFTO1FBQ1QseUNBQXlDO1FBQ3pDLDJCQUEyQjtRQUMzQiw2SEFBNkg7UUFDN0gsV0FBVztRQUVYLE9BQU87SUFDVCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFRSyxhQUFhOztZQUNqQiw2QkFBNkI7WUFDN0Isb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixvSEFBb0g7WUFDcEgscUJBQXFCO1lBQ3JCLE9BQU87WUFDUCxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsbURBQW1EO1lBQ25ELEtBQUs7WUFDTCxLQUFLO1lBRUwsT0FBTztZQUNQLDJLQUEySztZQUMzSyxtQ0FBbUM7WUFDbkMsa0RBQWtEO1lBQ2xELCtDQUErQztZQUMvQyw0Q0FBNEM7WUFDNUMsNENBQTRDO1lBQzVDLDhDQUE4QztZQUM5QywyQ0FBMkM7WUFDM0MsZ0RBQWdEO1lBQ2hELHNDQUFzQztZQUN0Qyw0REFBNEQ7WUFDNUQsOERBQThEO1lBQzlELHNFQUFzRTtZQUN0RSwrQ0FBK0M7WUFDL0MscURBQXFEO1lBQ3JELHdDQUF3QztZQUN4Qyx5RUFBeUU7WUFDekUsaURBQWlEO1lBQ2pELCtDQUErQztZQUMvQyxpQ0FBaUM7WUFHakMsMERBQTBEO1lBQzFELDhCQUE4QjtZQUc5Qix1R0FBdUc7WUFDdkcsMEJBQTBCO1lBQzFCLGtDQUFrQztZQUNsQyxTQUFTO1lBQ1QsbUJBQW1CO1lBQ25CLHdDQUF3QztZQUN4QyxHQUFHO1FBRUwsQ0FBQztLQUFBO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs4R0FoR1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsbVBBTmxCOztPQUVMOzJGQUlNLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOztPQUVMO29CQUNMLE1BQU0sRUFBRSxFQUNQO2lCQUNGOzBFQUdpRCxPQUFPO3NCQUF0RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBR2hDLFNBQVM7c0JBQWxCLE1BQU07Z0JBS0gsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9XZWJNYXBcIjtcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBCYXNlbWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvQmFzZW1hcFwiO1xuaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG5pbXBvcnQgeyBTaW1wbGVGaWxsU3ltYm9sLCBTaW1wbGVMaW5lU3ltYm9sLCBUZXh0U3ltYm9sIH0gZnJvbSAnQGFyY2dpcy9jb3JlL3N5bWJvbHMnO1xuaW1wb3J0IENvbG9yIGZyb20gJ0BhcmNnaXMvY29yZS9Db2xvcic7XG5pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2trbC13b3JrVW5pdCcsXG4gIHRlbXBsYXRlOiBgYWFhYVxuICAgIDxkaXYgI21hcFZpZXdOb2RlIHN0eWxlPVwid2lkdGg6NDAwcHg7aGVpZ2h0OiA0MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvd1wiPjwvZGl2PlxuICB6enp6YCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV29ya1VuaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdOb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgc2V0IGNvbnRlbnQoY29udGVudDogRWxlbWVudFJlZikge1xuICAgIGlmIChjb250ZW50KSB7IHRoaXMubWFwVmlld0VsID0gY29udGVudDsgfVxuICB9XG4gIEBPdXRwdXQoKSBtYXBMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgbWFwVmlld0VsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfd29ya1VuaXRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3b3JrVW5pdHMod29ya1VuaXRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dvcmtVbml0cyA9IHdvcmtVbml0cztcblxuICAgIC8vY29uc3QgV29ya1VuaXRzV2hlcmUgPSB3b3JrVW5pdHMubWFwKHdvcmtVbml0ID0+IFwiJ1wiICsgd29ya1VuaXQgKyBcIidcIikuam9pbigpO1xuICAgIC8vLy9Xb3JrVW5pdHNXaGVyZVxuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSUQgaW4gKFwiICsgV29ya1VuaXRzV2hlcmUgKyBcIilcIjtcbiAgICAvL3RoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAvLyAgKCkgPT4ge1xuICAgIC8vICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgIC8vICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAvLyAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgLy8gICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAvLyAgICAgIH0pO1xuICAgIC8vICAgIH0pO1xuICAgIC8vICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgLy8gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAvLyAgICAgIH0pO1xuXG4gICAgLy8gIH0pO1xuICB9XG4gIGdldCB3b3JrVW5pdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93b3JrVW5pdHM7XG4gIH1cblxuICBwdWJsaWMgZmVhdGVyTGF5ZXI6IEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoKTtcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZU1hcCgpIHtcbiAgICAvL2NvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xuICAgIC8vICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAvLyAgLy9wb3J0YWxJdGVtOiB7XG4gICAgLy8gIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxuICAgIC8vICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgLy8gIC8vfVxuICAgIC8vfSk7XG4gICAgLy9sZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcbiAgICAvLyAgcG9ydGFsSXRlbToge1xuICAgIC8vICAgIC8vdXJsOlwiXCJcbiAgICAvLyAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgIC8vICB9XG4gICAgLy99KTtcblxuICAgIC8vdHJ5IHtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IFwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1Rlc3RfS0tMRm9yZXN0TWFuYWdlbWVudFVuaXRzL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiIH0pO1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MlwiO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmxhYmVsc1Zpc2libGUgPSB0cnVlO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIubGVnZW5kRW5hYmxlZCA9IHRydWU7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5wb3B1cEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vICBjb25zdCBmZWF0ZXJSZW5kZXJlciA9IG5ldyBTaW1wbGVSZW5kZXJlcigpO1xuICAgIC8vICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie0ZPUl9OT31cIjtcbiAgICAvLyAgY29uc3QgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woKTtcbiAgICAvLyAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdvbGRcIik7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImJsdWVcIik7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLndpZHRoID0gMjtcbiAgICAvLyAgZmVhdGVyUmVuZGVyZXIuc3ltYm9sID0gcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sO1xuICAgIC8vICBjb25zdCBsYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3MoKTtcbiAgICAvLyAgbGFiZWxDbGFzcy5sYWJlbEV4cHJlc3Npb25JbmZvID0geyBleHByZXNzaW9uOiBcIiRmZWF0dXJlLkZPUl9OTyAgXCIgfTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIucmVuZGVyZXIgPSBmZWF0ZXJSZW5kZXJlcjtcbiAgICAvLyAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcblxuXG4gICAgLy8gIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xuICAgIC8vICB0aGlzLm1hcFZpZXcubWFwID0gd2ViTWFwO1xuXG5cbiAgICAvLyAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xuICAgIC8vICAvL21hcFZpZXcud2hlbigoKSA9PiB7XG4gICAgLy8gIC8vICB0aGlzLm1hcExvYWRlZC5lbWl0KHRydWUpO1xuICAgIC8vICAvL30pO1xuICAgIC8vfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgYWxlcnQoJ1dlIGhhdmUgYW4gZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgLy99XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xuICB9XG5cbn1cbiJdfQ==