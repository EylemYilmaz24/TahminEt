
window.onload = function() {
    // Sayfa yüklendiğinde geri sayımı başlat
    
    var geriSayimKutusu = document.getElementById('geriSayimKutusu');
    geriSayimBaslat(geriSayimKutusu);

    // Butona tıklandığında tahmin kontrolü
    var myButton = document.getElementById('myButton');
    myButton.onclick = function() {
        tahminKontrolEt();
    };

    guncelleSeviye();



};
/* ****************************************************** */
// Geri sayımı başlat



var mainImg=document.getElementById('mainImage');

var geriSayim = 30;

var tahminHak=5;
var tahminSayiAralik=0;


var tahminHakki=document.getElementById('hak');

var seviyeNo=1;
var seviyeCard=document.getElementById('seviye');



// Geri sayım fonksiyonunu tanımla
function geriSayimBaslat() {
    geriSayim--;

    // Geri sayımı güncelle
    geriSayimKutusu.querySelector('h3').textContent = geriSayim;

    // Geri sayım sıfıra ulaşana kadar devam et
    if (geriSayim > 0) {
        setTimeout(geriSayimBaslat, 1000);
    } else {
        geriSayimKutusu.querySelector('h3').textContent = "Süre doldu!";
        var myButton = document.getElementById('myButton');
        myButton.disabled = true;
        mainImg.src="images/notime-gif.gif";


    }

}

//tahmini hakkı kutusu


tahminHakki.querySelector('h1').textContent=tahminHak;

//seviye kutusu


seviyeCard.querySelector('h1').textContent=seviyeNo;
function guncelleSeviye() {
    // Tahmin edilen sayı aralığını belirle
    tahminSayiAralik = seviyeNo * 10;
    tahminiSayi = Math.floor(Math.random() * tahminSayiAralik) + 1;

    var bilgiMesajiKutusu=document.getElementById('bilgiMesaji');
    bilgiMesajiKutusu.querySelector('p').textContent="1 ile "+tahminSayiAralik+" arası değer giriniz";
}

//tahmin edilen sayı
var tahminiSayi = Math.floor(Math.random() * 10) + 1;

// Tahmin kontrol fonksiyonu
function tahminKontrolEt() {
    // Kullanıcının girdiği sayının alınması
    var girilenSayi = parseInt(document.getElementById('girilen').value);

    if(girilenSayi==null|| isNaN(girilenSayi)){
        alert("Bu alan boş geçilemez");
    }
    else{
    // Kullanıcının girdiği sayı ile tahmin edilen sayının karşılaştırılması
    if (girilenSayi == tahminiSayi && tahminHak>0 ) 
        {
        alert("Tebrikler!");
        seviyeNo++;
        geriSayim=30;
        geriSayimBaslat();
        guncelleSeviye();
        tahminHak=5;
        
        mainImg.src="images/happy-gif.gif";
        } 
    else if (girilenSayi < tahminiSayi && tahminHak>0) {
        alert("Lütfen daha büyük bir değer girin.");
        tahminHak--;
        } 
    else if (girilenSayi > tahminiSayi && tahminHak>0) {
        alert("Lütfen daha küçük bir değer girin.");
        tahminHak--;
        }

    }

    var tahminHakki = document.getElementById('hak');
    tahminHakki.querySelector('h1').textContent = tahminHak;

    // Seviye kutusunu güncelle
    var seviyeCard = document.getElementById('seviye');
    seviyeCard.querySelector('h1').textContent = seviyeNo;
    
if(tahminHak==0 && girilenSayi!=tahminiSayi){
    alert("DENEME BAŞARISIZ!")
    var myButton = document.getElementById('myButton');
    myButton.disabled = true;
    mainImg.src="images/sad-gif.gif";
    
}

}

  








