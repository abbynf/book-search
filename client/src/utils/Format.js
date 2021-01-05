function Format (id, title) {
    // format link so it will bring up the right result
    let formatTitle = "";
    for (let i=0; i<title.length; i++){
        if (title[i] === " "){
            formatTitle = formatTitle + "+"
        } else {
            formatTitle = formatTitle + title[i]
        }
    };

    console.log(formatTitle);
    const link = "http://books.google.com/books?id=" + id + "&dq=title:" + formatTitle + "&hl=&source=gbs_api";
    return link;
};

export default Format;