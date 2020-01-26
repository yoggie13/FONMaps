//ubaciti sta ako se rotira
var goFwd = 1;

var p = {
    "type": "equirectangular",
    "panorama": "img/1.jpg",
    "autoLoad": true,
    "haov": 360,
    "vaov": 70,
    "minPitch": -27.905,
    "maxPitch": 30.245,
    "showZoomCtrl": true,
    "mouseZoom": true,
    "keyboardZoom": false,
    "hfov": 105,
    "orientationOnByDefault": true,
    "yaw": -169.5,
};

function provera() {

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    if (p.panorama == "img/4.jpg") {

        left.style.color = 'black';
        left.disabled = false;

        right.style.color = 'black';
        right.disabled = false;

    } else {

        left.removeAttribute("style");
        left.disabled = true;

        right.removeAttribute("style");
        right.disabled = true;
    }
}



pannellum.viewer('panorama', p);

function changeDirectory() {
    return `img/${Math.abs(goFwd)}.jpg`;
}

function move() {
    if (goFwd == -1 || goFwd == 6) {
        return;
    }
    goFwd++;
    if (goFwd == -11) {
        p.yaw = -169.5;
    } else if (goFwd == -10) {
        p.yaw += 180;
    } else if (goFwd == -9) {
        p.yaw = 0;
    } else if (goFwd == 9) {
        p.yaw = 180;
    } else if (goFwd == -12) {
        p.yaw = -225;
    } else if (goFwd == 12) {
        p.yaw += 90;
    }
    if (goFwd == 13 || goFwd == -8) {
        goFwd = 4;
        p.yaw = -169.5;
    }
    p.panorama = changeDirectory();

    pannellum.viewer('panorama', p);
    provera();

}

function direction() {
    if (goFwd == -11 || goFwd == 11) {
        p.yaw += 180;
    }
    goFwd = -1 * goFwd;
    p.yaw += 180;
    pannellum.viewer('panorama', p);

}

function left() {
    p.yaw -= 90;
    if (goFwd > 0)
        goFwd = -13;
    else goFwd = 8;
    pannellum.viewer('panorama', p);
    p.yaw += 90;
}

function right() {
    p.yaw += 90;
    if (goFwd > 0)
        goFwd = 8;
    else goFwd = -13;
    pannellum.viewer('panorama', p);
    p.yaw -= 90;
}