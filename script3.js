
function updatePreview(){
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  let markedUpHTML = marked(editorValue);
  previewElement.innerHTML = markedUpHTML;
}

function setDefault(){
let defaultText =`\
# Useful Programme
## a markdown previewer
[Learn more about prograamming](http://www.google.com).
<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\` this is an example of inline text \`

\`\`\`
function exampleOf(){
  return multilineCodeBlock;
}
\`\`\`

- this
- is
- an
- example
- of
- list
- items

>learn to be a progarmmer

![doodle image](https://www.google.com/doodles/doodle-4-google-2018-india-winner)

**Bolded text**`;
  let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked(defaultText);
}
