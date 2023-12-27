class Mobile {
    constructor(model, number, unlockPin) {
      this.model = model;
      this.number = number;
  
      // Private property
      let _unlockPin = unlockPin;
  
      // Getter method to get the unlock pin
      this.getUnlockPin = function () {
        return _unlockPin;
      };
  
      // Setter method to set the unlock pin
      this.setUnlockPin = function (newPin) {
        _unlockPin = newPin;
      };
  
      // Method to send SMS
      this.sendSMS = function (textMessage) {
        return textMessage;
      };
    }
  }
  
  export default Mobile;
  