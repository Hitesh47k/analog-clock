function clock() {
    d = new Date();
    // console.log(d);
    var h = d.getHours();
    // console.log(h);
    var m = d.getMinutes();
    //console.log(m);
    var s = d.getSeconds();
    //console.log(s);
    var s_angle = 6 * s;
    var m_angle = 6 * m;
    var h_angle = 30 * h + (1 / 2 * m);
    sec.style.transform = `rotate(${s_angle}deg)`;
    min.style.transform = `rotate(${m_angle}deg)`;
    hr.style.transform = `rotate(${h_angle}deg)`;

    if (h > 12) {
        ac.innerHTML = `${h}:${m}:${s}:PM`
    }
    else {
        ac.innerHTML = `${h}:${m}:${s}:AM`

    }
}
clock();
setInterval(() => {
    clock();
}, 1000)