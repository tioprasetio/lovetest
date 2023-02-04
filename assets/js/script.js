var btn2 = document.querySelector(".btn2");
btn2.style.display = "none";

function cek() {
    var btn = document.querySelector(".btn");
    var input1 = document.getElementById("inputValue").value;
    var input2 = document.getElementById("inputValue2").value;
    var inputStyle = document.getElementById("inputValue");
    var inputStyle2 = document.getElementById("inputValue2");
    var select = document.getElementById("selection").value;
    var selectStyle = document.getElementById("selection");
    var hasil = document.querySelector(".card-body");
    var whasil = document.querySelector(".card");
    var bobot1 = 0;
    var bobot2 = 0;
    var valid = true;

    if (!select) {
        hasil.textContent = "Oupss, pilihan harus diisi terlebih dahulu!";
        whasil.style.background = "#e6361a";
        inputStyle.display = "none";
        inputStyle2.display = "none";
        selectStyle.display = "none";
        btn.style.display = "none";
        btn2.style.display = "block";
        valid = false;
    } else if (!input1 || !input2) {
        hasil.textContent = "Oupss, input harus diisi terlebih dahulu!";
        whasil.style.background = "#e6361a";
        inputStyle.display = "none";
        inputStyle2.display = "none";
        selectStyle.display = "none";
        // btn.style.display = "none";
        // btn2.style.display = "block";
        valid = false;
    }

    if (!valid) {
        return;
    }

    if (select == "Laki-laki dan perempuan") {
        for (var i = 0; i < input1.length; i++) {
            var karakter = input1.charCodeAt(i);
            bobot1 += karakter - 96;
            bobot1 = bobot1 % 4;
            if (isNaN(karakter) === false) {
                hasil.textContent = "Maaf, input harus diisi dengan huruf!";
                whasil.style.background = "red";
                valid = false;
                break;
            }
        }

        for (var i = 0; i < input2.length; i++) {
            var karakter2 = input2.charCodeAt(i);
            bobot2 += karakter2 - 96;
            bobot2 = bobot2 % 4;
            if (isNaN(karakter2) === false) {
                hasil.textContent = "Maaf, input harus diisi dengan huruf!";
                whasil.style.background = "red";
                valid = false;
                break;
            }
        }

        // if (!valid) {
        //     return;
        // }

        var abs = Math.abs(bobot1 - bobot2)

        if (bobot1 == 3 && bobot2 == 3) {
            hasil.textContent = "Pasangan kekasih yang cocok"
            whasil.style.background = "#13D369"
        } else if (bobot1 == 0 && bobot2 == 0) {
            hasil.textContent = "Pasangan kekasih yang tidak memiliki masa depan!!!"
            whasil.style.background = "#e6361a"
        } else if (abs == 1) {
            hasil.textContent = "Pasangan kekasih yang kadang tidak akur"
            whasil.style.background = "#C29F23"
        } else if (abs == 2) {
            hasil.textContent = "Pasangan kekasih yang suka ribut"
            whasil.style.background = "#C315C9"
        } else if (abs == 3) {
            hasil.textContent = "Maaf, tidak disarankan menjalin hubungan"
            whasil.style.background = "#e6361a"
        }

    } else {
        hasil.textContent = "Oupss, jenis kelamin harus diisi terlebih dahulu!"
        whasil.style.background = "#e6361a"
        inputStyle.style.display = "none"
        inputStyle2.style.display = "none"
        selectStyle.style.display = "none"
        btn.style.display = "none"
        btn2.style.display = "block"
    }
}

function ulang() {
    location.reload();
}
