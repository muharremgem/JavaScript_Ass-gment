    //? ÖDEV 1 HESAP MAKİNESİ

    function Islem(GelenDeger) {
        if (GelenDeger == 'C') {
            EkranDegeri.value = 0;
        }
        if (GelenDeger == '+') {
            Sayi1 = EkranDegeri.value; //simdiye kadar yazılanları Sayi1 e at
            EkranDegeri.value += '+'; //islemi yaz
            MatIslem = '+';
            //Islem('C'); //Ekranı sil
        }
        if (GelenDeger == '-') {
            Sayi1 = EkranDegeri.value; //simdiye kadar yazılanları Sayi1 e at
            EkranDegeri.value += '-'; //islemi yaz
            MatIslem = '-';
            //Islem('C'); //Ekranı sil
        }
        if (GelenDeger == '*') {
            Sayi1 = EkranDegeri.value; //simdiye kadar yazılanları Sayi1 e at
            EkranDegeri.value += '*'; //islemi yaz
            MatIslem = '*';
            //Islem('C'); //Ekranı sil
        }
        if (GelenDeger == '=') {
            Sayi2 = EkranDegeri.value.split(MatIslem)[1]; //simdiye kadar yazılanları Sayi1 e at
            switch (MatIslem) {
                case '+' :
                    EkranDegeri.value = parseInt(Sayi1) + parseInt(Sayi2);
                    break;
                case '-' :
                    EkranDegeri.value = parseInt(Sayi1) - parseInt(Sayi2);
                    break;
                case '*' :
                    EkranDegeri.value = parseInt(Sayi1) * parseInt(Sayi2);
                    break;
                    
            }
        }
    }


   //? ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

let day = prompt("Bir gün giriniz.");

switch (day) {
    case "pazartesi":
        console.log("Bugün günlerden pazartesi ders = InClass")
        break;
    case "salı":
        console.log("Bugün günlerden salı ders = InClass")
        break;
    case "çarşamba":
        console.log("Bugün günlerden çarşamba ders = InClass")
        break;
    case "perşembe":
        console.log("Bugün günlerden perşembe ders = InClass")
        break;
    case "cuma":
        console.log("Bugün günlerden cuma ders = Teamwork")
        break;
    case "cumartesi":
        console.log("Bugün günlerden cumartesi ders =InClass+Workshop")    
        break;
    case "pazar":
        console.log("Bugün günlerden pazar bugün ders yok") 
        break;
    default:
        console.log("Yanlış gün girildi.")
        break;
}



//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const maas = +prompt("maaşınızı giriniz.")
const asgariUcret = 5500 

if (maas <= asgariUcret){
    let yeniMaas = maas * 1.5;
    console.log(yeniMaas)
}else{
    let yeniMaas = maas * 1.1;
    console.log(yeniMaas)
}

//? Ödev 4 kredi hesaplama 

const gelir = +prompt("Aylık gelirinizi yazınız:")
const gider = +prompt("Aylık giderinizi yazınız:")

const kredi = gelir - gider >= 5500 ? "Kredi alabilir" : "Kredi alamaz";

console.log(kredi)






