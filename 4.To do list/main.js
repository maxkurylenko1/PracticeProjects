let addButton = document.getElementById("addNoteButton");
let noteText = document.getElementById("noteInput");
let contentBlock = document.getElementById("contentDiv")
let getMemoryButton = document.getElementById("checkLocalMemory");
let clearMemoryButton = document.getElementById("clearLocalMemory");

let tmpNoteText;
let allNotes;
let remIndex = 0;
let blockIndex = 0;
let oldNoteBlockIndex = 0;
let lStorageArr = [];

for (let i = 0; i < localStorage.length; i++) {
    lStorageArr[i] = localStorage.getItem(i);
}
localStorage.clear();

if (lStorageArr != 0){
    
    for (let i = 0; i < lStorageArr.length; i++) {
        let oldNote = document.createElement("span");
        let oldNoteBlock = document.createElement("div");
        let removeBtn = document.createElement("button");
    
        oldNote.className = "Note";
        oldNoteBlock.className = "NoteBlock";
        removeBtn.className = "RemoveButton";
    
        oldNote.textContent = lStorageArr[i];
        removeBtn.textContent = "X";
    
        removeBtn.addEventListener("click", function removeBlock(){
            let conf = confirm("Are you sure?");

            if (conf) {
                lStorageArr.splice(i, 1);   
                this.parentElement.remove();
                this.removeEventListener("click", removeBlock);
            }    
        })
    
        contentBlock.prepend(oldNoteBlock);
        oldNoteBlock.append(oldNote);  
        oldNoteBlock.append(removeBtn); 
    }

}



addButton.addEventListener("click", function addNote(){
    i = lStorageArr.length;
    tmpNoteText = noteText.value;

    if (tmpNoteText == "") {
        return;
    }

    let newNoteBlock = document.createElement("div");
    let newNote = document.createElement("span");
    let newRemoveButton = document.createElement("button");


    newNoteBlock.id = blockIndex;
    newRemoveButton.id = remIndex;

    newRemoveButton.className = "RemoveButton";
    newNoteBlock.className = "NoteBlock";
    newNote.className = "Note";

    newRemoveButton.textContent = "X";
    newNote.textContent = tmpNoteText;

    lStorageArr[i] = tmpNoteText;
    console.log(`Arr сontent ${lStorageArr} ;`)
    

    contentBlock.prepend(newNoteBlock);
    newNoteBlock.append(newRemoveButton);
    newNoteBlock.append(newNote);

    newRemoveButton.addEventListener("click", function removeBlock(){
        let conf = confirm("Are you sure?");

        if (conf){
            lStorageArr.splice(i, 1);   
            this.parentElement.remove();
            this.removeEventListener("click", removeBlock);
            blockIndex--;
        }
        

    });
    i++;
    blockIndex++;
    console.log(lStorageArr);
});

window.addEventListener("beforeunload", function(){
    for (let i = 0; i < lStorageArr.length; i++) {
        localStorage.setItem(i, lStorageArr[i]);
    }
})

getMemoryButton.addEventListener("click", localStorageMemory);

clearMemoryButton.addEventListener("click", function(){
    localStorage.clear();
});

function localStorageMemory(){
    console.log("<<<<<<<<");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log("key: ", key);
        console.log("value: ", localStorage.getItem(key));
    }
    console.log(">>>>>>>>");
}

function sort(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}

function fillInArr(arr) {
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    arr[i] = key; 
}
}


