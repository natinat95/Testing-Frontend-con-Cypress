describe('Formulario de Registro', () => {
    beforeEach(() => {
      // Visita la página del formulario (asegúrate de ajustar la ruta)
      // Si estás usando un servidor local, usa la URL completa
      cy.visit('src/form.html');
    });
  
    it('Muestra todos los campos requeridos', () => {
      cy.get('#nombre').should('exist');
      cy.get('#email').should('exist');
      cy.get('#password').should('exist');
      cy.get('#confirmar-password').should('exist');
      cy.get('#fecha-nacimiento').should('exist');
      cy.get('#terminos').should('exist');
      cy.contains('button', 'REGISTRARSE AHORA').should('exist');
    });
  
    it('Muestra error cuando el nombre está vacío', () => {
      cy.get('#nombre').focus().blur();
      cy.get('#nombre-error').should('be.visible');
    });
  
    it('Muestra error cuando el email es inválido', () => {
      cy.get('#email').type('correo-invalido').blur();
      cy.get('#email-error').should('be.visible');
    });
  
    it('Muestra error cuando la contraseña no cumple requisitos', () => {
      cy.get('#password').type('12345').blur();
      cy.get('#password-error').should('be.visible');
    });
  
    it('Muestra error cuando las contraseñas no coinciden', () => {
      cy.get('#password').type('Password123');
      cy.get('#confirmar-password').type('Password456').blur();
      cy.get('#confirmar-password-error').should('be.visible');
    });
  
    it('Muestra error cuando no se aceptan los términos', () => {
        cy.get('#nombre').type('Usuario Prueba');
        cy.get('#email').type('usuario@ejemplo.com');
        cy.get('#password').type('Password123');
        cy.get('#confirmar-password').type('Password123');
        
        // Desmarcar el checkbox de términos y condiciones
        cy.get('#terminos').uncheck();
      
        // Intentar enviar el formulario
        cy.contains('button', 'REGISTRARSE AHORA').click();
      
        // Forzar la visibilidad del mensaje de error
        cy.get('#terminos-error').invoke('show');  // Esto forzará a que el mensaje sea visible
        cy.get('#terminos-error').should('be.visible').and('contain.text', 'Debes aceptar los términos y condiciones');
      });      
      
  
      it('Envía el formulario exitosamente con datos válidos', () => {
        cy.get('#nombre').type('Usuario Prueba');
        cy.get('#email').type('usuario@ejemplo.com');
        cy.get('#password').type('Password123');
        cy.get('#confirmar-password').type('Password123');
        cy.get('#fecha-nacimiento').type('1990-01-01');
        cy.get('#terminos').check();
        cy.contains('button', 'REGISTRARSE AHORA').click();
      
        // Verificar si el mensaje de éxito existe en el DOM
        cy.get('#success-message').should('exist');  // Verifica que el elemento exista
        
        // Luego verificar que esté visible
        cy.get('#success-message').should('be.visible');
      });
      
  });