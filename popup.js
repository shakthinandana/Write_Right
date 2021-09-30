let findBtn = $('#submit');
let meaning = $('#meaning');
let synonyms = $('#synonyms');
let antonyms = $('#antonyms');
let wordToSearch = $('#wordToSearch');
let error = $('#error');
let audio1 = $('#audio');
let Source = $('.translation_inputs');
let Destination = $('.Destination');
let submit = $('#submit');
base_url = ''

language_dict = {
   "achinese": "ace",
   "adyghe": "ady",
   "afrikaans": "af",
   "ainu": "ain",
   "akan": "aka",
   "albanian": "sq",
   "algerian arabic": "ar",
   "amharic": "am",
   "antigua and barbuda creole english": "aig",
   "arabic": "ar",
   "arabic sy": "ar_SY",
   "arabic tn": "ar_TN",
   "aragonese": "an",
   "armenian": "hy",
   "arpitan francoprovenã§al": "frp",
   "assamese": "as",
   "asturian": "ast",
   "aymara": "ay",
   "azerbaijani": "az",
   "azerbaijani ir": "az_IR",
   "bahamas creole english": "bah",
   "bajan": "bjs",
   "balkan gipsy": "rm",
   "balochi": "bal",
   "bashkir": "ba",
   "basque": "eu",
   "belgian french": "fr",
   "bemba": "bem",
   "bengali": "bn",
   "berber": "ber",
   "bhojpuri": "bho",
   "bielarus": "be",
   "bihari": "bh",
   "bilen": "byn",
   "bislama": "bi",
   "bodo": "brx",
   "borama": "gax",
   "bosnian": "bs",
   "breton": "br",
   "bulgarian": "bg",
   "burmese": "my",
   "buryat": "bua",
   "catalan": "ca",
   "catalan valencia": "cav",
   "cebuano": "cb",
   "central kurdish": "ckb",
   "central nahuatl": "nhn",
   "chamorro": "ch",
   "chechen": "ce",
   "cherokee": "chr",
   "chhattisgarhi": "hne",
   "chinese": "zh",
   "chinese en": "zh_en",
   "chinese hk": "zh_hk",
   "chinese traditional": "zh",
   "chinese traditional macau": "zh",
   "chinese wu": "wuu",
   "chinese yue": "yue",
   "chittagonian": "ctg",
   "chukchi": "ckt",
   "chuukese": "chk",
   "chuvash": "cv",
   "classical greek": "grc",
   "comorian ngazidja": "zdj",
   "coptic": "cop",
   "cornish": "kw",
   "corsican": "co",
   "creek": "mus",
   "crimean tatar": "crh",
   "crioulo upper guinea": "pov",
   "croatian": "hr",
   "czech": "cs",
   "danish": "da",
   "dari": "fa",
   "dutch": "nl",
   "dzongkha": "dz",
   "egyptian arabic": "ar",
   "english": "en",
   "english au": "en",
   "english ca": "en",
   "english ie": "en",
   "english in": "en",
   "english nz": "en",
   "english sg": "en",
   "english us": "en",
   "english za": "en",
   "english old": "ang",
   "esperanto": "eo",
   "estonian": "et",
   "ewe": "ee",
   "fanagalo": "fn",
   "faroese": "fo",
   "farsi": "pes",
   "fijian": "fj",
   "filipino": "fil",
   "finnish": "fi",
   "flemish": "nl",
   "french": "fr",
   "french ch": "fr",
   "friulian": "fur",
   "fulah": "ff",
   "galician": "gl",
   "gamargu": "mfi",
   "ganda": "lg",
   "garo": "grt",
   "georgian": "ka",
   "german": "de",
   "german at": "de",
   "glavda": "glw",
   "greek": "el",
   "grenadian creole english": "gcl",
   "guarani": "gn",
   "gujarati": "gu",
   "guyanese creole english": "gyn",
   "haitian creole french": "ht",
   "hausa": "ha",
   "hawaiian": "haw",
   "hebrew": "he",
   "higi": "hig",
   "hiligaynon": "hil",
   "himachali": "him",
   "hindi": "hi",
   "hmong": "hmn",
   "hungarian": "hu",
   "hunsrik": "hrx",
   "icelandic": "is",
   "ido": "io",
   "igbo": "ig",
   "ilokano": "ilo",
   "indonesian": "id",
   "ingush": "inh",
   "interlingua": "ia",
   "interlingue": "ie",
   "inuktitut": "iu",
   "inuktitut greenlandic": "kl",
   "irish gaelic": "ga",
   "italian": "it",
   "italian ch": "it",
   "jagoi": "sne",
   "jamaican creole english": "jam",
   "japanese": "ja",
   "javanese": "jv",
   "kabardian": "kbd",
   "kabuverdianu": "kea",
   "kabylian": "kab",
   "kalenjin": "kln",
   "kalmyk": "xal",
   "kamba": "kam",
   "kannada": "kn",
   "kanuri": "kr",
   "kashmiri": "ks",
   "kashubian": "csb",
   "kazakh": "kk",
   "khmer": "km",
   "khoekhoe": "naq",
   "kiche": "quc",
   "kikuyu": "kik",
   "kinyarwanda": "rw",
   "kiribati": "gil",
   "kirundi": "rn",
   "kisii": "guz",
   "klingon": "tlh",
   "kongo": "kg",
   "konkani": "kok",
   "korean": "ko",
   "kotava": "avk",
   "kurdish": "ku",
   "kurdish sorani": "ku",
   "kyrgyz": "ky",
   "kã¶lsch": "ksh",
   "ladin": "lld",
   "lao": "lo",
   "latgalian": "ltg",
   "latin": "la",
   "latvian": "lv",
   "ligurian": "lij",
   "limburgish": "li",
   "lingala": "ln",
   "literary chinese": "lzh",
   "lithuanian": "lt",
   "lojban": "jbo",
   "low german": "nds",
   "lower sorbian": "dsb",
   "luganda": "lug",
   "luhya": "luy",
   "luo": "luo",
   "luxembourgish": "lb",
   "maa": "mas",
   "macedonian": "mk",
   "maithili": "mai",
   "malagasy": "mg",
   "malay": "ms",
   "malay papuan": "pmy",
   "malayalam": "ml",
   "maldivian": "dv",
   "maltese": "mt",
   "mandara": "mfi",
   "mandarin chinese": "cmn",
   "manipuri": "mni",
   "manx gaelic": "gv",
   "maori": "mi",
   "mapudungun": "arn",
   "marathi": "mr",
   "mari": "mhr",
   "marshallese": "mh",
   "mende": "men",
   "meru": "mer",
   "mesopotamic arabic": "acm",
   "middle french": "frm",
   "mijikenda": "nyf",
   "mizo": "lus",
   "mongolian": "mn",
   "montenegrin": "srp",
   "morisyen": "mfe",
   "moroccan arabic": "ar",
   "mã­n nan chinese": "nan",
   "mã­skito": "miq",
   "n'ko": "nqo",
   "nahuatl": "nah",
   "ndau": "ndc",
   "ndebele": "nd",
   "ndebele south": "nr",
   "neapolitan": "nap",
   "nepali": "ne",
   "nepali individual": "npi",
   "niuean": "niu",
   "northern sami": "se",
   "northern sesotho": "nso",
   "norwegian": "no",
   "norwegian bokmal": "nb",
   "norwegian nynorsk": "nn",
   "novial": "nov",
   "nyanja": "ny",
   "occitan": "oc",
   "occitan aran": "oc",
   "odia": "ory",
   "ojibwe": "oj",
   "old norse": "non",
   "old russian": "orv",
   "oriya": "or",
   "oromo": "om",
   "ossetian": "os",
   "pakistani": "ur",
   "palauan": "pau",
   "pali": "pi",
   "pampanga": "pam",
   "panjabi": "pa",
   "panjabi pk": "pnb",
   "papiamentu": "x1",
   "pashto": "ps",
   "persian": "fa",
   "picard": "pcd",
   "piemontese": "pms",
   "pijin": "pis",
   "polish": "pl",
   "portuguese": "pt",
   "portuguese brazil": "pt",
   "potawatomi": "pot",
   "prussian": "prg",
   "quebecois": "fr",
   "quechua": "qu",
   "quenya": "qya",
   "rohingya": "rhg",
   "rohingyalish": "rhl",
   "romanian": "ro",
   "romansh": "roh",
   "romany": "rom",
   "russian": "ru",
   "saint lucian creole french": "acf",
   "sama": "sml",
   "samoan": "sm",
   "sango": "sg",
   "sanskrit": "sa",
   "sardinian": "sc",
   "scots": "sco",
   "scots gaelic": "gd",
   "sena": "seh",
   "serbian": "sr",
   "serbian me": "sr",
   "serbo-croatian": "sh",
   "seselwa creole french": "crs",
   "setswana": "tn",
   "shan": "shn",
   "shona": "sn",
   "shuswap": "shs",
   "sicilian": "scn",
   "silesian": "szl",
   "sindarin": "sjn",
   "sindhi": "sd",
   "sinhala": "si",
   "slovak": "sk",
   "slovenian": "sl",
   "somali": "so",
   "songhai": "son",
   "sotho southern": "st",
   "spanish": "es",
   "spanish ar": "es",
   "spanish america": "es",
   "spanish cl": "es",
   "spanish cr": "es",
   "spanish colombian": "col",
   "spanish do": "es",
   "spanish ec": "es",
   "spanish gt": "es",
   "spanish hn": "es",
   "spanish latam": "es",
   "spanish latin america": "es",
   "spanish ni": "es",
   "spanish pa": "es",
   "spanish pe": "es",
   "spanish pr": "es",
   "spanish sv": "es",
   "spanish us": "es",
   "spanish uy": "es",
   "spanish ve": "es",
   "sranan tongo": "srn",
   "standard malay": "zsm",
   "sundanese": "su",
   "swahili": "sw",
   "swahili macrolanguage": "swh",
   "swedish": "sv",
   "swiss german": "de",
   "syriac aramaic": "syc",
   "syriac macrolanguage": "syr",
   "tagalog": "tl",
   "tahitian": "ty",
   "tai mã¨ne": "tmp",
   "tajik": "tg",
   "tamashek": "tmh",
   "tamil": "ta",
   "tamil india": "ta",
   "taroko": "trv",
   "tatar": "tt",
   "telugu": "te",
   "tetum": "tet",
   "thai": "th",
   "tibetan": "bo",
   "tigrinya": "ti",
   "tok pisin": "tpi",
   "tokelauan": "tkl",
   "toki pona": "art",
   "tongan": "to",
   "tshiluba": "lua",
   "tsonga": "ts",
   "tswa": "tsc",
   "tswana": "tn",
   "tupã­": "tpw",
   "turkish": "tr",
   "turkmen": "tk",
   "tuvaluan": "tvl",
   "udmurt": "udm",
   "uighur": "ug",
   "ukrainian": "uk",
   "uma": "ppk",
   "upper sorbian": "hsb",
   "uzbek": "uz",
   "venda": "ve",
   "venetian": "vec",
   "vietnamese": "vi",
   "vincentian creole english": "svc",
   "virgin islands creole english": "vic",
   "volapã¼k": "vo",
   "wallisian": "wls",
   "walloon": "wa",
   "walser": "wae",
   "wayuu": "guc",
   "welsh": "cy",
   "western frisian": "fy",
   "wolof": "wo",
   "xhosa": "xh",
   "yiddish": "yi",
   "yoruba": "yo",
   "zaza": "zza",
   "zulu": "zu"
}

