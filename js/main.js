window.onload=function(){
    setInterval(slikeslide,4000) //slajder za slike u bloku o nama
  ispisPrvogDiva(); //dimanicko ispisivanje tabele sa glavnim podacima o kontaktu
  ispisMeni(); //dimanicki ispisuje meni
  setInterval(slide, 2500); // pas koji se pojavljuje na 5 sekundi
  ispisSapica(); //dinamicki ispis sapica
  ispisGalerije(); //dinamicki ispis galerije

  $('a').hover(function(){$(this).addClass('hover')},
  function(){$(this).removeClass('hover')}) // hover preko jquerija za menu

$('.zatvori').click(function(e){
e.preventDefault()
document.getElementById("prijavadiv").classList.remove("d-flex");
document.getElementById("prijavadiv").classList.add("d-none")
document.getElementById("napravidiv").classList.remove("d-flex");
document.getElementById("napravidiv").classList.add("d-none")
});
$('#prijava').on('click', function(e){
  e.preventDefault()
  divsepojavi(this.id)
  }); // klik na link u prvom bloku za prijavu ili registraciju

  $('.napravi').click(function(){
  document.querySelector(".prijavadiv").classList.remove("d-flex");
  document.querySelector(".prijavadiv").classList.add("d-none");
  divsepojavi(this.id);
   //klik na registraciju gde se otvara nova forma
})

ispisFormePrijava(); //dinamicki ispis forme za prijavu
ispisFormeRegistracija(); //dinamicki ispis forme za registraciju
ispisFootera();

$("select").change(ukloni); //na dogadjaj change funkcija ukloni dodaje ili uklanja polje za upis za dodatnu rasu koje
/////////////////////////////koje nema u dropdown listi

ispisCenovnika(); //dinamicki ispis tabele za cene

$('.mouseover').mouseover(function(){$('#'+this.id).css('width', '90%')}) //za galeriju kad se predje misem preko
$('.mouseover').mouseout(function(){$('#'+this.id).css('width', '100%')}) //slike uveca se, i smanji kad pomeri

$(window).bind('scroll', function () {
    
    if ($(window).scrollTop() >20) {
        document.querySelector("#fiksirano").classList.add("position-fixed")
        $('#fiksirano').css('width', '100%');
        $('#fiksirano').css('background-color', '#f3f3f3'); 
        $('#fiksirano').css('top', '0');
        $('#fiksirano').css('z-index', '49');

     } 
    }); //meni ostane zakacen za vrh browsera

$('#inputEmail3').keyup(reg)
$('#inputPassword3').keyup(reg)

ispisVeterinar();
ispisUsluga();
$('#ham').click(hamburger);

}

function proveraFormeVet(){
  let regImeiPrezime=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,20})+/
  let greske=[]
  let niz=["Morate uneti makar jedan kontakt kako bismo mogli da Vam odgovorimo", "Niste uneli nijedan karakter."]
  let niz1=["Hvala na ostavljenom kontaktu.", "Poruka je u redu."]
  if(regImeiPrezime.test(document.getElementById("vet0").value) && document.getElementById("vet0").value!=""){
    $("#veterinar0").css("display","flex")
    document.getElementById("veterinar0").classList.remove("invalid-feedback")
    document.getElementById("veterinar0").classList.add("valid-feedback")
    document.getElementById("veterinar0").innerHTML="Ime i prezime je ispravno uneto."
  }
  else{
    greske.push(document.getElementById("vet0"));
     $("#veterinar0").css("display","flex")
     document.getElementById("veterinar0").classList.remove("valid-feedback")
     document.getElementById("veterinar0").classList.add("invalid-feedback")
    document.getElementById("veterinar0").innerHTML="Ime i prezime mora biti velikim slovom."
  }
  for(i=1;i<=niz.length;i++){
    console.log(n[i])
    if(document.getElementById("vet"+i).value==""){
    greske.push(document.getElementById("vet1"));
     $("#veterinar"+i).css("display","flex")
     document.getElementById("veterinar"+i).classList.remove("valid-feedback")
    document.getElementById("veterinar"+i).classList.add("invalid-feedback")
    document.getElementById("veterinar"+i).innerHTML=niz[i-1]
  }
  else{
     $("#veterinar"+i).css("display","flex")
     document.getElementById("veterinar"+i).classList.remove("invalid-feedback")
     document.getElementById("veterinar"+i).classList.add("valid-feedback")
    document.getElementById("veterinar"+i).innerHTML=niz1[i-1]
  }
  }

  if(greske.length==0){
     alert("Uspešno ste poslali pitanje!")
    $("#veterinar2").css("display","none")
    $("#veterinar1").css("display","none")
    $("#veterinar0").css("display","none")
    document.getElementById("vet0").value=" " ;
    document.getElementById("vet1").value=" "
    document.getElementById("vet2").value=" "
  }
}

