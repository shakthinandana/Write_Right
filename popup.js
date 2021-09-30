let findBtn = $('#submit');
let meaning = $('#meaning');
let synonyms = $('#synonyms');
let antonyms = $('#antonyms');
let wordToSearch = $('#wordToSearch');
let error = $('#error');

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
        if (wordToSearch.val() === "") {
            meaning.empty();
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
    meaning.css('display', 'none')
    error.css('display', 'none')
    synonyms.css('display', 'none');
    antonyms.css('display', 'none')

    if (wordToSearch.val() === "") {
        meaning.empty();
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

                for (var i = 0; i < data.length; i++) {
                    let txtMain = `<li> <strong style="text-transform: capitalize">${data[i].meta.id}</strong>
                    <ol id="sublist${i}"> </ol> </li>`;
                    meaning.append(txtMain);
                }

                synonyms.css('display', 'block');
                synonyms.append('Synonyms');
                for (var i = 0; i < data.length; i++) {
                    let mainSyn = `<li> <ul id="subSyn${i}"> </ul> </li>`;
                    synonyms.append(mainSyn);
                }

                antonyms.css('display', 'block');
                antonyms.append('Antonyms');
                for (var i = 0; i < data.length; i++) {
                    let mainAnt = `<li> <ul id="subAnt${i}"> </ul> </li>`;
                    antonyms.append(mainAnt);
                }

                for (var k = 0; k < data.length; k++) {
                    var type = data[k]["fl"];
                    var def = data[k]["shortdef"];

                    let txtSub = `<li> ${def} [<em>${type}</em>] </li>`;
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

                for (var k = 0; k < data.length; k++) {
                    for (j = 0; j < data[k]['meta']['ants'].length; j++) {
                        var ants = data[k]['meta']['ants'][j];

                        ants = ants.slice(0, 5);
                        if (ants.length !== 0) {
                            let txtAnt = `<li> ${ants} [<em>${type}</em>] </li>`;
                            $('#subAnt' + k).append(txtAnt)
                        } else {
                            antonyms.css('display', 'none');
                            break;
                        }
                    }

                }

            }
        })
        .catch(err => {
            console.log('error: ', err);
        })
}
