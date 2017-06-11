describe('Testing the login page', function() {
	var bt_login = '.button.button-block.button-round.button-positive.lightorange-bg.button-full.login-button';
	var fld_user = '.user.col.col-90.col-offset-10';
	var fld_pass = '.pass.col.col-90.col-offset-10';
	var bt_omitir = '.button.rounded.button-full.button-calm.white-color';
	var bt_menusec= '.button.transparent-btn.hamburguer-button';
	
    it('should be able to click on the login button', function() {	
	//Ingresar datos y presionar INGRESAR
		var user = element(by.css(fld_user));
		var password = element(by.css(fld_pass));
		var login = element(by.css(bt_login));
	//Registrar resultados
		expect(user.isPresent()).toBe(true);
		expect(password.isPresent()).toBe(true);
		expect(login.isPresent()).toBe(true);
		
		user.clear().sendKeys('23765258');
		password.clear().sendKeys('Desa1234');       
        element(by.css(bt_login)).click();
//Onboarding		
		var EC = protractor.ExpectedConditions;
		var omitir = element(by.css(bt_omitir));
		var isClickable = EC.elementToBeClickable(omitir);
		expect(omitir.isPresent()).toBe(true);
		//element(by.css(bt_omitir)).click();
		browser.wait(isClickable,0000); 
		
		
	

	}); 
		
}); 

//TO-DO Limpiar scrip
//Repositorio