function hamburger(e){
  e.preventDefault()
   document.querySelector("#hamburger").classList.toggle("d-none")
   document.querySelector("#hamburger").classList.toggle("d-flex")
   document.querySelector("#hamburger").classList.toggle("position-fixed")
   document.querySelector("#promena").classList.toggle("fa-bars")
   document.querySelector("#promena").classList.toggle("fa-times")
  let visina=$("#fiksirano").height()
  console.log(visina)
        $('#hamburger').css('width', '30%');
        $('#hamburger').css('background-color', '#f3f3f3'); 
        $('#hamburger').css('top', visina);
        $('#hamburger').css('z-index', '51');
         $('#hamburger').css('right', '0');
          $('#hamburger').css('bottom', '0');
}


function reg(){
  console.log(this)
  let kliknuto=this.id;
  var regexinputEmail3=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var regexinputPassword3=/^.{8,20}$/;

  if(kliknuto=="inputEmail3"){
    regex=regexinputEmail3
  }
  else{
    regex=regexinputPassword3
  }
  if(regex.test(document.getElementById(kliknuto).value)){
  $('#validacija'+kliknuto).css('display', 'flex')
document.getElementById("validacija"+kliknuto).classList.remove('invalid-feedback')
document.getElementById("validacija"+kliknuto).classList.add('valid-feedback')
if(regex==regexinputEmail3){
     document.getElementById("validacija"+kliknuto).innerHTML="Forma e-maila je ispravno uneta. Ali nažalost Vaša adresa nije pronađena u bazi. Molimo Vas da se registrujete prvo!"
    }
    else{
      document.getElementById("validacija"+kliknuto).innerHTML="Password je u ispravnom formatu upisa, ali nije pronađeno podudaranje sa mejlom u bazi. Ako se niste registrovali do sada, registrujte se."
    }
  }  
else{
  document.getElementById("validacija"+kliknuto).classList.add('invalid-feedback')
    $('#validacija'+kliknuto).css('display', 'flex')
    if(regex==regexinputEmail3){
      document.getElementById("validacija"+kliknuto).innerHTML="Email mora da sadrži simbol @, ime e-maila. Ukoliko Vaša adresa nije pronađena, molimo Vas da se registrujete."
    }
    else{
      document.getElementById("validacija"+kliknuto).innerHTML="Password mora biti minimalne dužine 8 karaktera."
    }
    
}}


function ispisFormeRegistracija(){
let niz=["text", "text", "email", "password","password", "text"];
let svojstva=["Ime", "Prezime", "Email", "Password","-", "DrugaRasa"]
let i=0;
for(n of niz){
    document.querySelector("#dinamickireg").innerHTML+=`<div id="ukloni`+svojstva[i]+`" class=" d-flex flex-row justify-content-between">
    <label for="`+svojstva[i]+`" class="col-form-label">`+svojstva[i]+`</label>
    <input type="`+niz[i]+`" class="col-9 form-control regg" id="`+svojstva[i]+`" placeholder="Ovde unesite `+svojstva[i].toLowerCase()+`">
  </div></div> <div id="registracija`+svojstva[i]+`" class=""></div>`
 i++;}
  document.getElementById("ukloniDrugaRasa").classList.remove('d-flex');
 document.getElementById("ukloniDrugaRasa").classList.add('d-none');
 document.getElementById("-").setAttribute("placeholder", "Ovde ponovite lozinku");
let rasa=["Odaberite", "Engleski koker španijel", "Pirinejski planinski pas", "Bernski planinski pas", "Malinoa", "Kane Korso", "Doberman", "Rotvajler", "Australijski ovčar", "Pudla", "Zlatni retriver", "Mops", "Maltezer", "Drugo.."]
  document.querySelector("#dinamickireg").innerHTML+=`<div class="d-flex flex-row justify-content-between m-2">
      <label for="inputState" class="col-form-label p-1">Rasa psa</label>
      <select id="select" class="form-control">`
      for(r of rasa){
        document.getElementById("select").innerHTML+=`<option>`+r+`</option>
      </select><div id="zaSelect" class=""></div></div></div>`
      }
      document.querySelector("#dinamickireg").innerHTML+=`<button type="button" id="dugmeReg" class="mt-1 btn btn-secondary btn-sm btn-block">Registrujte se</button>`
      $('#napravidiv').css('z-index', '50');
      $('#dugmeReg').click(regZaReg)   //dinamicki ispisuje formu za registraciju
    }
