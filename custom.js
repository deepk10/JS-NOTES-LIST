
const saveNotes = (text = "") => {
    const notes = document.querySelectorAll(".noteDiv textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    const noteData = JSON.stringify(data);
    localStorage.setItem("notesData", noteData);
}

const addNote = (text = "") => {
    const noteArea = ` <div class="tool">
    <i class="trash fa fa-trash"></i>
    <i class="save fa fa-save"></i>
    </div>
    <div class="box">
    <textarea name="note">`+ text + `</textarea>
    </div>`;
    const main = document.querySelector('.main');
    const note = document.createElement('div');
    note.classList.add("noteDiv");
    note.innerHTML = noteArea;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector(".box").addEventListener(
        "focusout",
        function () {
            saveNotes();
        }
    )
    main.appendChild(note);
}

const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
);

(
    function generateNote() {
        let notesData = localStorage.getItem("notesData");
        notesData = JSON.parse(notesData);
        notesData.forEach(
            (content) => {
                addNote(content);
            }
        )
    }
)()

