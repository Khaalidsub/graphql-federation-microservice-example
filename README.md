A simple project that implements graphql federation and subscrition with nestjs

I wanted to learn how the structure works

There are three models that are coming to play
- users
    - tutors
    - students 
- booking
- mailing
- chat

Students are able to book tutors and based on the time of the booking, they are able to have a conversation with the tutor.

When there is a booking , an event would occur to set the chat date. The chat will be open for a certain period of time.

Subscription:
chat

For any events occurring, I used redis.

For any dependency request/response calls, I used gRPC to use the services accross different services.