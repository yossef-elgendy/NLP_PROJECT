export function handleRequest(e){
    e.preventDefault();
    const url = document.getElementById('article-url').value

    if(url == ""){
        alert('Please enter a url !!')
        return
    }

    if(Client.validURL(url)){
        fetch('http://localhost:8081/sentiment-2.0', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url
            })
        }).then(response => response.json())
        .then(function(res){
            console.log(res)
            document.getElementById('score_tag').innerHTML =res.score_tag?"Score Tag: "+res.score_tag:""
            document.getElementById('confidence').innerHTML = res.confidence?"Confidence: " + res.confidence:""
            document.getElementById('subjectivity').innerHTML = res.subjectivity?"Subjectivity: "+res.subjectivity:""
            document.getElementById('agreement').innerHTML = res.agreement?"Agreement: "+res.agreement: ""
            document.getElementById('irony').innerHTML = res.irony?"Irony: "+res.irony: ""
        })
        .catch(error=>console.log(error))
    } else {
        alert('Please Enter a valid url!!')
        return
    }


}