function regZaReg(){
  console.log("uslo")
  var nizGreske=[]
    var ime = document.getElementById("Ime").value;
    var prezime = document.getElementById("Prezime").value;
    var sifra=document.getElementById("Password").value;
    var email=document.getElementById("Email").value;
    var poruka=document.getElementById("registracijaIme");
    var poruka1=document.getElementById("registracijaPrezime");
    var poruka2=document.getElementById("registracijaPassword");
    var poruka3=document.getElementById("registracijaEmail");
    var poruka4="Ime mora da počne velikim slovom.";
    var poruka5="Prezime mora da počne velikim slovom.";
    var poruka6="Email mora da sadrži smbol @ i ime maila.";
    var poruka7="Password mora biti minimalne dužine 8 karaktera."
    var imeReg = /^([A-ZČĆŠĐŽŠ][a-zčćžšđŠ]{2,15}(\s)?)+$/;
    var emailReg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var lozinka=/^.{8,20}$/; 
      regZaRegistraciju(ime, poruka, imeReg, nizGreske, poruka4)
      regZaRegistraciju(prezime, poruka1, imeReg, nizGreske, poruka5)
      regZaRegistraciju(sifra,poruka2, lozinka, nizGreske, poruka7)
       regZaRegistraciju(email,poruka3,emailReg,nizGreske, poruka6)

       if(document.getElementById("-").value!=sifra || sifra=="" || document.getElementById("-").value=="" ){
      nizGreske.push(sifra);
      document.getElementById("registracija-").classList.add("d-flex")
      document.getElementById("registracija-").classList.remove("d-none")
      document.getElementById("registracija-").classList.add("invalid-feedback");
      document.getElementById("registracija-").innerHTML="Passwordi Vam se ne podudaraju ili niste uneli u prvo polje."
    }
    else{
       document.getElementById("registracija-").classList.add("d-flex")
      document.getElementById("registracija-").classList.remove("d-none")
      document.getElementById("registracija-").classList.add("valid-feedback");
      document.getElementById("registracija-").innerHTML="Dobro napisano!";}
console.log(nizGreske)
    var niz=['registracijaIme', 'registracijaPrezime', 'registracijaEmail', 'registracijaPassword', 'registracija-']
  if(nizGreske==0){
alert("Registrovali ste se!")  
document.getElementById("napravidiv").classList.add("d-none")
document.getElementById("napravidiv").classList.remove("d-flex")
 for(n of niz){
         document.getElementById(n)
         document.getElementById(n).classList.remove("d-flex");
         document.getElementById(n).classList.add("d-none");
        let nn=n.replace("registracija","")
        document.getElementById(nn).value="";
      }

}

}

function regZaRegistraciju(ime, poruka, imeReg, nizGreske, poruke) {
  
    poruka.classList.add("d-flex")
      poruka.classList.remove("d-none")
    if (!imeReg.test(ime) || ime == "") {
      nizGreske.push(ime)
      poruka.classList.add("invalid-feedback");
      poruka.innerHTML= poruke;
    } else {
      poruka.classList.remove("invalid-feedback");
      poruka.classList.add("valid-feedback")
     poruka.innerHTML = "Dobro napisano!";
    }
    
  }


