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
        const WorkUnitsWhere = workUnits.map(workUnit => "'" + workUnit + "'").join();
        //WorkUnitsWhere
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
    <div #mapViewNode style="background-color:yellow"></div>
  zzzz`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'kkl-workUnit',
                    template: `aaaa
    <div #mapViewNode style="background-color:yellow"></div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQW1CdEcsTUFBTSxPQUFPLGlCQUFpQjtJQW9DNUIsd0RBQXdEO0lBQ3hELGlDQUFpQztJQUNqQztRQWpDVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO0lBaUNsQyxDQUFDO0lBdENELElBQWdELE9BQU8sQ0FBQyxPQUFtQjtRQUN6RSxJQUFJLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQUU7SUFDNUMsQ0FBQztJQUtELElBQ0ksU0FBUyxDQUFDLFNBQW1CO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRTVCLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlFLGdCQUFnQjtRQUNoQixpRkFBaUY7UUFDakYsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxtREFBbUQ7UUFDbkQsZ0VBQWdFO1FBQ2hFLHlEQUF5RDtRQUN6RCw4Q0FBOEM7UUFDOUMsOEJBQThCO1FBQzlCLFdBQVc7UUFDWCxTQUFTO1FBQ1QseUNBQXlDO1FBQ3pDLDJCQUEyQjtRQUMzQiw2SEFBNkg7UUFDN0gsV0FBVztRQUVYLE9BQU87SUFDVCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFRSyxhQUFhOztZQUNqQiw2QkFBNkI7WUFDN0Isb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixvSEFBb0g7WUFDcEgscUJBQXFCO1lBQ3JCLE9BQU87WUFDUCxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsbURBQW1EO1lBQ25ELEtBQUs7WUFDTCxLQUFLO1lBRUwsT0FBTztZQUNQLDJLQUEySztZQUMzSyxtQ0FBbUM7WUFDbkMsa0RBQWtEO1lBQ2xELCtDQUErQztZQUMvQyw0Q0FBNEM7WUFDNUMsNENBQTRDO1lBQzVDLDhDQUE4QztZQUM5QywyQ0FBMkM7WUFDM0MsZ0RBQWdEO1lBQ2hELHNDQUFzQztZQUN0Qyw0REFBNEQ7WUFDNUQsOERBQThEO1lBQzlELHNFQUFzRTtZQUN0RSwrQ0FBK0M7WUFDL0MscURBQXFEO1lBQ3JELHdDQUF3QztZQUN4Qyx5RUFBeUU7WUFDekUsaURBQWlEO1lBQ2pELCtDQUErQztZQUMvQyxpQ0FBaUM7WUFHakMsMERBQTBEO1lBQzFELDhCQUE4QjtZQUc5Qix1R0FBdUc7WUFDdkcsMEJBQTBCO1lBQzFCLGtDQUFrQztZQUNsQyxTQUFTO1lBQ1QsbUJBQW1CO1lBQ25CLHdDQUF3QztZQUN4QyxHQUFHO1FBRUwsQ0FBQztLQUFBO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs4R0FoR1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsbVBBTmxCOztPQUVMOzJGQUlNLGlCQUFpQjtrQkFSN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOztPQUVMO29CQUNMLE1BQU0sRUFBRSxFQUNQO2lCQUNGOzBFQUdpRCxPQUFPO3NCQUF0RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBR2hDLFNBQVM7c0JBQWxCLE1BQU07Z0JBS0gsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9XZWJNYXBcIjtcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBCYXNlbWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvQmFzZW1hcFwiO1xuaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG5pbXBvcnQgeyBTaW1wbGVGaWxsU3ltYm9sLCBTaW1wbGVMaW5lU3ltYm9sLCBUZXh0U3ltYm9sIH0gZnJvbSAnQGFyY2dpcy9jb3JlL3N5bWJvbHMnO1xuaW1wb3J0IENvbG9yIGZyb20gJ0BhcmNnaXMvY29yZS9Db2xvcic7XG5pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2trbC13b3JrVW5pdCcsXG4gIHRlbXBsYXRlOiBgYWFhYVxuICAgIDxkaXYgI21hcFZpZXdOb2RlIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3dcIj48L2Rpdj5cbiAgenp6emAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdtYXBWaWV3Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cbiAgfVxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgX3dvcmtVbml0czogc3RyaW5nW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgd29ya1VuaXRzKHdvcmtVbml0czogc3RyaW5nW10pIHtcbiAgICB0aGlzLl93b3JrVW5pdHMgPSB3b3JrVW5pdHM7XG5cbiAgICBjb25zdCBXb3JrVW5pdHNXaGVyZSA9IHdvcmtVbml0cy5tYXAod29ya1VuaXQgPT4gXCInXCIgKyB3b3JrVW5pdCArIFwiJ1wiKS5qb2luKCk7XG4gICAgLy9Xb3JrVW5pdHNXaGVyZVxuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSUQgaW4gKFwiICsgV29ya1VuaXRzV2hlcmUgKyBcIilcIjtcbiAgICAvL3RoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAvLyAgKCkgPT4ge1xuICAgIC8vICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgIC8vICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAvLyAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgLy8gICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAvLyAgICAgIH0pO1xuICAgIC8vICAgIH0pO1xuICAgIC8vICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgLy8gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAvLyAgICAgIH0pO1xuXG4gICAgLy8gIH0pO1xuICB9XG4gIGdldCB3b3JrVW5pdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93b3JrVW5pdHM7XG4gIH1cblxuICAvL3B1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xuICAvL3B1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVNYXAoKSB7XG4gICAgLy9jb25zdCB3ZWJNYXAgPSBuZXcgV2ViTWFwKHtcbiAgICAvLyAgYmFzZW1hcDogXCJ0b3BvXCIsXG4gICAgLy8gIC8vcG9ydGFsSXRlbToge1xuICAgIC8vICAvLyAgLy91cmw6XCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSk5GSUxGb3Jlc3QvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCJcbiAgICAvLyAgLy8gIGlkOiBcInN0cmVldHNcIlxuICAgIC8vICAvL31cbiAgICAvL30pO1xuICAgIC8vbGV0IGJhc2VtYXAgPSBuZXcgQmFzZW1hcCh7XG4gICAgLy8gIHBvcnRhbEl0ZW06IHtcbiAgICAvLyAgICAvL3VybDpcIlwiXG4gICAgLy8gICAgaWQ6IFwic3RyZWV0c1wiICAvLyBXR1M4NCBTdHJlZXRzIFZlY3RvciB3ZWJtYXBcbiAgICAvLyAgfVxuICAgIC8vfSk7XG5cbiAgICAvL3RyeSB7XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIiB9KTtcbiAgICAvLyAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCIxPTJcIjtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmRpc3BsYXlGaWVsZCA9IFwiRk9SX05PXCI7XG4gICAgLy8gIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAvLyAgLy90aGlzLmZlYXRlckxheWVyLmxlZ2VuZEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIub3V0RmllbGRzID0gW1wiRk9SX05PXCJdO1xuICAgIC8vICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAvLyAgY29uc3QgZmVhdGVyUmVuZGVyZXIgPSBuZXcgU2ltcGxlUmVuZGVyZXIoKTtcbiAgICAvLyAgZmVhdGVyUmVuZGVyZXIubGFiZWwgPSBcIntGT1JfTk99XCI7XG4gICAgLy8gIGNvbnN0IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKCk7XG4gICAgLy8gIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJnb2xkXCIpO1xuICAgIC8vICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xuICAgIC8vICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS53aWR0aCA9IDI7XG4gICAgLy8gIGZlYXRlclJlbmRlcmVyLnN5bWJvbCA9IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbDtcbiAgICAvLyAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XG4gICAgLy8gIGxhYmVsQ2xhc3MubGFiZWxFeHByZXNzaW9uSW5mbyA9IHsgZXhwcmVzc2lvbjogXCIkZmVhdHVyZS5GT1JfTk8gIFwiIH07XG4gICAgLy8gIHRoaXMuZmVhdGVyTGF5ZXIubGFiZWxpbmdJbmZvID0gW2xhYmVsQ2xhc3NdO1xuICAgIC8vICB0aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XG4gICAgLy8gIHdlYk1hcC5hZGQodGhpcy5mZWF0ZXJMYXllcik7XG5cblxuICAgIC8vICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcbiAgICAvLyAgdGhpcy5tYXBWaWV3Lm1hcCA9IHdlYk1hcDtcblxuXG4gICAgLy8gIC8vKGF3YWl0IG1hcFZpZXcud2hlbkxheWVyVmlldyhmZWF0ZXJMYXllcikpLmZpbHRlci53aGVyZSA9IFwiR2xvYmFsSUQgPSAnXCIgKyB0aGlzLl9maWx0ZXJbMF0gKyBcIidcIjtcbiAgICAvLyAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xuICAgIC8vICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAvLyAgLy99KTtcbiAgICAvL30gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gIGFsZXJ0KCdXZSBoYXZlIGFuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIC8vfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcbiAgfVxuXG59XG4iXX0=