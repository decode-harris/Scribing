/*
    Note Taking Application

    global variables :
        -create [ new note button ]
        -save [ save note button ] 
        -form [ form note element ]
        -list [ notes append element ]

    click events :
        -create [ create a new note ]
        -save [ save the current note ]
        -edit [ change save button to edit, edit the selected note ]

    app functions :
        -createNotes [ create note component ]
        -editNotes [ edit selected note ]
        -deleteNotes [ discard current empty note ]
        -defaultProperties [ set application default properties ]
    
*/ 

// form [ form ] selector
const form = document.querySelector('#form');
// ul [ list ] selector
const list = document.querySelector('#list')
// button [ create ] selector
const create = document.querySelector('#create');
// select all [ notes ] list element
let notes = document.querySelectorAll('.notes');

// select title & text values
let title = document.querySelector('#title');
let text = document.querySelector('#text');
// create helper text for empty list
let helper = document.createElement('p');

// click event [ create ] button
create.addEventListener('click', ()=> {

    // validate display property [ form ]
    if (form.style.display != 'flex') {
        form.style.display = 'flex';

        title.value = '';
        text.value = '';
    }
    else {
        // alert helper
        alert('note is already active');
    }
});

// button [ save ] selector
const save = document.querySelector('#save');

// click event [ save ] button
save.addEventListener('click', (e)=> {

    // prevent form submit
    e.preventDefault();

    // init [ validateForm ] function
    validateForm();

});

// function [ validateForm ]
validateForm = () => {

    if (title.value === '' || title.value === null && text.value === '' || text.value === null) {
        
        // init [ deleteNote ] function
        deleteNote();

        // alert helper
        alert('empty note has been discarded');

        // test
        console.log('validate : delete note');

        return
    }
    if (title.value === '' && text.value != '') {

        // init [ createNotes ] function
        createNotes();

    }
    // validate number of notes appended to list element
    if (notes.length >= 0 && notes.length < 1) {

        // init [ createNotes ] function
        createNotes();

        // get title & text values
        console.log('title : ' + title.value +  ' , ' + 'text : ' + text.value);

        // test PROCESS 
        console.log('validate : create note');

        // test
        console.log('FUNCTION VALIDATE FORM : notes length validation');

        return
    }
    else {

        // helper alert 
        alert('too many notes have been created');
    }

    // test PROCESS
    console.log('function : validate');

}

// function [ createNotes ]
createNotes = () => {

    // select title & text input values
    let title = document.querySelector('#title');
    let text = document.querySelector('#text');

    // create the note element
    let note = document.createElement('li');
    let noteTitle = document.createElement('h4');
    let noteText = document.createElement('p');

    // assign note attributes & classes
    note.className = 'notes';
    noteTitle.className = 'title';
    noteText.className = 'text';
    
    // assign input values to note elements
    noteTitle.innerHTML = title.value;
    noteText.innerHTML = text.value;

    // attach title & text values to note element
    note.appendChild(noteTitle);
    note.appendChild(noteText);

    // attach the note element to the list HTML grid element
    list.appendChild(note);

    // test data pass-through
    console.log('create : title = ' + title.value);
    console.log('create : text = ' + text.value);

    // validate form display properties
    if (form.style.display != 'none') {

        // assign form display back to default [ none ]
        form.style.display = 'none';

        // init [ editNotes ] function
        editNotes();

        // test
        console.log('validate : form elements removed');

    }
    // validate title & text values
    if (title.value != '' && text.value === '') {

        // remove helper from view
        list.removeChild(helper);

    }
    
    // test PROCESS
    console.log('function : CREATE NOTES');
}

// function [ editNotes ] 
editNotes = () => {

    // set [ save ] button ID as [ edit ] button ID
    save.id = 'edit';
    
    // select all current [ notes ] elements
    let notes = document.querySelectorAll('.notes');

    // forEach [ notes ]
    notes.forEach(element => {

        // click event [ notes ]
        element.addEventListener('click', ()=> {

            // set an editing variable
            let editing = 'editing';
            
            // set element ID to editing value
            element.id = editing;

            form.style.display = 'flex';

            // validate the ID of the selected [ editing ] element
            if (element.id === editing) {
                // remove editing element
                element.style.display = 'none';
                // assign element ID back to default [ empty string ]
                element.id = '';
            }
        
        });

    });

    // validate current value of title & text
    if (title.value === '' || title.value === null && text.value === '' || text.value === null) {
        
        // init [ deleteNote ] function
        deleteNote();

        // test
        console.log('assign input value as edit title');

        return
    }
    // test data values
    console.log('FUNCTION EDIT NOTES : title value = ' + title);
            
    // select [ edit ] button once created
    let edit = document.querySelector('#edit');
    console.log('edit notes : event btn = ' + edit);

    // click event [ edit ] button
    edit.addEventListener('click', (e)=> {

        if (title.value != '' && text.value === '' || title.value != '' && text.value != '') {

            // select only the [ editing ] title & text values
            let title = document.querySelector('#title');
            let text = document.querySelector('#text');
            // let editText = document.querySelector('#editing .text');
            // test
            console.log('FUNCTION EDIT NOTES : edit title = ' + title.value);
            console.log('FUNCTION EDIT NOTES : edit text = ' + text.value);

            console.log('TITLE no empty && TEXT empty');

            return
        }

        // remove helper element
        list.removeChild(helper);

        // prevent form submit
        e.preventDefault();
        
        // test
        console.log('FUNCTION EDIT : edit button event');

    });

    // test
    console.log('function : EDIT NOTES');

}

// function [ deleteNote ] 
deleteNote = () => {
    // set form display to none
    form.style.display = 'none';

    // validate length of notes on load
    if (notes.length === 0) {

        // set a helper element on load
        helper.id = 'helper';
        helper.className = 'helper';
        helper.innerText = 'looks a little empty here... ' + ' Click the plus to get started';

        // append helper element
        list.appendChild(helper);
    }
    else {
        // remove helper element
        list.removeChild(helper);
    }
    // test
    console.log('FUNCTION : DELETE NOTE');
}

// function [ defaultProperties ]
defaultProperties = () => {
    // set a helper element on load
    helper.id = 'helper';
    helper.className = 'helper';
    helper.innerText = 'looks a little empty here... ' + ' Click the plus to get started';

    // append helper to [ list ] element
    list.appendChild(helper);

    // remove page elements
    form.style.display = 'none';
    
    // test PROCESS
    console.log('defaultProperties :  active');
}
// int function [ defaultProperties ]
defaultProperties();