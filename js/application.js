// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  // global game for debug purposes
  game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
