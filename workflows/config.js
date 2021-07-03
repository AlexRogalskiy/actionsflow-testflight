/**
 * Side directions
 * @type {string[]}
 */
const DIRECTIONS = ['north', 'north-west', 'west', 'south-west', 'south', 'south-east', 'east', 'north-east'];

/**
 * Locale
 * @type {string}
 */
const LOCALE = 'en-GB';

/**
 * Date format
 * @type {{hour: string, timeZone: string, minute: string}}
 */
const DATE_FORMAT = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Moscow',
};

module.exports = {
    DIRECTIONS,
    LOCALE,
    DATE_FORMAT
}