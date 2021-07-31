var content = document.querySelector('#mw-content-text');
var requestURL = 'https://community.fandom.com/zh/wikia.php?controller=DiscussionModeration&method=getReportedPosts&page=0&limit=100';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.origin = '*';
request.send();

function showReported(jsonObj) {
  var reportedItems = jsonObj['_embedded']['doc:posts'];

  for(i = 0; i < reportedItems.length; i++) {
    var myArticle = document.createElement('div');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myH2.textContent = reportedItems[i]['forumName'];
    myPara1.textContent = 'Item created by: ' + reportedItems[i]['createdBy']['name'];
    myPara2.textContent = 'Thread id:' + reportedItems[i]['threadId'];
    myPara3.textContent = 'Raw content: ' + reportedItems[i]['rawContent'];

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    content.appendChild(myArticle);
  }
}

request.onload = function() {
  var f_reported = request.response;
  showReported(f_reported);
}
