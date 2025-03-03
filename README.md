# Testing-Frontend-con-Cypress
Este es un proyecto de **registro de usuario** que incluye **validación en tiempo real**, **validación de contraseñas**, y **pruebas automatizadas** utilizando **Cypress**. El formulario de registro fue generado a partir de una imagen de referencia proporcionada a Claude.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/natinat95/Testing-Frontend-con-Cypress.git
   
2. Navega a la carpeta del proyecto:
   cd nombre-del-repo
3. Instala las dependencias
   npm install
4. Ejecuta el proyecto en un servidor local
5. Para ejecutar las pruebas con Cypress
   npx cypress open

## Pruebas
La pruebas están ubicadas en la carpeta cypress/e2e/ y puedes ejecutar Cypress para ver cómo se comportan las pruebas automatizadas en el proyecto.

## Desafíos encontrados
Durante el desarrollo del proyecto, algunos de los desafíos fueron:

Validación en tiempo real: Implementar una validación que mostrara los errores inmediatamente al usuario sin necesidad de recargar la página.
Cypress: Configuración adecuada de Cypress para pruebas de la funcionalidad de registro.
Interacción entre campos: Asegurar que los campos como la confirmación de contraseña funcionaran correctamente y se validaran en tiempo real.

## Capturas

## Informe sobre el Proyecto

### Decisiones de diseño

1. **Validación en tiempo real**: Decidí implementar la validación de los campos del formulario en tiempo real para mejorar la experiencia del usuario. Esto asegura que el usuario reciba retroalimentación inmediata sobre los datos que está introduciendo.
   
2. **Uso de CSS para los efectos visuales**: Tanto el css como el html me lo generó Claude pasándole una imágen de referencia.

### Desafíos encontrados

1. **Sincronización de validación de contraseñas**: La validación de contraseñas y su confirmación presentó algunos desafíos, especialmente al querer asegurarse de que las contraseñas coincidan en tiempo real y que el formulario no se envíe si hay errores.
   
2. **Cypress y las pruebas de UI**: Integrar Cypress para probar la interacción de la UI fue complicado al principio, ya que se necesitaba esperar a que algunos elementos fueran visibles antes de hacer ciertas comprobaciones, lo que me llevó a ajustar los tiempos de espera en las pruebas.

3. **Gestión de errores en el formulario**: Asegurarme de que los errores no se apilaran y que los usuarios pudieran ver solo un mensaje de error a la vez fue otro desafío clave. Implementé una lógica para mostrar y ocultar errores de forma dinámica.

### Conclusión

Este proyecto ha sido una excelente oportunidad para mejorar mis habilidades en el desarrollo de formularios, validación en tiempo real, y pruebas automatizadas con Cypress. Los desafíos que enfrenté me ayudaron a entender mejor cómo manejar formularios interactivos y cómo hacer que los errores se gestionen de manera eficiente para los usuarios.
 