function ispisFormePrijava(){
  let niz=["Email", "Password"]
  for(n of niz){
    console.log()
    document.getElementById("dinamickiprijava").innerHTML+=` <div class="form-group mb-2">
    <label for="input`+n+`3" class=" ml-1 col-form-label">`+n+`</label>
    <div>
      <input type="`+n.toLowerCase()+`" class="form-control" id="input`+n+`3" placeholder="Ovde unesite `+n.toLowerCase()+`">
    </div>
  </div>
  <div id="validacijainput`+n+`3" class="">
      </div>`
  }
  document.getElementById("dinamickiprijava").innerHTML+=` <button type="button" class="btn btn-secondary btn-sm btn-block" disabled>Prijavite se</button>`
$('#prijavadiv').css('z-index', '50');
} //funckija za dinamicki ispis forme za prijavu 

function slide() {
    $("#slika").toggle("slide");
  }; // pas koji se pojavljuje na 5 sekundi

function ispisPrvogDiva(){
  let niz=["Zdravka Čelara 12", "062/854-56-58", "pansion@gmail.com", '<a id="prijava" href="#">Prijavi se ili registruj</a>'];
  let simboli=["fa fa-map-pin", "fa fa-phone", "fa fa-inbox","fa fa-user-plus"]
  let i=0;
  for(n of niz){
   document.querySelector("tr").innerHTML+='<td class="text-center mr-3"><p class="d-flex flex-column flex-lg-row align-items-center"><i class="mr-2 '+simboli[i]+'"></i>'+n+'</p></td>';
  i++;}
} // dinamicki ispis prvog bloka sa podacima za kontakt

function ispisMeni(){
  let niz=["Početna", "Kako izgleda pansion", "O nama", "Usluge", "Cenovnik", "Kontakt"]
 var broj=1;
  for(n of niz){
    document.querySelector("#prviul").innerHTML +=`<li class="text-center p-2 ml-2"><a href="#`+broj+`">`+n+`</a></li>`;
    document.querySelector("#drugiul").innerHTML +=`<li class="text-center p-2 ml-2"><a href="#`+broj+`">`+n+`</a></li>`;
     
    broj++;
  }
;} //dinamicko ispisivanje glavnog menija

function ispisSapica(){
  let div=document.getElementById("2")
  var broj=3;
  for(i=0;i<4;i++){
    if(broj==0){
      dodatak(broj);
      break;
    }
    div.innerHTML+=`<h`+broj+` class="p-2 m-auto"><i class="fa fa-paw"></i></h`+broj+`>`
    broj--;
  }
} //dinamicko ispisivanje sapica

function dodatak(broj){
   broj=broj+2;
  for(i=0;i<4;i++){
    if(broj>3){
      break;
    }
    document.getElementById("2").innerHTML+=`<h`+broj+` class="p-2 m-auto"><i class="fa fa-paw"></i></h`+broj+`>`
    broj++;
  }
} // dinamicko ispisivanje sapica



function ispisGalerije(){
  let div=document.querySelector(".dva");
  let galerija=1;
  for(i=0;i<8;i++){
    div.innerHTML+=`<div class=" p-0 col-4 col-lg-3 col-md-3 col-sm-4"><img class="m-auto d-flex justify-content-center mouseover img-fluid" id="slika`+galerija+`" src='img/galerija`+galerija+`.jpg' alt='slika`+galerija+`"</div>'/>`
    galerija++;
  }
} //dinamicki ispis slika u galeriji(kako izgleda pansion)


let broj=0;
function slikeslide(){  
  let niz=["img/ljubav1.jpg", "img/ljubav2.jpg", "img/ljubav.jpg"]
 document.getElementById("onama").setAttribute("src", niz[broj]); 
 broj++
 if(broj==3){
   broj=0;
 }
} //slajder za slike u bloku o nama


function ispisCenovnika(){
  let niz=["Usluge", "Standardna cena", "Cena sa popustom za naše članove"]
  let usluge=["Čuvanje vašeg ljubimca sa noćenjem", 1000,850, "Čuvanje na dan(8h)",800, 700, "Čuvanje na dan(6h)", 750,650,"Čuvanje na sat",200,150,"Šetanje",150,100,"Kupanje",250,200,"Ostala lična higijena(uši, nokti, zubi..)",200,150, "Hrana po porciji(200 g)",250, 230,"Dresura nedelju dana",5000,4000,"Intervencija veterinara",2500,2000]
  for(n of niz){
    document.getElementById("tr1").innerHTML+=`<th m-3>`+n+`</th>`}
 let a=-1;
  for(i=0;i<10;i++){
    document.getElementById("cene").innerHTML+=`<tr class="border-bottom"><td class="p-1">`+usluge[a+1]+`</td><td data-value="`+usluge[a+2]+`" class="odbrojavanje1 ml-3">`+usluge[a+2]+` din</td><td id="odbrojavanje`+i+`" class="odbrojavanje2" data-value="`+usluge[a+3]+`">`+usluge[a+3]+`din <i class="fa fa-percent"></i></td></tr>`
  a=a+3;}
} //dinamicki ispis tabele sa cenama


