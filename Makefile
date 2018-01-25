default:
	@make install
	@make run
run:
	@cd elections2018-app && ng serve --open
install:
	@npm install
	@cd elections2018-app && npm install
.PHONY: default