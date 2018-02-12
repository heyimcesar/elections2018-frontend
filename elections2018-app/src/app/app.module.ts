import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, Http } from '@angular/http';
import { NgModule } from "@angular/core";
import { RoutesModule } from "./routes/routes.module";
import { ServicesModule } from "./services/services.module";
import { SharedModule } from "./shared/shared.module";


import { AppComponent } from "./app.component";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RoutesModule,
		SharedModule,
		ServicesModule
	],
	providers: [ ],
	bootstrap: [AppComponent]
})
export class AppModule { }