function divsepojavi(da){
    var ime=da+"div";
    console.log(ime)
    document.querySelector("."+ime).classList.remove("d-none");
    document.querySelector("."+ime).classList.add("d-flex");
                $("."+ime).animate({ 
                    width: "auto",
                    height:"auto",
                    left: "0",
                    right:"0"
                   
                }); 
                
            } //funkcija za pojavljivanje i nestajanje bloka za prijavu i registraciju

function ukloni(){
  console.log(this.value)
      if(document.getElementById("select").value=="Drugo.."){
      document.querySelector("#ukloniDrugaRasa").classList.remove("d-none")
      document.querySelector("#ukloniDrugaRasa").classList.add("d-flex")
      }
      else{ document.querySelector("#ukloniDrugaRasa").classList.add("d-none")
      document.querySelector("#ukloniDrugaRasa").classList.remove("d-flex")
    }
} //uklanja i dodaje polje za upis neke druge rase koja nije uneta u dropdown meni

function ispisVeterinar(){
  let niz=["text", "text"];
  let niz1=["Unesite ime i prezime", "Unesite vaš neki kontakt(broj mobilnog, email...)"]
  let div=document.getElementById("veterinar");
  div.innerHTML+=`<div class="row">`
  for(i=0;i<niz.length;i++){
    document.getElementById("veterinar").innerHTML+=`<div class="col-12 pt-1">
<input id="vet`+i+`" type="`+niz[i]+`"class="form-control" placeholder="`+niz1[i]+`"/></div><div id="veterinar`+i+`" class="">
      </div>`
  }
  div.innerHTML+=`</div>
    <textarea class="form-control mt-1" id="vet2" rows="8"></textarea><div id="veterinar2" class=""></div>
  <button id="dugmeVet" type="button" class="btn btn-secondary btn-sm btn-block mt-2">Pošaljite pitanje</button>`

  document.getElementById("dugmeVet").addEventListener("click", proveraFormeVet)
}

function ispisFootera(){
  let niz=["dokumentacija.pdf","https://nelicaa.github.io/portfolio/", "sitemap.xml"];
  let niz1=["Dokumentacija za predmet web programiranje 1", "Autor sajta", "Sitemap"];
  for(i=0;i<niz.length;i++){
    document.querySelector("footer").innerHTML+=`<div class=" d-flex flex-direction-row align-items-center"><i class="fa fa-paw pr-3"></i><a target="_blank" href="`+niz[i]+`"><p>`+niz1[i]+`</p></a><i class="pl-3 fa fa-paw"></i></div>`
  }
}

function ispisUsluga(){
  let niz=["Nudimo Vam uslugu šetanja Vašeg psa, nevezano od noćenja. Kad god nemate vremena, dovoljno je da pozovete, i mi ćemo to uraditi za vas!", "Takođe je moguće ostaviti psa na par sati, ili čak ni na noć. To je pogotovo dobro ako idete na neko putovanje! Uveravamo Vas da ćemo brinuti o Vašim psima kao što to i Vi radite!", "Imamo program dresure.. Vaš pas će nakon toga moći da priča Vašim jezikom!", "Imamo program i kupanja, šišanja, feniranja, i ostalo za ličnu higijenu!", "Posedujemo puno igračaka, i ostalih sprava zbog kojih će se Vaš pas provesti najbolje do sada, uveravamo Vas!"]
  for(i=0;i<niz.length;i++){
    document.getElementById("4").innerHTML+=`<div class="neparan js-slidein block d-flex align-items-center "><img src="img/usluga`+i+`.png" alt="slikaUsluga`
    +i+`"/> <h5>`+niz[i]+`</h5></div>`
  }
  $('.neparan:odd').css('flex-direction','row-reverse')
  $('.neparan:even').css('flex-direction','row')
}


