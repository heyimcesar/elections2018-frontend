export const routes = [{
	path: "",
	// component: ,
	children: [
		{ path: "", redirectTo: "home", pathMatch: "full" },
		{ path: "home", loadChildren: "./home/home.module#HomeModule" },
		{ path: "individual-analysis", loadChildren: "./individual-analysis/individual-analysis.module#IndividualAnalysisModule" },
		{ path: "versus-analysis", loadChildren: "./versus-analysis/versus-analysis.module#VersusAnalysisModule" },
	]
}, {
	// Page not found.
	path: "**", redirectTo: "home"
}];