// chrome.tabs.executeScript(integer tabId(optional, default: current window), object details, function callback)

chrome.tabs.executeScript({
    code: 'window.getSelection().toString();'
},
    selection => {
        console.log(selection[0]);
        if (selection)
            wordToSearch.val(selection[0]);
        else
            wordToSearch.val("");
    }
);

document.addEventListener('keydown', key => {
    let code = key.keyCode;
    if (code == 13) {
        console.log("Enter key pressed");
        meaning.empty();
        synonyms.empty();
        antonyms.empty();
        base_url = ''
        if (wordToSearch.val() === "") {
            meaning.css('display', 'none');
            synonyms.css('display', 'none');
            antonyms.css('display', 'none');
            audio1.css('display', 'none')
            error.css('display', 'block');
            error.text('Please enter a word');

        } else {
            findBtn.click();
        }
    }
});

findBtn.click(() => {
    meaning.empty();
    synonyms.empty();
    antonyms.empty();
    base_url = '';
    error.css('display', 'none')
    meaning.css('display', 'none')
    synonyms.css('display', 'none');
    antonyms.css('display', 'none');
    audio1.css('display', 'none');
    if (wordToSearch.val() === "") {
        meaning.empty();
        error.css('display', 'block');
        error.text('Please enter a word');

    } else {
        handleSubmit();
    }
})

