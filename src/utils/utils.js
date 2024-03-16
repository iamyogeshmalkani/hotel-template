function getDeviceSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
        return 'extra-large';
    } else if (screenWidth >= 992) {
        return 'large';
    } else if (screenWidth >= 768) {
        return 'medium';
    } else {
        return 'small';
    }
}

function getLogoByText(text) {
    switch (text) {
        case "Wi-Fi Internet Access":
            return "wifi"
        case "Television":
            return "television"
        case "24/7 Room Service":
            return "room-service"
        case "Laundry Service":
            return "laundry"
        case "Balcony":
            return "balcony"
        case "Vehicle on rent":
            return "taxi"
        case "Elevator":
            return "elevator"
        case "Pick & Drop service":
            return "location"
        case "Air Conditions Lobby":
            return "ac"
        case "24-hour front desk":
            return "frontdesk"


        default:
            return "balcony"
    }
}

export { getDeviceSize, getLogoByText }