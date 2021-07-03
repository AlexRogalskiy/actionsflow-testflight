const config = require('./config');

module.exports = () => {
    const {WEATHER_DATA} = process.env

    console.log(JSON.stringify(WEATHER_DATA))

    const data = JSON.parse(WEATHER_DATA);

    const longitude = data.current.coord.lon;
    const latitude = data.current.coord.lat;

    const main = data.current.weather[0].main;
    const description = data.current.weather[0].description;

    const tempMin = data.daily[0].temp.min;
    const tempMax = data.daily[0].temp.max;

    const temperature = Math.round(data.current.feels_like);
    const pressure = Math.round(data.current.pressure);
    const humidity = Math.round(data.current.humidity);
    const clouds = Math.round(data.current.clouds.all);
    const wind = Math.round(data.current.wind.speed);
    const uvi = Math.round(data.current.uvi);

    const windDirection = formatSideDirection(data.current.wind.deg);

    const sunrise = formatDateByPattern(data.current.sys.sunrise);
    const sunset = formatDateByPattern(data.current.sys.sunset);

    return `
        Currently, the weather in Saint-Petersburg (lon: ${longitude}, lat: ${latitude}) is:

        temperature: ${tempMin}-${tempMax}°C (${main}, ${description}), fells like ${temperature}°C,
        
        humidity: ${humidity}%,
        pressure: ${pressure} (mbar),
        uvi: ${uvi},
        
        wind: /${windDirection}/ ${wind} (m/s),
        cloudy: ${clouds}%,

        today, the Sun rises at ${sunrise}am and sets at ${sunset}pm.
    `;
}

/**
 * Returns formatted side direction by input angle in degrees
 * @param angle initial input angle in degrees to calculate by
 * @returns {string} formatted side direction
 */
const
    formatSideDirection = angle => {
        return config.DIRECTIONS[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
    };

/**
 * Returns formatted date by input date/time pattern
 * @param value initial input date to format
 * @returns {string} short formatted date
 */
const formatDateByPattern = value => {
    return new Date(value * 1000).toLocaleString(config.LOCALE, config.DATE_FORMAT);
};