function handleSubmit() {
    let str = String(wordToSearch.val()).toLowerCase();
    if(document.getElementById("submit").innerText === "Search"){
        console.log(str);
        const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + str + '?key=05263739-8ae9-45fe-842c-3a37ed0f181b';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (Object.keys(data).length === 0) {
                    error.css('display', 'block');
                    error.text('No such word was found');

                } else if (data[0]['meta'] === undefined) {
                    error.css('display', 'block');
                    error.text('Word not found. Did you mean to type any of these?');

                    synonyms.css('display', 'block');
                    for (var i = 0; i < data.length; i++) {
                        let mainNear = `<li> <ol id="subNear${i}"> </ol> </li>`;
                        synonyms.append(mainNear);
                    }

                    for (var k = 0; k < data.length; k++) {
                        var nearWords = data[k];

                        let txtNear = `<li> ${nearWords} </li>`;
                        $('#subNear' + k).append(txtNear)
                    }


                } else {
                    meaning.css('display', 'block');
                    meaning.append('Searching ...');
                    meaning.empty();
                    checkAudio();
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].meta.id == str){
                            let txtMain = `<li> <strong style="text-transform: capitalize">${data[i].meta.id}</strong>
                            <i> ${data[i].fl}</i><li id="sublist${i}"> </li> </li>`;
                            meaning.append(txtMain);
                        }
                    }

                    synonyms.css('display', 'block');
                    synonyms.append('<li><strong style="text-transform: capitalize">Synonyms</strong></li>');
                    for (var i = 0; i < data.length; i++) {
      
                      if(data[i].meta.id == str){
                          let mainSyn = `<li> <ul id="subSyn${i}"> </ul> </li>`;
                          synonyms.append(mainSyn);
                      }
                    }

                    antonyms.css('display', 'block');
                    antonyms.append('<li><strong style="text-transform: capitalize">Antonyms</strong></li>');
                    for (var i = 0; i < data.length; i++) {
                      
                      if(data[i].meta.id == str){
                        let mainAnt = `<li> <ul id="subAnt${i}"> </ul> </li>`;
                        antonyms.append(mainAnt);
                      }
                    }

                    for (var k = 0; k < data.length; k++) {
                        var type = data[k]["fl"];
                        var def = data[k]["shortdef"];

                        let txtSub = `<li> ${def} </li>`;
                        $('#sublist' + k).append(txtSub)
                    }

                    for (var k = 0; k < data.length; k++) {
                        for (j = 0; j < data[k]['meta']['syns'].length; j++) {
                            var syns = data[k]['meta']['syns'][j];

                            syns = syns.slice(0, 5);
                            let txtSyn = `<li> ${syns} [<em>${type}</em>] </li>`;
                            $('#subSyn' + k).append(txtSyn)
                        }

                    }

                    labelAnts:
                    for (var k = 0; k < data.length; k++) {
                        for (j = 0; j < data[k]['meta']['ants'].length; j++) {
                            var ants = data[k]['meta']['ants'][j];

                            ants = ants.slice(0, 5);
                            if (ants.length !== 0) {
                                let txtAnt = `<li> ${ants} [<em>${type}</em>] </li>`;
                                $('#subAnt' + k).append(txtAnt)
                            } else {
                                antonyms.css('display', 'none');
                                break labelAnts;
                            }
                        }

                    }

                }
            })
            .catch(err => {
                console.log('error: ', err);
            })
        } else {
            in_lang = language_dict[String(document.getElementById("Source").value).toLowerCase()]
            out_lang = language_dict[String(document.getElementById("Destination").value).toLowerCase()]
            if (in_lang == out_lang) {
                error.css('display', 'block')
                error.text('Enter 2 distinct languages')
            } else {
                const url = 'https://api.mymemory.translated.net/get?q=' + str + '!&langpair=' + in_lang + '|' + out_lang
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.responseData);
                        if (data.responseData.hasOwnProperty('match')) {
                            meaning.css('display', 'block')
                            meaning.append(data.responseData.translatedText)
                        } else {
                            error.css('display', 'block')
                            error.text('Input and output languages incorrect')
                        }
                    })
                }
        }
}

