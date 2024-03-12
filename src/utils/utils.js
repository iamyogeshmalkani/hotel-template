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

export { getDeviceSize }