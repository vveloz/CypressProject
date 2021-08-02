Feature: Login

Background: 
Given un usuario ingresa a la pagina Linio

Scenario: El usuario se loguea correctamente en Linio
When ingresa "email" y "pass" correctos
Then se muestra el mensaje de bienvenida