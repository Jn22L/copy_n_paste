
// css 색상
 .hjboard-view-node-selected {
        background-color: yellow;
}
      


// js 글자색

    divViewValueContent.innerHTML = resData[0].CONTENT.replace(/#(\S*)/g, "<b><span data-hash-tag='#' style='color:#34A853;'>$1</span></b>"); // #123 -> <span>#123</span>

    divViewValueContent.setAttribute("class", "hjboard-view-value-content");
    liViewRowContent.appendChild(divViewValueContent);

    divViewValueContent.addEventListener("click", function (e) {
      let tag = e.target;
      console.log("target", tag);
      console.log("target.innerHTML", tag.innerHTML);
      console.log("tag.dataset.hashTag", tag.dataset.hashTag);
      if (tag.dataset.hashTag === "#") {
        tag.getAttribute("class") === "hjboard-view-node-selected" ? tag.removeAttribute("class") : tag.setAttribute("class", "hjboard-view-node-selected");
        console.log(e.target.getAttribute("class"));
      }
    });
