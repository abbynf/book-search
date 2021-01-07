
// eslint-disable-next-line
export default {

    formatLink: function (id, title) {
        // format link so it will bring up the right result
        let formatTitle = "";
        for (let i=0; i<title.length; i++){
            if (title[i] === " "){
                formatTitle = formatTitle + "+"
            } else {
                formatTitle = formatTitle + title[i]
            }
        };
        
        const link = "http://books.google.com/books?id=" + id + "&dq=title:" + formatTitle + "&hl=&source=gbs_api";
        return link;
    },
    listAuthors: function(authorArray) {
        let authorString = authorArray[0];
        for (let i=1; i< authorArray.length; i++){
            authorString = authorString + ", " + authorArray[i]
        }
        console.log(authorString);
        return authorString;
    }
}