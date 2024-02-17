
const billetter = [];
function kjop() {
    const film = document.getElementById("film").value;
    const antallBilletter = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;


    if (film === "Velg film her") {
        document.getElementById("feilFilm").textContent = " Velg en film";
    } else {
        document.getElementById("feilFilm").textContent = "";
    }

    if (!antallBilletter || isNaN(antallBilletter) || antallBilletter <= 0) {
        document.getElementById("feilAntallBilletter").textContent = "Skriv antall billettter";
    } else {
        document.getElementById("feilAntallBilletter").textContent = "";
    }

    if (!fornavn) {
        document.getElementById("feilFornavn").textContent = "Fyll ut fornavn";
    } else {
        document.getElementById("feilFornavn").textContent = "";
    }

    if (!etternavn) {
        document.getElementById("feilEtternavn").textContent = " Skriv inn etternavn";
    } else {
        document.getElementById("feilEtternavn").textContent = "";
    }
    //https://stackoverflow.com/questions/73656999/regex-to-validate-only-digits-from-0-9-maximum-of-8-digits-till-a-dot-and-only
    if (!telefonnr || !/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("feilTelefonNr").textContent = "Skriv et telefonnummer med 8 tall";
    } else {
        document.getElementById("feilTelefonNr").textContent = "";

    }
    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    if (!epost || !/^[^\s*]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
        document.getElementById("feilEpost").textContent = "Skriv en fungerende epostadresse";
    } else {
        document.getElementById("feilEpost").textContent = "";
    }

    const billett = {
        Film: film,
        AntallBilletter: antallBilletter,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };


    billetter.push(billett);
output();
}
function output(){
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML;
    billetter.forEach(billett => {
        const billettInfo = `
            <p>
                Film: ${billett.Film}<br>
                Antall billetter: ${billett.AntallBilletter}<br>
                Fornavn: ${billett.Fornavn}<br>
                Etternavn: ${billett.Etternavn}<br>
                Telefonnr: ${billett.Telefonnr}<br>
                Epost: ${billett.Epost}
            </p>
        `;
        outputDiv.innerHTML += billettInfo;
    });

}
function slett() {
    billetter.length = 0;
    output();

        document.getElementById("film").value = "Velg film her";
        document.getElementById("antallBilletter").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonNr").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("feilFornavn").value = "";
        document.getElementById("output").innerHTML = ""
}