function scrollToBottom() {
    console.log('Scroll');
    window.scrollTo(0,document.body.scrollHeight);
}

function saveLinkToJSON() {
    console.log('Save');
    var paragraphs = document.getElementsByTagName('p');
    let demo = document.getElementById('demo');
    demo.hidden = false;
    demo.innerHTML = `${paragraphs.length}`;
    // let paras = {};

    // for (const key in paragraphs) {
    //     if (Object.hasOwnProperty.call(paragraphs, key)) {
    //         const element = paragraphs[key];
    //         console.log(key);
    //     }
    // }
    // const fetch = require('node-fetch');

    // const url = "https://www.something.com/.../image.jpg"

    // async function download() {
    // const response = await fetch(url);
    // const buffer = await response.buffer();
    // fs.writeFile(`./image.jpg`, buffer, () => 
    //     console.log('finished downloading!'));
    // }
}

function downloadURL(url, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }
  
  function downloadFile() {
    var data = "okay this is epic";
    var blob = new Blob([data], {type: 'text/txt'});
    var url  = window.URL.createObjectURL(blob);
    downloadURL(url, "test.txt");
  }