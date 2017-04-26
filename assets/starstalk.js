$ = jQuery;

$(document).ready(function() {
    var max_fields      = 10; //Maximum input boxes allowed
    var wrapper         = $("#newfield"); //ID where the code will be included
    var add_button      = $("#add_new_field_stars");
    var add_button_2      = $("#add_new_field_text");
   
    var x = 1; //initlal text box count
    $(add_button_2).click(function(e){ //on add input button click
        e.preventDefault();
        $(wrapper).empty();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="ibm-col-6-3"><p class="ibm-h4 ibm-bold">Stars positions</p><form id="inputform" class="ibm-column-form"><textarea cols="100" rows="8" id="texto" name="text"></textarea></form></div><div class="ibm-col-6-3"><p class="ibm-h4 ibm-bold">Text</p><form id="outform" class="ibm-column-form"><textarea cols="100" rows="8" id="texto2" name="answer"></textarea></form></div><div class="ibm-col-6-3 ibm-padding-top-r1 ibm-padding-bottom-r1"><p class="ibm-btn-row ibm-padding-bottom-0"><a href="javascript:void(0);" value="Traduzir" onclick="starsText()" class="ibm-btn-pri ibm-margin-bottom-0 ibm-btn-blue-50">Translate</a><a href="javascript:void(0);" value="reset" onclick="clearFunction()" class="ibm-btn-sec ibm-margin-bottom-0 ibm-btn-blue-50">Clear</a></p></div><div class="ibm-col-6-3 ibm-padding-top-r1 ibm-padding-bottom-r1"><p class="ibm-btn-row ibm-padding-bottom-0 ibm-right"><a onclick="window.history.back()" class="ibm-btn-pri ibm-btn-blue-50" href="javascript:void(0);">Back to menu</a></p></div>');
        }
    });
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        $(wrapper).empty();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="ibm-col-6-3"><p class="ibm-h4 ibm-bold">Text</p><form id="inputform" class="ibm-column-form"><textarea cols="100" rows="8" id="texto" name="text"></textarea></form></div><div class="ibm-col-6-3"><p class="ibm-h4 ibm-bold">Stars positions</p><form id="outform" class="ibm-column-form"><textarea cols="100" rows="8" id="texto2" name="answer"></textarea></form></div><div class="ibm-col-6-3 ibm-padding-top-r1 ibm-padding-bottom-r1"><p class="ibm-btn-row ibm-padding-bottom-0"><a href="javascript:void(0);" value="Traduzir" onclick="starTalk()" class="ibm-btn-pri ibm-margin-bottom-0 ibm-btn-blue-50">Translate</a><a href="javascript:void(0);" value="reset" onclick="clearFunction()" class="ibm-btn-sec ibm-margin-bottom-0 ibm-btn-blue-50">Clear</a></p></div><div class="ibm-col-6-3 ibm-padding-top-r1 ibm-padding-bottom-r1"><p class="ibm-btn-row ibm-padding-bottom-0 ibm-right"><a onclick="window.history.back()" class="ibm-btn-pri ibm-btn-blue-50" href="javascript:void(0);">Back to menu</a></p></div>');
        }
    });
});


function clearFunction() {
    document.getElementById("inputform").reset();
    document.getElementById("outform").reset();
}

