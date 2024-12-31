const config = {
  host: '10.0.0.182',
  port: 50541
}

const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGHT_KEY = "d";

const initials = "Name: SOS";

const keyMessageMapping = {
  g: "Say: Viva Snake!",
  l: "Say: Great game!",
}

// Export all the constants being used in the app
module.exports = {
  config,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  initials,
  keyMessageMapping,
};