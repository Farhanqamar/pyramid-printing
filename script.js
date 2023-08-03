function magick() {
    const get = parseInt(document.getElementById("stars").value);
    let result = "";

    for (let i = 1; i <= get; i++) {
        let write = "";
        for (let j = 1; j <= get; j++) {
            write += "* ";
        }
        result += write + "<br>";
    }


    document.getElementById("cool").innerHTML = result;

}
function magick2() {
    const set = parseInt(document.getElementById("star").value);
    let root = "";

    for (let x = 1; x<=set; x++){
        let zero = "";
        for (let y = 1; y<=x; y++){
            zero += "* ";
        }
        root += zero + "<br>";
    }


    document.getElementById("cool").innerHTML = root;
}


