new Vue({
      el: "#app",
      data: {
        messages: [],
        newMessage: "",
        isTyping: false,
        currentSender: "Mario"
      },
      methods: {
        sendMessage() {
      if (this.newMessage) {
        // Push Mario's message first
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
          isSender: true,
          timestamp: new Date().toLocaleString()
        });

            // Set typing indicator to true after sending the message with a 3-second delay
            setTimeout(() => {
              this.isTyping = true;
            }, 3000);

            // Simulate Luigi's responses after a 6-second delay
            setTimeout(() => {
              const lastMessage = this.messages[this.messages.length - 1];
              if (lastMessage.isSender) {
                const marioMessage = lastMessage.text.toLowerCase();
                let luigiResponse = "Hello! I'm Luigi, and I'm here to chat!";
                // Simulate Luigi's responses after a delay
                setTimeout(() => {
                  if (marioMessage.includes("busy") && marioMessage.includes("busy")) {
                    luigiResponse = "Hi Mario! I'm not busy, why did you ask?";
                					}			else if (marioMessage.includes("morning") || marioMessage.includes("morning")) {
                    luigiResponse = "Good morning Bro! What's your plan for the day?";
                					}			else if (marioMessage.includes("chores") || marioMessage.includes("chores")) {
                    luigiResponse = "Tell me if you need help, I'll be there to help you.";
                					}			else if (marioMessage.includes("thank") || marioMessage.includes("thank")) {
                    luigiResponse = "Anything for you bro!";
                					}			else if (marioMessage.includes("i'll be waiting'") || marioMessage.includes("i'll be waiting")) {
                    luigiResponse = "Okay, bye. I'll be there soon.";
                					}			else if (marioMessage.includes("evening") || marioMessage.includes("evening")) {
                    luigiResponse = "Good evening Bro! What's your plan for tonight?";
                					}			else if (marioMessage.includes("having dinner") || marioMessage.includes("having dinner")) {
                    luigiResponse = "That's great! Enjoy the night.";
                					}			else if (marioMessage.includes("how about you") || marioMessage.includes("how about you")) {
                    luigiResponse = "Well, I'll be having a dinner with my pizza. Lol😆😆";
                					}		else if (marioMessage.includes("hahaha") || marioMessage.includes("hahaha")) {
                    luigiResponse = "That would be for sure🤪.";
                					}		else if (marioMessage.includes("bye") || marioMessage.includes("bye")) {
                    luigiResponse = "Okay, bye bye and take care.";
                					}			else if (marioMessage.includes("feel") || marioMessage.includes("feeling")) {
                    luigiResponse = "I'm feeling great today! How about you?";
                  } else if (marioMessage.includes("breakfast")) {
                    luigiResponse = "I had pancakes for breakfast. How about you?";
                  } else if (marioMessage.includes("lunch")) {
                    luigiResponse = "I had a delicious sandwich for lunch. What did you have?";
                  } else if (marioMessage.includes("dinner")) {
                    luigiResponse = "I'm planning to have spaghetti for dinner. What about you?";
                  } else if (marioMessage.includes("snack")) {
                    luigiResponse = "I had some chips as a snack. What's your favorite snack?";
                  } else if (marioMessage.includes("feel") || marioMessage.includes("feeling")) {
                    luigiResponse = "I'm feeling great today! How about you?";
                					}		else if (marioMessage.includes("good") || marioMessage.includes("good")) {
                    luigiResponse = "That's good to know!";
                  } else if (marioMessage.includes("doing")) {
                    luigiResponse = "I'm just chatting with you right now. What are you up to?";
                  } else if (marioMessage.includes("day")) {
                    const timeOfDay = getTimeOfDay();
                    luigiResponse = `Good ${timeOfDay}, Mario! How was your day?`;
                  }

                  // Push Luigi's response after Mario's message
                  this.messages.push({
                    id: this.messages.length + 1,
                    text: luigiResponse,
                    isSender: false,
                    timestamp: new Date().toLocaleString()
                  });
                  // Set typing indicator to false after Luigi's response
                  this.isTyping = false;
                }, 6000); // Delayed by about 6 seconds
              }
            }, 3000); // Delayed by about 3 seconds
          }
          // Clear the input field
          this.newMessage = "";
        },
        onTyping() {
          // Set typing indicator to false while typing
          this.isTyping = false;
        }
      }
    });

    function getTimeOfDay() {
      const currentTime = new Date().getHours();
      if (currentTime >= 5 && currentTime < 12) {
        return "morning";
      } else if (currentTime >= 12 && currentTime < 13) {
        return "noon";
      } else if (currentTime >= 13 && currentTime < 18) {
        return "afternoon";
      } else if (currentTime >= 18 && currentTime < 24) {
        return "evening";
      }
    }
