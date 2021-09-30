let findBtn = $('#submit');
let meaning = $('#meaning');
let synonyms = $('#synonyms');
let antonyms = $('#antonyms');
let wordToSearch = $('#wordToSearch');
let error = $('#error');
let audio1 = $('#audio');
base_url = ''

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
    base_url = ''
    error.css('display', 'none');
    meaning.css('display', 'none');
    synonyms.css('display', 'none');
    antonyms.css('display', 'none');
    audio1.css('display', 'none')
    if (wordToSearch.val() === "") {
        error.css('display', 'block');
        error.text('Please enter a word');

    } else {
        handleSubmit();
    }
})

function handleSubmit() {
    console.log(wordToSearch.val());
    const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + wordToSearch.val() + '?key=05263739-8ae9-45fe-842c-3a37ed0f181b';
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
                    let mainNear = `<li id="subNear${i}"> </li>`;
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
                checkAudio()

                for (var i = 0; i < data.length; i++) {
                    let txtMain = `<li> <strong style="text-transform: capitalize">${data[i].meta.id}</strong>
                    <ol id="sublist${i}"> </ol> </li>`;
                    meaning.append(txtMain);
                }

                synonyms.css('display', 'block');
                for (var i = 0; i < data.length; i++) {
                    let mainSyn = `<li> <ul id="subSyn${i}"> </ul> </li>`;
                    synonyms.append(mainSyn);
                }

                antonyms.css('display', 'block');
                for (var i = 0; i < data.length; i++) {
                    let mainAnt = `<li> <ul id="subAnt${i}"> </ul> </li>`;
                    antonyms.append(mainAnt);
                }

                for (var k = 0; k < data.length; k++) {
                    var type = data[k]["fl"];
                    var def = data[k]["shortdef"];
                    var syns = data[k]['meta']['syns'];

                    let txtSub = `<li> ${def} [<em>${type}</em>] </li>`;
                    $('#sublist' + k).append(txtSub)

                    let txtSyn = `<li> ${syns} [<em>${type}</em>] </li>`;
                    $('#subSyn' + k).append(txtSyn)

                }
                for (var k = 0; k < data.length; k++) {
                    var ants = data[k]['meta']['ants'];

                    if (ants.length !== 0) {
                        let txtAnt = `<li> ${ants} [<em>${type}</em>] </li>`;
                        $('#subAnt' + k).append(txtAnt)
                    }
                    else {
                        antonyms.css('display', 'none');
                        break;
                        }

                }

            }
        })
        .catch(err => {
            console.log('error: ', err);
        })
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