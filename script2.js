
document.getElementById("velg").addEventListener("click", function () {
    var print = document.getElementById("mySelect"); if (print.options[print.selectedIndex].text == "Her er det flere bilder") {
        document.getElementById("min_valg").innerHTML = "Du trenger å velge en av dem :)"
    } else {
        document.getElementById("min_valg").innerHTML =
            print.options[print.selectedIndex].text;
        minFarge = print.options[print.selectedIndex].text;
        console.log(minFarge);
        document.body.style.background = minFarge;
    }
})

// Laget av Serdar Durmus