function starTalk ()
{
    var str=document.getElementById("texto").value
    res="";

    for(i=0; i<=str.length; i++){
    //pega o char da posiÃ§Ã£o i    para analisar
    char=str.substr(i , 1);
    
    switch (char){
            //VERIFICA SE REALMENTE NECESSITA ANALISAR O CHAR :
            case ' ' : break; 
            case ',' : break;
            case '.' : break;
            case '`' : break;
            case '(' : break;
            case ')' : break;
            case '?' : break;
            case '!' : break;
            case ':' : break;
            case '+' : break;
            case '-' : break;
            
            //MAIUSCULAS
            case 'A': char='HIP 60260'; break;
            case 'B': char='HIP 25336'; break;
            case 'C': char='HIP 23875'; break;
            case 'D': char='HIP 59747'; break;
            case 'E': char='HIP 100881'; break;
            case 'F': char='HIP 30122'; break;
            case 'G': char='HIP 61084'; break;
            case 'H': char='HIP 9236'; break;
            case 'I': char='HIP 60718'; break;
            case 'J': char='HIP 79431'; break;
            case 'K': char='HIP 85819'; break;
            case 'L': char='HIP 88567'; break;
            case 'M': char='HIP 15863'; break;
            case 'N': char='HIP 37447'; break;
            case 'O': char='HIP 17499'; break;
            case 'P': char='HIP 44127'; break;
            case 'Q': char='Kepler 22b'; break;
            case 'R': char='Sol'; break;
            case 'S': char='HIP 24436'; break;
            case 'T': char='HIP 26634'; break;
            case 'U': char='HIP 77070'; break;
            case 'V': char='HIC 91262'; break;
            case 'X': char='XO-4'; break;
            case 'Z': char='HIP 18543'; break;
            case 'W': char='HIP 34444'; break;
            case 'Y': char='HIP 85822'; break;
            //MINUSCULAS
            case 'a': char='hip 60260'; break;
            case 'b': char='hip 25336'; break;
            case 'c': char='hip 23875'; break;
            case 'd': char='hip 59747'; break;
            case 'e': char='hip 100881'; break;
            case 'f': char='hip 30122'; break;
            case 'g': char='hip 61084'; break;
            case 'h': char='hip 9236'; break;
            case 'i': char='hip 60718'; break;
            case 'j': char='hip 79431'; break;
            case 'k': char='hip 85819'; break;
            case 'l': char='hip 88567'; break;
            case 'm': char='hip 15863'; break;
            case 'n': char='hip 37447'; break;
            case 'o': char='hip 17499'; break;
            case 'p': char='hip 44127'; break;
            case 'q': char='kepler 22b'; break;
            case 'r': char='sol'; break;
            case 's': char='hip 24436'; break;
            case 't': char='hip 26634'; break;
            case 'u': char='hip 77070'; break;
            case 'v': char='hic 91262'; break;
            case 'x': char='xo-4'; break;
            case 'z': char='hip 18543'; break;
            case 'w': char='hip 34444'; break;
            case 'y': char='hip 85822'; break;
        }
    res=res+char;
    }
    document.getElementById("texto2").value=res;
}

function starsText ()
{
    var str=document.getElementById("texto").value;

    var mapObj = {
         //MAIUSCULA
         "HIP 60260": "A",
         "HIP 25336": "B",
         "HIP 23875": "C",
         "HIP 59747": "D",
         "HIP 100881": "E",
         "HIP 30122": "F",
         "HIP 61084": "G",
         "HIP 9236": "H",
         "HIP 60718": "I",
         "HIP 79431": "J",
         "HIP 85819": "K",
         "HIP 88567": "L",
         "HIP 15863": "M",
         "HIP 37447": "N",
         "HIP 17499": "O",
         "HIP 44127": "P",
         "Kepler 22b": "Q",
         "Sol": "R",
         "HIP 24436": "S",
         "HIP 26634": "T",
         "HIP 77070": "U",
         "HIC 91262": "V",
         "XO-4": "X",
         "HIP 18543": "Z",
         "HIP 34444": "W",
         "HIP 85822": "Y",
         //MINUSCULAS
         "hip 60260": "a",
         "hip 25336": "b",
         "hip 23875": "c",
         "hip 59747": "d",
         "hip 100881": "e",
         "hip 30122": "f",
         "hip 61084": "g",
         "hip 9236": "h",
         "hip 60718": "i",
         "hip 79431": "j",
         "hip 85819": "k",
         "hip 88567": "l",
         "hip 15863": "m",
         "hip 37447": "n",
         "hip 17499": "o",
         "hip 44127": "p",
         "kepler 22b": "q",
         "sol": "r",
         "hip 24436": "s",
         "hip 26634": "t",
         "hip 77070": "u",
         "hic 91262": "v",
         "xo-4": "x",
         "hip 18543": "z",
         "hip 34444": "w",
         "hip 85822": "y"
    }
    str = str.replace(/HIP 60260|HIP 25336|HIP 23875|HIP 59747|HIP 100881|HIP 30122|HIP 61084|HIP 9236|HIP 60718|HIP 79431|HIP 85819|HIP 88567|HIP 15863|HIP 37447|HIP 17499|HIP 44127|Kepler 22b|Sol|HIP 24436|HIP 26634|HIP 77070|HIC 91262|XO-4|HIP 18543|HIP 34444|HIP 85822|hip 60260|hip 25336|hip 23875|hip 59747|hip 100881|hip 30122|hip 61084|hip 9236|hip 60718|hip 79431|hip 85819|hip 88567|hip 15863|hip 37447|hip 17499|hip 44127|kepler 22b|sol|hip 24436|hip 26634|hip 77070|hic 91262|xo-4|hip 18543|hip 34444|hip 85822/gi, function(matched){
      return mapObj[matched];
    });

    document.getElementById("texto2").value=str;
}