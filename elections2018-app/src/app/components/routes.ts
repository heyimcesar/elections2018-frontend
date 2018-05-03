import { AppComponent } from './../app.component';

export const routes = [{
	path: "",
	component: AppComponent,
	children: [
		{ path: "", redirectTo: "home", pathMatch: "full" },
		{ path: "home", loadChildren: "./home/home.module#HomeModule" },
		{ path: "versus-analysis", loadChildren: "./versus-analysis/versus-analysis.module#VersusAnalysisModule" },
		{ path: "grafica", loadChildren: "./example-grafica/example-grafica.module#ExampleGraficaModule" },
		{ path: "analisis-candidato", loadChildren: "./candidate-analysis/candidate-analysis.module#CandidateAnalysisModule" },
		{ path: "word-cloud", loadChildren: "./word-cloud/word-cloud.module#WordCloudModule" }



	]
}, {
	// Page not found.
	path: "**", redirectTo: "home"
}];
