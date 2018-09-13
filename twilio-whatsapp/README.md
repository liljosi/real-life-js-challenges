# Description

## I took the aproach of creating a JS class called Twilio which for now only has one method in it called send, this class receives two parameters, a number and a message, the class validates if they are strings, if not it sends back an error, if it is successful it means it has been iniciated correctly. When you call the send function, it calls another method that i created which is the main method that is  used to send the message using the twilio-whatsapp api method.

# Iniciate the class

## const newMessage = new Twilio(message, phone)

## newMessage.send()

# Note

## Because twilio-whatsapp messaging is in beta, it will accept any number to send messages to. All requests will be passed and will return the corresponding json envolving the success of the request. 