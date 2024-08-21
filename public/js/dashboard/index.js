let container = document.getElementById("snippet-wrapper");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let addNewCode = document.getElementById("addNewCode");
let closePopUp = document.getElementById("closePopUp");
let codeArea = document.getElementById("codeArea");
let pasteCodeArea = document.getElementById("pasteCodeArea");
let savePopup = document.getElementById("savePopup");
let pasteTitleArea = document.getElementById("pasteTitleArea");
let titles_Left_Container = document.getElementById("titlesContainer");
let titleArea = document.getElementById("titleArea");
var counter = 0;

// codemirror make text field as code editor
var editor = CodeMirror.fromTextArea(document.getElementById("pasteCodeArea"), {
  lineNumbers: true,
  mode: "xml",
  theme: "default",
});

let title_Left_panel = `
  <div class="title_Wrapper">
    <div class="title_Container">
      <p id="leftTitle"></p>
    </div>
    <div class="dots_Container">
      <img src="/Images/dots.png" alt="" />
    </div>
  </div>`;

let snippet = `
  <div id="snippet" class="code_Snippet_Container">
    <div class="title_Wrapper">
      <h3 id="titleArea"></h3>
      <div class="button_Area">
        <img id="copy" src="/Images/copy.png" alt="" />
        <img id="counter" src="Images/edit.png" alt="" />
        <img class="delete" id="delete" src="Images/delete.png" alt="" />
      </div>
    </div>
    <div class="code_Wrapper">
      <div class="code_Area">
        <pre id="codeAreaSnip"></pre>
      </div>
    </div>
    <div class="helper_Wrapper">
      <p>Copied: 63 times</p>
      <p>Created: 27-02-2024</p>
      <p>Lines of Code: 44</p>
    </div>
  </div>`;

// SHOW POPUP CONTAINER & APPLY OVERLAY
addNewCode.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
});

// CLOSE POPUP CONTAINER
closePopUp.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
  editor.setValue("");
  pasteTitleArea.value = "";
});

// CATCH VALUE FROM POPUP INPUT
// Show pasteCodeArea code text in code snippet code area
savePopup.addEventListener("click", () => {
  document.querySelector(".container_PlaceHolder").style.display = "none";

  // ADD TITLE TO THE LEFT SIDE PANEL
  titles_Left_Container.innerHTML += title_Left_panel;
  var newTitle = titles_Left_Container.lastElementChild;
  let title_text = newTitle.querySelector("#leftTitle");
  title_text.innerHTML = pasteTitleArea.value;

  // create new snippet in main container right side
  container.innerHTML += snippet;
  var code = editor.getValue();
  var newSnippet = container.lastElementChild;
  var snippetCodeArea = newSnippet.querySelector("#codeAreaSnip");
  snippetCodeArea.textContent = code;

  // ASSIGN EACH NEW SNIPPET A UNIQUE ID
  var snipContainer = document.getElementById("snippet");
  snipContainer.id = counter;

  // Give snippet title value of popup title
  var snippetTitleArea = newSnippet.querySelector("#titleArea");
  snippetTitleArea.innerHTML = pasteTitleArea.value;

  // ASSIGN DELETE BUTTON SAME ID AS NEW SNIPPET ID
  var deleteIt = document.getElementsByClassName("delete");
  deleteIt.id = counter;
  counter += 1;

  // DELETE AN ELEMENT IF ID OF SNIPPET AND DELETE BUTTON MATCHES
  for (i = 0; i < deleteIt.length; i++) {
    deleteIt[i].addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        e.target.parentNode.parentNode.parentNode.remove();
        status.style.display = "block";
        setTimeout(() => {
          status.style.display = "none";
        }, "1500");
      }
    });
  }

  // Copy the code
  var copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(snippetCodeArea.innerText);
    alert("Copied!");
  });

  // hide the pop up container after clicking save and reset values
  popup.style.display = "none";
  overlay.style.display = "none";
  pasteTitleArea.value = "";
  editor.setValue("");
});