document.getElementById("playaudio").addEventListener("click", playAudio);

function checkAudio() {
  const url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/' + wordToSearch.val() + '?key=7a38e9d2-6aee-4970-b660-dfa0109b8579'
  fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data[0].hasOwnProperty('hwi')) {
                audio1.css('display', 'block');
                var basefile = data[0].hwi.prs[0].sound.audio;
                base_url = 'https://media.merriam-webster.com/audio/prons/en/us/mp3/' +basefile[0]+ '/' + basefile + '.mp3';
            } else {
                audio1.css('display', 'none');            
            }
        })
  }

function playAudio() {
  var audio = new Audio(base_url);
  return audio.paused ? audio.play() : audio.pause();
  }

document.getElementById("Translate").addEventListener("click", displaychange);

function displaychange() {
    if (Translate.checked) {
        meaning.empty();
        synonyms.empty();
        antonyms.empty();
        base_url = '';
        error.css('display', 'none')
        meaning.css('display', 'none')
        synonyms.css('display', 'none');
        antonyms.css('display', 'none');
        audio1.css('display', 'none');
        document.getElementById("submit").innerText= "Translate";
        Source.css('display', 'inline-block');
    } else {
        Source.css('display', 'none');
        document.getElementById("submit").innerText= "Search";
    }
}

