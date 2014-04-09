// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    /*
        2    - Half-Life
        4    - Counter-Strike: Source
        8    - Half-Life 2
        16   - Team Fortress 2
        32   - Portal 
        64   - Left 4 Dead
        128  - Left 4 Dead 2
        258  - Portal 2
        512  - Counter-Strike: Global Offensive
        1024 - Dota 2
        2048 - Half-Life 3
    */
    var imageList = [
        "http://gabe2048.com/img/212/Half-Life-3-212.png",
        "http://gabe2048.com/img/212/Dota2-212.png",
        "http://gabe2048.com/img/212/CSGO-212.png",
        "http://gabe2048.com/img/212/Portal2-212.png",
        "http://gabe2048.com/img/212/L4D2-212.png",
        "http://gabe2048.com/img/212/L4D-212.png",
        "http://gabe2048.com/img/212/Portal-212.png",
        "http://gabe2048.com/img/212/TF2-212.png",
        "http://gabe2048.com/img/212/HL2-212.png",
        "http://gabe2048.com/img/212/CSS-212.png",
        "http://gabe2048.com/img/212/HL-212.png",
        "http://gabe2048.com/img/114/Half-Life-3-114.png",
        "http://gabe2048.com/img/114/Dota2-114.png",
        "http://gabe2048.com/img/114/CSGO-114.png",
        "http://gabe2048.com/img/114/Portal2-114.png",
        "http://gabe2048.com/img/114/L4D2-114.png",
        "http://gabe2048.com/img/114/L4D-114.png",
        "http://gabe2048.com/img/114/Portal-114.png",
        "http://gabe2048.com/img/114/TF2-114.png",
        "http://gabe2048.com/img/114/HL2-114.png",
        "http://gabe2048.com/img/114/CSS-114.png",
        "http://gabe2048.com/img/114/HL-114.png",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
