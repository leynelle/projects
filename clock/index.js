class DigitalClock {
    constructor(element) {
        this.element = element;
        
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContant = amPm;

    }


    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

//console.log(clockObject.getTimeParts());

clockObject.update();